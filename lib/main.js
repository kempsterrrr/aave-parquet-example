"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const evm_processor_1 = require("@subsquid/evm-processor");
const poolAbi = __importStar(require("./abi/aavePool"));
const file_store_1 = require("@subsquid/file-store");
const file_store_parquet_1 = require("@subsquid/file-store-parquet");
// ---- ENV ----
const CHAIN = process.env.CHAIN ?? 'ethereum-mainnet';
const RPC_HTTP = process.env.RPC_HTTP;
const POOL = process.env.POOL_ADDRESS;
if (!RPC_HTTP)
    throw new Error('Missing RPC_HTTP in .env');
if (!POOL)
    throw new Error('Missing POOL_ADDRESS in .env');
// ---- Processor ----
const processor = new evm_processor_1.EvmBatchProcessor()
    .setGateway(`https://v2.archive.subsquid.io/network/${CHAIN}`)
    .setRpcEndpoint({ url: RPC_HTTP, rateLimit: 10 })
    .setFinalityConfirmation(75)
    .setBlockRange({ from: 16291127 }) // Start from Aave V3 deployment
    .setFields({
    block: {
        timestamp: true
    }
})
    .addLog({
    address: [POOL],
    topic0: [
        poolAbi.events.Supply.topic,
        poolAbi.events.Withdraw.topic,
        poolAbi.events.Borrow.topic,
        poolAbi.events.Repay.topic,
        poolAbi.events.LiquidationCall.topic,
    ]
});
// ---- File store + Parquet table ----
const aaveEventsTable = new file_store_parquet_1.Table('aave_pool_events.parquet', {
    kind: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    txHash: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    block: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint64()),
    timestamp: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Timestamp()),
    user: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    reserve: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    amount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    rateMode: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32(), { nullable: true }),
    debtAsset: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    collateralAsset: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    debtToCover: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true })
});
const database = new file_store_1.Database({
    tables: {
        aaveEvents: aaveEventsTable
    },
    dest: new file_store_1.LocalDest('./data'),
    chunkSizeMb: 64
});
// ---- Run ----
processor.run(database, async (ctx) => {
    for (const b of ctx.blocks) {
        const blockTimestamp = new Date(b.header.timestamp);
        for (const log of b.logs) {
            switch (log.topics[0]) {
                case poolAbi.events.Supply.topic: {
                    const ev = poolAbi.events.Supply.decode(log);
                    ctx.store.aaveEvents.write({
                        kind: 'Supply',
                        txHash: log.transaction?.hash ?? '',
                        block: b.header.height,
                        timestamp: blockTimestamp,
                        user: ev.user,
                        reserve: ev.reserve,
                        amount: ev.amount.toString(),
                        rateMode: undefined,
                        debtAsset: undefined,
                        collateralAsset: undefined,
                        debtToCover: undefined
                    });
                    break;
                }
                case poolAbi.events.Withdraw.topic: {
                    const ev = poolAbi.events.Withdraw.decode(log);
                    ctx.store.aaveEvents.write({
                        kind: 'Withdraw',
                        txHash: log.transaction?.hash ?? '',
                        block: b.header.height,
                        timestamp: blockTimestamp,
                        user: ev.user,
                        reserve: ev.reserve,
                        amount: ev.amount.toString(),
                        rateMode: undefined,
                        debtAsset: undefined,
                        collateralAsset: undefined,
                        debtToCover: undefined
                    });
                    break;
                }
                case poolAbi.events.Borrow.topic: {
                    const ev = poolAbi.events.Borrow.decode(log);
                    ctx.store.aaveEvents.write({
                        kind: 'Borrow',
                        txHash: log.transaction?.hash ?? '',
                        block: b.header.height,
                        timestamp: blockTimestamp,
                        user: ev.user,
                        reserve: ev.reserve,
                        amount: ev.amount.toString(),
                        rateMode: Number(ev.interestRateMode),
                        debtAsset: undefined,
                        collateralAsset: undefined,
                        debtToCover: undefined
                    });
                    break;
                }
                case poolAbi.events.Repay.topic: {
                    const ev = poolAbi.events.Repay.decode(log);
                    ctx.store.aaveEvents.write({
                        kind: 'Repay',
                        txHash: log.transaction?.hash ?? '',
                        block: b.header.height,
                        timestamp: blockTimestamp,
                        user: ev.user,
                        reserve: ev.reserve,
                        amount: ev.amount.toString(),
                        rateMode: undefined,
                        debtAsset: undefined,
                        collateralAsset: undefined,
                        debtToCover: undefined
                    });
                    break;
                }
                case poolAbi.events.LiquidationCall.topic: {
                    const ev = poolAbi.events.LiquidationCall.decode(log);
                    ctx.store.aaveEvents.write({
                        kind: 'LiquidationCall',
                        txHash: log.transaction?.hash ?? '',
                        block: b.header.height,
                        timestamp: blockTimestamp,
                        user: ev.user,
                        reserve: ev.collateralAsset,
                        amount: ev.liquidatedCollateralAmount.toString(),
                        rateMode: undefined,
                        debtAsset: ev.debtAsset,
                        collateralAsset: ev.collateralAsset,
                        debtToCover: ev.debtToCover.toString()
                    });
                    break;
                }
            }
        }
    }
});
//# sourceMappingURL=main.js.map