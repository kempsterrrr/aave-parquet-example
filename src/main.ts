import 'dotenv/config'
import { EvmBatchProcessor } from '@subsquid/evm-processor'
import * as poolAbi from './abi/aavePool'
import { Database, LocalDest } from '@subsquid/file-store'
import { Table, Column, Types } from '@subsquid/file-store-parquet'

// ---- ENV ----
const CHAIN = process.env.CHAIN ?? 'ethereum-mainnet'
const RPC_HTTP = process.env.RPC_HTTP
const POOL = process.env.POOL_ADDRESS

if (!RPC_HTTP) throw new Error('Missing RPC_HTTP in .env')
if (!POOL) throw new Error('Missing POOL_ADDRESS in .env')

// ---- Processor ----
const processor = new EvmBatchProcessor()
  .setGateway(`https://v2.archive.subsquid.io/network/${CHAIN}`)
  .setRpcEndpoint({ url: RPC_HTTP, rateLimit: 10 })
  .setFinalityConfirmation(75)
  .addLog({
    address: [POOL],
    topic0: [
      poolAbi.events.Supply.topic,
      poolAbi.events.Withdraw.topic,
      poolAbi.events.Borrow.topic,
      poolAbi.events.Repay.topic,
      poolAbi.events.LiquidationCall.topic,
      // Add more topics as needed
    ]
  })

// ---- File store + Parquet table ----
const aaveEventsTable = new Table('aave_pool_events.parquet', {
  kind: Column(Types.String()),
  txHash: Column(Types.String()),
  block: Column(Types.Uint64()),
  user: Column(Types.String()),
  reserve: Column(Types.String()),
  amount: Column(Types.String()),
  rateMode: Column(Types.Uint32(), { nullable: true }),
  debtAsset: Column(Types.String(), { nullable: true }),
  collateralAsset: Column(Types.String(), { nullable: true }),
  debtToCover: Column(Types.String(), { nullable: true })
})

const database = new Database({
  tables: {
    aaveEvents: aaveEventsTable
  },
  dest: new LocalDest('./data'),
  chunkSizeMb: 64
})

// ---- Run ----
processor.run(database, async (ctx) => {
  for (const b of ctx.blocks) {
    for (const log of b.logs) {
      switch (log.topics[0]) {
        case poolAbi.events.Supply.topic: {
          const ev = poolAbi.events.Supply.decode(log)
          ctx.store.aaveEvents.write({
            kind: 'Supply',
            txHash: log.transaction?.hash ?? '',
            block: b.header.height,
            user: ev.user,
            reserve: ev.reserve,
            amount: ev.amount.toString(),
            rateMode: undefined,
            debtAsset: undefined,
            collateralAsset: undefined,
            debtToCover: undefined
          })
          break
        }
        case poolAbi.events.Withdraw.topic: {
          const ev = poolAbi.events.Withdraw.decode(log)
          ctx.store.aaveEvents.write({
            kind: 'Withdraw',
            txHash: log.transaction?.hash ?? '',
            block: b.header.height,
            user: ev.user,
            reserve: ev.reserve,
            amount: ev.amount.toString(),
            rateMode: undefined,
            debtAsset: undefined,
            collateralAsset: undefined,
            debtToCover: undefined
          })
          break
        }
        case poolAbi.events.Borrow.topic: {
          const ev = poolAbi.events.Borrow.decode(log)
          ctx.store.aaveEvents.write({
            kind: 'Borrow',
            txHash: log.transaction?.hash ?? '',
            block: b.header.height,
            user: ev.user,
            reserve: ev.reserve,
            amount: ev.amount.toString(),
            rateMode: Number(ev.interestRateMode),
            debtAsset: undefined,
            collateralAsset: undefined,
            debtToCover: undefined
          })
          break
        }
        case poolAbi.events.Repay.topic: {
          const ev = poolAbi.events.Repay.decode(log)
          ctx.store.aaveEvents.write({
            kind: 'Repay',
            txHash: log.transaction?.hash ?? '',
            block: b.header.height,
            user: ev.user,
            reserve: ev.reserve,
            amount: ev.amount.toString(),
            rateMode: undefined,
            debtAsset: undefined,
            collateralAsset: undefined,
            debtToCover: undefined
          })
          break
        }
        case poolAbi.events.LiquidationCall.topic: {
          const ev = poolAbi.events.LiquidationCall.decode(log)
          ctx.store.aaveEvents.write({
            kind: 'LiquidationCall',
            txHash: log.transaction?.hash ?? '',
            block: b.header.height,
            user: ev.user,
            reserve: ev.collateralAsset,
            amount: ev.liquidatedCollateralAmount.toString(),
            rateMode: undefined,
            debtAsset: ev.debtAsset,
            collateralAsset: ev.collateralAsset,
            debtToCover: ev.debtToCover.toString()
          })
          break
        }
      }
    }
  }
})