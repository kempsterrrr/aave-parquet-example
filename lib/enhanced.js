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
// ---- Token Symbol Mapping ----
const TOKEN_SYMBOLS = {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': 'WETH',
    '0x6B175474E89094C44Da98b954EedeAC495271d0F': 'DAI',
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'USDC',
    '0xdAC17F958D2ee523a2206206994597C13D831ec7': 'USDT',
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599': 'WBTC',
    '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0': 'wstETH',
    '0x83F20F44975D03b1b09e64809B757c47f942BEeA': 'sDAI',
    '0x514910771AF9Ca656af840dff83E8264EcF986CA': 'LINK',
};
// ---- Processor ----
const processor = new evm_processor_1.EvmBatchProcessor()
    .setGateway(`https://v2.archive.subsquid.io/network/${CHAIN}`)
    .setRpcEndpoint({ url: RPC_HTTP, rateLimit: 10 })
    .setFinalityConfirmation(75)
    .setBlockRange({ from: 16291127 }) // Aave V3 Pool deployment block
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
// ---- Enhanced Events Table ----
const eventsTable = new file_store_parquet_1.Table('aave_events.parquet', {
    // Core event data
    kind: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    txHash: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    block: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint64()),
    timestamp: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Timestamp()),
    // User and asset info
    user: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    reserve: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    tokenSymbol: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    // Amounts (keeping as string to preserve precision)
    amount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    amountUSD: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }), // Will be calculated later
    // Event-specific fields
    rateMode: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32(), { nullable: true }),
    repayer: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    liquidator: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    debtAsset: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    debtAssetSymbol: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    collateralAsset: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    collateralAssetSymbol: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
    debtToCover: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String(), { nullable: true }),
});
// ---- Hourly Metrics Table ----
const metricsTable = new file_store_parquet_1.Table('aave_metrics_hourly.parquet', {
    timestamp: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Timestamp()), // Hour timestamp
    asset: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()), // Token symbol
    // Event counts
    supplyCount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32()),
    withdrawCount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32()),
    borrowCount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32()),
    repayCount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32()),
    liquidationCount: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.Uint32()),
    // Volume metrics (in token units)
    supplyVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    withdrawVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    borrowVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    repayVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    liquidationVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()),
    // Net changes
    netSupplyVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()), // supply - withdraw
    netBorrowVolume: (0, file_store_parquet_1.Column)(file_store_parquet_1.Types.String()), // borrow - repay
});
// ---- Database ----
const database = new file_store_1.Database({
    tables: {
        events: eventsTable,
        metrics: metricsTable
    },
    dest: new file_store_1.LocalDest('./enhanced-data'),
    chunkSizeMb: 5 // 5MB chunks for faster iteration
});
let currentHour = 0;
let hourlyMetrics = {};
function getTokenSymbol(address) {
    return TOKEN_SYMBOLS[address] || `UNKNOWN_${address.slice(0, 8)}`;
}
function getHourTimestamp(blockTimestamp) {
    return Math.floor(blockTimestamp / 3600) * 3600; // Round down to hour
}
function initializeAssetMetrics(asset) {
    if (!hourlyMetrics[asset]) {
        hourlyMetrics[asset] = {
            supplyCount: 0,
            withdrawCount: 0,
            borrowCount: 0,
            repayCount: 0,
            liquidationCount: 0,
            supplyVolume: 0n,
            withdrawVolume: 0n,
            borrowVolume: 0n,
            repayVolume: 0n,
            liquidationVolume: 0n,
        };
    }
}
async function flushMetrics(ctx, hourTimestamp) {
    for (const [asset, metrics] of Object.entries(hourlyMetrics)) {
        ctx.store.metrics.write({
            timestamp: new Date(hourTimestamp * 1000),
            asset,
            supplyCount: metrics.supplyCount,
            withdrawCount: metrics.withdrawCount,
            borrowCount: metrics.borrowCount,
            repayCount: metrics.repayCount,
            liquidationCount: metrics.liquidationCount,
            supplyVolume: metrics.supplyVolume.toString(),
            withdrawVolume: metrics.withdrawVolume.toString(),
            borrowVolume: metrics.borrowVolume.toString(),
            repayVolume: metrics.repayVolume.toString(),
            liquidationVolume: metrics.liquidationVolume.toString(),
            netSupplyVolume: (metrics.supplyVolume - metrics.withdrawVolume).toString(),
            netBorrowVolume: (metrics.borrowVolume - metrics.repayVolume).toString(),
        });
    }
    // Reset for next hour
    hourlyMetrics = {};
}
// ---- Run ----
processor.run(database, async (ctx) => {
    console.log(`Processing ${ctx.blocks.length} blocks, from ${ctx.blocks[0]?.header.height} to ${ctx.blocks[ctx.blocks.length - 1]?.header.height}`);
    let eventCount = 0;
    let supplyCount = 0, withdrawCount = 0, borrowCount = 0, repayCount = 0, liquidationCount = 0;
    for (const b of ctx.blocks) {
        const blockTimestamp = Math.floor(b.header.timestamp / 1000); // Convert to seconds
        const hourTimestamp = getHourTimestamp(blockTimestamp);
        // Check if we need to flush metrics for the previous hour
        if (currentHour !== 0 && hourTimestamp > currentHour) {
            await flushMetrics(ctx, currentHour);
        }
        currentHour = hourTimestamp;
        for (const log of b.logs) {
            eventCount++;
            const commonData = {
                txHash: log.transaction?.hash ?? '',
                block: b.header.height,
                timestamp: new Date(blockTimestamp * 1000),
            };
            switch (log.topics[0]) {
                case poolAbi.events.Supply.topic: {
                    const ev = poolAbi.events.Supply.decode(log);
                    const tokenSymbol = getTokenSymbol(ev.reserve);
                    supplyCount++;
                    // Write event
                    ctx.store.events.write({
                        kind: 'Supply',
                        ...commonData,
                        user: ev.user,
                        reserve: ev.reserve,
                        tokenSymbol,
                        amount: ev.amount.toString(),
                        amountUSD: null,
                        rateMode: undefined,
                        repayer: undefined,
                        liquidator: undefined,
                        debtAsset: undefined,
                        debtAssetSymbol: undefined,
                        collateralAsset: undefined,
                        collateralAssetSymbol: undefined,
                        debtToCover: undefined,
                    });
                    // Update metrics
                    initializeAssetMetrics(tokenSymbol);
                    hourlyMetrics[tokenSymbol].supplyCount++;
                    hourlyMetrics[tokenSymbol].supplyVolume += BigInt(ev.amount.toString());
                    break;
                }
                case poolAbi.events.Withdraw.topic: {
                    const ev = poolAbi.events.Withdraw.decode(log);
                    const tokenSymbol = getTokenSymbol(ev.reserve);
                    withdrawCount++;
                    // Write event
                    ctx.store.events.write({
                        kind: 'Withdraw',
                        ...commonData,
                        user: ev.user,
                        reserve: ev.reserve,
                        tokenSymbol,
                        amount: ev.amount.toString(),
                        amountUSD: null,
                        rateMode: undefined,
                        repayer: undefined,
                        liquidator: undefined,
                        debtAsset: undefined,
                        debtAssetSymbol: undefined,
                        collateralAsset: undefined,
                        collateralAssetSymbol: undefined,
                        debtToCover: undefined,
                    });
                    // Update metrics
                    initializeAssetMetrics(tokenSymbol);
                    hourlyMetrics[tokenSymbol].withdrawCount++;
                    hourlyMetrics[tokenSymbol].withdrawVolume += BigInt(ev.amount.toString());
                    break;
                }
                case poolAbi.events.Borrow.topic: {
                    const ev = poolAbi.events.Borrow.decode(log);
                    const tokenSymbol = getTokenSymbol(ev.reserve);
                    borrowCount++;
                    // Write event
                    ctx.store.events.write({
                        kind: 'Borrow',
                        ...commonData,
                        user: ev.user,
                        reserve: ev.reserve,
                        tokenSymbol,
                        amount: ev.amount.toString(),
                        amountUSD: null,
                        rateMode: Number(ev.interestRateMode),
                        repayer: undefined,
                        liquidator: undefined,
                        debtAsset: undefined,
                        debtAssetSymbol: undefined,
                        collateralAsset: undefined,
                        collateralAssetSymbol: undefined,
                        debtToCover: undefined,
                    });
                    // Update metrics
                    initializeAssetMetrics(tokenSymbol);
                    hourlyMetrics[tokenSymbol].borrowCount++;
                    hourlyMetrics[tokenSymbol].borrowVolume += BigInt(ev.amount.toString());
                    break;
                }
                case poolAbi.events.Repay.topic: {
                    const ev = poolAbi.events.Repay.decode(log);
                    const tokenSymbol = getTokenSymbol(ev.reserve);
                    repayCount++;
                    // Write event
                    ctx.store.events.write({
                        kind: 'Repay',
                        ...commonData,
                        user: ev.user,
                        reserve: ev.reserve,
                        tokenSymbol,
                        amount: ev.amount.toString(),
                        amountUSD: null,
                        rateMode: undefined,
                        repayer: ev.repayer,
                        liquidator: undefined,
                        debtAsset: undefined,
                        debtAssetSymbol: undefined,
                        collateralAsset: undefined,
                        collateralAssetSymbol: undefined,
                        debtToCover: undefined,
                    });
                    // Update metrics
                    initializeAssetMetrics(tokenSymbol);
                    hourlyMetrics[tokenSymbol].repayCount++;
                    hourlyMetrics[tokenSymbol].repayVolume += BigInt(ev.amount.toString());
                    break;
                }
                case poolAbi.events.LiquidationCall.topic: {
                    const ev = poolAbi.events.LiquidationCall.decode(log);
                    const collateralSymbol = getTokenSymbol(ev.collateralAsset);
                    const debtSymbol = getTokenSymbol(ev.debtAsset);
                    liquidationCount++;
                    // Write event
                    ctx.store.events.write({
                        kind: 'LiquidationCall',
                        ...commonData,
                        user: ev.user,
                        reserve: ev.collateralAsset,
                        tokenSymbol: collateralSymbol,
                        amount: ev.liquidatedCollateralAmount.toString(),
                        amountUSD: null,
                        rateMode: undefined,
                        repayer: undefined,
                        liquidator: ev.liquidator,
                        debtAsset: ev.debtAsset,
                        debtAssetSymbol: debtSymbol,
                        collateralAsset: ev.collateralAsset,
                        collateralAssetSymbol: collateralSymbol,
                        debtToCover: ev.debtToCover.toString(),
                    });
                    // Update metrics for both assets
                    initializeAssetMetrics(collateralSymbol);
                    initializeAssetMetrics(debtSymbol);
                    hourlyMetrics[collateralSymbol].liquidationCount++;
                    hourlyMetrics[collateralSymbol].liquidationVolume += BigInt(ev.liquidatedCollateralAmount.toString());
                    break;
                }
            }
        }
    }
    // Flush metrics for the current hour if we have data
    if (Object.keys(hourlyMetrics).length > 0) {
        await flushMetrics(ctx, currentHour);
    }
    if (eventCount > 0) {
        console.log(`✅ Found ${eventCount} Aave events: Supply(${supplyCount}), Withdraw(${withdrawCount}), Borrow(${borrowCount}), Repay(${repayCount}), Liquidation(${liquidationCount})`);
        console.log(`📊 Aggregated metrics for hour ${new Date(currentHour * 1000).toISOString()}`);
    }
});
//# sourceMappingURL=enhanced.js.map