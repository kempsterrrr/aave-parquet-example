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
exports.Contract = exports.functions = exports.events = exports.abi = void 0;
const ethers = __importStar(require("ethers"));
const abi_support_1 = require("./abi.support");
const aavePool_abi_1 = require("./aavePool.abi");
exports.abi = new ethers.Interface(aavePool_abi_1.ABI_JSON);
exports.events = {
    BackUnbacked: new abi_support_1.LogEvent(exports.abi, '0x281596e92b2d974beb7d4f124df30a0b39067b096893e95011ce4bdad798b759'),
    Borrow: new abi_support_1.LogEvent(exports.abi, '0xb3d084820fb1a9decffb176436bd02558d15fac9b0ddfed8c465bc7359d7dce0'),
    FlashLoan: new abi_support_1.LogEvent(exports.abi, '0xefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f0'),
    IsolationModeTotalDebtUpdated: new abi_support_1.LogEvent(exports.abi, '0xaef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5'),
    LiquidationCall: new abi_support_1.LogEvent(exports.abi, '0xe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e005286'),
    MintUnbacked: new abi_support_1.LogEvent(exports.abi, '0xf25af37b3d3ec226063dc9bdc103ece7eb110a50f340fe854bb7bc1b0676d7d0'),
    MintedToTreasury: new abi_support_1.LogEvent(exports.abi, '0xbfa21aa5d5f9a1f0120a95e7c0749f389863cbdbfff531aa7339077a5bc919de'),
    RebalanceStableBorrowRate: new abi_support_1.LogEvent(exports.abi, '0x9f439ae0c81e41a04d3fdfe07aed54e6a179fb0db15be7702eb66fa8ef6f5300'),
    Repay: new abi_support_1.LogEvent(exports.abi, '0xa534c8dbe71f871f9f3530e97a74601fea17b426cae02e1c5aee42c96c784051'),
    ReserveDataUpdated: new abi_support_1.LogEvent(exports.abi, '0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a'),
    ReserveUsedAsCollateralDisabled: new abi_support_1.LogEvent(exports.abi, '0x44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd'),
    ReserveUsedAsCollateralEnabled: new abi_support_1.LogEvent(exports.abi, '0x00058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2'),
    Supply: new abi_support_1.LogEvent(exports.abi, '0x2b627736bca15cd5381dcf80b0bf11fd197d01a037c52b927a881a10fb73ba61'),
    SwapBorrowRateMode: new abi_support_1.LogEvent(exports.abi, '0x7962b394d85a534033ba2efcf43cd36de57b7ebeb3de0ca4428965d9b3ddc481'),
    UserEModeSet: new abi_support_1.LogEvent(exports.abi, '0xd728da875fc88944cbf17638bcbe4af0eedaef63becd1d1c57cc097eb4608d84'),
    Withdraw: new abi_support_1.LogEvent(exports.abi, '0x3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f7'),
};
exports.functions = {
    ADDRESSES_PROVIDER: new abi_support_1.Func(exports.abi, '0x0542975c'),
    BRIDGE_PROTOCOL_FEE: new abi_support_1.Func(exports.abi, '0x272d9072'),
    FLASHLOAN_PREMIUM_TOTAL: new abi_support_1.Func(exports.abi, '0x074b2e43'),
    FLASHLOAN_PREMIUM_TO_PROTOCOL: new abi_support_1.Func(exports.abi, '0x6a99c036'),
    MAX_NUMBER_RESERVES: new abi_support_1.Func(exports.abi, '0xf8119d51'),
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT: new abi_support_1.Func(exports.abi, '0xe82fec2f'),
    backUnbacked: new abi_support_1.Func(exports.abi, '0xd65dc7a1'),
    borrow: new abi_support_1.Func(exports.abi, '0xa415bcad'),
    configureEModeCategory: new abi_support_1.Func(exports.abi, '0xd579ea7d'),
    deposit: new abi_support_1.Func(exports.abi, '0xe8eda9df'),
    dropReserve: new abi_support_1.Func(exports.abi, '0x63c9b860'),
    finalizeTransfer: new abi_support_1.Func(exports.abi, '0xd5ed3933'),
    flashLoan: new abi_support_1.Func(exports.abi, '0xab9c4b5d'),
    flashLoanSimple: new abi_support_1.Func(exports.abi, '0x42b0b77c'),
    getConfiguration: new abi_support_1.Func(exports.abi, '0xc44b11f7'),
    getEModeCategoryData: new abi_support_1.Func(exports.abi, '0x6c6f6ae1'),
    getReserveAddressById: new abi_support_1.Func(exports.abi, '0x52751797'),
    getReserveData: new abi_support_1.Func(exports.abi, '0x35ea6a75'),
    getReserveNormalizedIncome: new abi_support_1.Func(exports.abi, '0xd15e0053'),
    getReserveNormalizedVariableDebt: new abi_support_1.Func(exports.abi, '0x386497fd'),
    getReservesList: new abi_support_1.Func(exports.abi, '0xd1946dbc'),
    getUserAccountData: new abi_support_1.Func(exports.abi, '0xbf92857c'),
    getUserConfiguration: new abi_support_1.Func(exports.abi, '0x4417a583'),
    getUserEMode: new abi_support_1.Func(exports.abi, '0xeddf1b79'),
    initReserve: new abi_support_1.Func(exports.abi, '0x7a708e92'),
    liquidationCall: new abi_support_1.Func(exports.abi, '0x00a718a9'),
    mintToTreasury: new abi_support_1.Func(exports.abi, '0x9cd19996'),
    mintUnbacked: new abi_support_1.Func(exports.abi, '0x69a933a5'),
    rebalanceStableBorrowRate: new abi_support_1.Func(exports.abi, '0xcd112382'),
    repay: new abi_support_1.Func(exports.abi, '0x573ade81'),
    repayWithATokens: new abi_support_1.Func(exports.abi, '0x2dad97d4'),
    repayWithPermit: new abi_support_1.Func(exports.abi, '0xee3e210b'),
    rescueTokens: new abi_support_1.Func(exports.abi, '0xcea9d26f'),
    resetIsolationModeTotalDebt: new abi_support_1.Func(exports.abi, '0xe43e88a1'),
    setConfiguration: new abi_support_1.Func(exports.abi, '0xf51e435b'),
    setReserveInterestRateStrategyAddress: new abi_support_1.Func(exports.abi, '0x1d2118f9'),
    setUserEMode: new abi_support_1.Func(exports.abi, '0x28530a47'),
    setUserUseReserveAsCollateral: new abi_support_1.Func(exports.abi, '0x5a3b74b9'),
    supply: new abi_support_1.Func(exports.abi, '0x617ba037'),
    supplyWithPermit: new abi_support_1.Func(exports.abi, '0x02c205f0'),
    swapBorrowRateMode: new abi_support_1.Func(exports.abi, '0x94ba89a2'),
    updateBridgeProtocolFee: new abi_support_1.Func(exports.abi, '0x3036b439'),
    updateFlashloanPremiums: new abi_support_1.Func(exports.abi, '0xbcb6e522'),
    withdraw: new abi_support_1.Func(exports.abi, '0x69328dec'),
};
class Contract extends abi_support_1.ContractBase {
    ADDRESSES_PROVIDER() {
        return this.eth_call(exports.functions.ADDRESSES_PROVIDER, []);
    }
    BRIDGE_PROTOCOL_FEE() {
        return this.eth_call(exports.functions.BRIDGE_PROTOCOL_FEE, []);
    }
    FLASHLOAN_PREMIUM_TOTAL() {
        return this.eth_call(exports.functions.FLASHLOAN_PREMIUM_TOTAL, []);
    }
    FLASHLOAN_PREMIUM_TO_PROTOCOL() {
        return this.eth_call(exports.functions.FLASHLOAN_PREMIUM_TO_PROTOCOL, []);
    }
    MAX_NUMBER_RESERVES() {
        return this.eth_call(exports.functions.MAX_NUMBER_RESERVES, []);
    }
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT() {
        return this.eth_call(exports.functions.MAX_STABLE_RATE_BORROW_SIZE_PERCENT, []);
    }
    getConfiguration(asset) {
        return this.eth_call(exports.functions.getConfiguration, [asset]);
    }
    getEModeCategoryData(id) {
        return this.eth_call(exports.functions.getEModeCategoryData, [id]);
    }
    getReserveAddressById(id) {
        return this.eth_call(exports.functions.getReserveAddressById, [id]);
    }
    getReserveData(asset) {
        return this.eth_call(exports.functions.getReserveData, [asset]);
    }
    getReserveNormalizedIncome(asset) {
        return this.eth_call(exports.functions.getReserveNormalizedIncome, [asset]);
    }
    getReserveNormalizedVariableDebt(asset) {
        return this.eth_call(exports.functions.getReserveNormalizedVariableDebt, [asset]);
    }
    getReservesList() {
        return this.eth_call(exports.functions.getReservesList, []);
    }
    getUserAccountData(user) {
        return this.eth_call(exports.functions.getUserAccountData, [user]);
    }
    getUserConfiguration(user) {
        return this.eth_call(exports.functions.getUserConfiguration, [user]);
    }
    getUserEMode(user) {
        return this.eth_call(exports.functions.getUserEMode, [user]);
    }
}
exports.Contract = Contract;
//# sourceMappingURL=aavePool.js.map