import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './aavePool.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    BackUnbacked: new LogEvent<([reserve: string, backer: string, amount: bigint, fee: bigint] & {reserve: string, backer: string, amount: bigint, fee: bigint})>(
        abi, '0x281596e92b2d974beb7d4f124df30a0b39067b096893e95011ce4bdad798b759'
    ),
    Borrow: new LogEvent<([reserve: string, user: string, onBehalfOf: string, amount: bigint, interestRateMode: number, borrowRate: bigint, referralCode: number] & {reserve: string, user: string, onBehalfOf: string, amount: bigint, interestRateMode: number, borrowRate: bigint, referralCode: number})>(
        abi, '0xb3d084820fb1a9decffb176436bd02558d15fac9b0ddfed8c465bc7359d7dce0'
    ),
    FlashLoan: new LogEvent<([target: string, initiator: string, asset: string, amount: bigint, interestRateMode: number, premium: bigint, referralCode: number] & {target: string, initiator: string, asset: string, amount: bigint, interestRateMode: number, premium: bigint, referralCode: number})>(
        abi, '0xefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f0'
    ),
    IsolationModeTotalDebtUpdated: new LogEvent<([asset: string, totalDebt: bigint] & {asset: string, totalDebt: bigint})>(
        abi, '0xaef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5'
    ),
    LiquidationCall: new LogEvent<([collateralAsset: string, debtAsset: string, user: string, debtToCover: bigint, liquidatedCollateralAmount: bigint, liquidator: string, receiveAToken: boolean] & {collateralAsset: string, debtAsset: string, user: string, debtToCover: bigint, liquidatedCollateralAmount: bigint, liquidator: string, receiveAToken: boolean})>(
        abi, '0xe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e005286'
    ),
    MintUnbacked: new LogEvent<([reserve: string, user: string, onBehalfOf: string, amount: bigint, referralCode: number] & {reserve: string, user: string, onBehalfOf: string, amount: bigint, referralCode: number})>(
        abi, '0xf25af37b3d3ec226063dc9bdc103ece7eb110a50f340fe854bb7bc1b0676d7d0'
    ),
    MintedToTreasury: new LogEvent<([reserve: string, amountMinted: bigint] & {reserve: string, amountMinted: bigint})>(
        abi, '0xbfa21aa5d5f9a1f0120a95e7c0749f389863cbdbfff531aa7339077a5bc919de'
    ),
    RebalanceStableBorrowRate: new LogEvent<([reserve: string, user: string] & {reserve: string, user: string})>(
        abi, '0x9f439ae0c81e41a04d3fdfe07aed54e6a179fb0db15be7702eb66fa8ef6f5300'
    ),
    Repay: new LogEvent<([reserve: string, user: string, repayer: string, amount: bigint, useATokens: boolean] & {reserve: string, user: string, repayer: string, amount: bigint, useATokens: boolean})>(
        abi, '0xa534c8dbe71f871f9f3530e97a74601fea17b426cae02e1c5aee42c96c784051'
    ),
    ReserveDataUpdated: new LogEvent<([reserve: string, liquidityRate: bigint, stableBorrowRate: bigint, variableBorrowRate: bigint, liquidityIndex: bigint, variableBorrowIndex: bigint] & {reserve: string, liquidityRate: bigint, stableBorrowRate: bigint, variableBorrowRate: bigint, liquidityIndex: bigint, variableBorrowIndex: bigint})>(
        abi, '0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a'
    ),
    ReserveUsedAsCollateralDisabled: new LogEvent<([reserve: string, user: string] & {reserve: string, user: string})>(
        abi, '0x44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd'
    ),
    ReserveUsedAsCollateralEnabled: new LogEvent<([reserve: string, user: string] & {reserve: string, user: string})>(
        abi, '0x00058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2'
    ),
    Supply: new LogEvent<([reserve: string, user: string, onBehalfOf: string, amount: bigint, referralCode: number] & {reserve: string, user: string, onBehalfOf: string, amount: bigint, referralCode: number})>(
        abi, '0x2b627736bca15cd5381dcf80b0bf11fd197d01a037c52b927a881a10fb73ba61'
    ),
    SwapBorrowRateMode: new LogEvent<([reserve: string, user: string, interestRateMode: number] & {reserve: string, user: string, interestRateMode: number})>(
        abi, '0x7962b394d85a534033ba2efcf43cd36de57b7ebeb3de0ca4428965d9b3ddc481'
    ),
    UserEModeSet: new LogEvent<([user: string, categoryId: number] & {user: string, categoryId: number})>(
        abi, '0xd728da875fc88944cbf17638bcbe4af0eedaef63becd1d1c57cc097eb4608d84'
    ),
    Withdraw: new LogEvent<([reserve: string, user: string, to: string, amount: bigint] & {reserve: string, user: string, to: string, amount: bigint})>(
        abi, '0x3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f7'
    ),
}

export const functions = {
    ADDRESSES_PROVIDER: new Func<[], {}, string>(
        abi, '0x0542975c'
    ),
    BRIDGE_PROTOCOL_FEE: new Func<[], {}, bigint>(
        abi, '0x272d9072'
    ),
    FLASHLOAN_PREMIUM_TOTAL: new Func<[], {}, bigint>(
        abi, '0x074b2e43'
    ),
    FLASHLOAN_PREMIUM_TO_PROTOCOL: new Func<[], {}, bigint>(
        abi, '0x6a99c036'
    ),
    MAX_NUMBER_RESERVES: new Func<[], {}, number>(
        abi, '0xf8119d51'
    ),
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT: new Func<[], {}, bigint>(
        abi, '0xe82fec2f'
    ),
    backUnbacked: new Func<[asset: string, amount: bigint, fee: bigint], {asset: string, amount: bigint, fee: bigint}, bigint>(
        abi, '0xd65dc7a1'
    ),
    borrow: new Func<[asset: string, amount: bigint, interestRateMode: bigint, referralCode: number, onBehalfOf: string], {asset: string, amount: bigint, interestRateMode: bigint, referralCode: number, onBehalfOf: string}, []>(
        abi, '0xa415bcad'
    ),
    configureEModeCategory: new Func<[id: number, config: ([ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string})], {id: number, config: ([ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string})}, []>(
        abi, '0xd579ea7d'
    ),
    deposit: new Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number], {asset: string, amount: bigint, onBehalfOf: string, referralCode: number}, []>(
        abi, '0xe8eda9df'
    ),
    dropReserve: new Func<[asset: string], {asset: string}, []>(
        abi, '0x63c9b860'
    ),
    finalizeTransfer: new Func<[asset: string, from: string, to: string, amount: bigint, balanceFromBefore: bigint, balanceToBefore: bigint], {asset: string, from: string, to: string, amount: bigint, balanceFromBefore: bigint, balanceToBefore: bigint}, []>(
        abi, '0xd5ed3933'
    ),
    flashLoan: new Func<[receiverAddress: string, assets: Array<string>, amounts: Array<bigint>, interestRateModes: Array<bigint>, onBehalfOf: string, params: string, referralCode: number], {receiverAddress: string, assets: Array<string>, amounts: Array<bigint>, interestRateModes: Array<bigint>, onBehalfOf: string, params: string, referralCode: number}, []>(
        abi, '0xab9c4b5d'
    ),
    flashLoanSimple: new Func<[receiverAddress: string, asset: string, amount: bigint, params: string, referralCode: number], {receiverAddress: string, asset: string, amount: bigint, params: string, referralCode: number}, []>(
        abi, '0x42b0b77c'
    ),
    getConfiguration: new Func<[asset: string], {asset: string}, ([data: bigint] & {data: bigint})>(
        abi, '0xc44b11f7'
    ),
    getEModeCategoryData: new Func<[id: number], {id: number}, ([ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string})>(
        abi, '0x6c6f6ae1'
    ),
    getReserveAddressById: new Func<[id: number], {id: number}, string>(
        abi, '0x52751797'
    ),
    getReserveData: new Func<[asset: string], {asset: string}, ([configuration: ([data: bigint] & {data: bigint}), liquidityIndex: bigint, currentLiquidityRate: bigint, variableBorrowIndex: bigint, currentVariableBorrowRate: bigint, currentStableBorrowRate: bigint, lastUpdateTimestamp: number, id: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, accruedToTreasury: bigint, unbacked: bigint, isolationModeTotalDebt: bigint] & {configuration: ([data: bigint] & {data: bigint}), liquidityIndex: bigint, currentLiquidityRate: bigint, variableBorrowIndex: bigint, currentVariableBorrowRate: bigint, currentStableBorrowRate: bigint, lastUpdateTimestamp: number, id: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, accruedToTreasury: bigint, unbacked: bigint, isolationModeTotalDebt: bigint})>(
        abi, '0x35ea6a75'
    ),
    getReserveNormalizedIncome: new Func<[asset: string], {asset: string}, bigint>(
        abi, '0xd15e0053'
    ),
    getReserveNormalizedVariableDebt: new Func<[asset: string], {asset: string}, bigint>(
        abi, '0x386497fd'
    ),
    getReservesList: new Func<[], {}, Array<string>>(
        abi, '0xd1946dbc'
    ),
    getUserAccountData: new Func<[user: string], {user: string}, ([totalCollateralBase: bigint, totalDebtBase: bigint, availableBorrowsBase: bigint, currentLiquidationThreshold: bigint, ltv: bigint, healthFactor: bigint] & {totalCollateralBase: bigint, totalDebtBase: bigint, availableBorrowsBase: bigint, currentLiquidationThreshold: bigint, ltv: bigint, healthFactor: bigint})>(
        abi, '0xbf92857c'
    ),
    getUserConfiguration: new Func<[user: string], {user: string}, ([data: bigint] & {data: bigint})>(
        abi, '0x4417a583'
    ),
    getUserEMode: new Func<[user: string], {user: string}, bigint>(
        abi, '0xeddf1b79'
    ),
    initReserve: new Func<[asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string], {asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string}, []>(
        abi, '0x7a708e92'
    ),
    liquidationCall: new Func<[collateralAsset: string, debtAsset: string, user: string, debtToCover: bigint, receiveAToken: boolean], {collateralAsset: string, debtAsset: string, user: string, debtToCover: bigint, receiveAToken: boolean}, []>(
        abi, '0x00a718a9'
    ),
    mintToTreasury: new Func<[assets: Array<string>], {assets: Array<string>}, []>(
        abi, '0x9cd19996'
    ),
    mintUnbacked: new Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number], {asset: string, amount: bigint, onBehalfOf: string, referralCode: number}, []>(
        abi, '0x69a933a5'
    ),
    rebalanceStableBorrowRate: new Func<[asset: string, user: string], {asset: string, user: string}, []>(
        abi, '0xcd112382'
    ),
    repay: new Func<[asset: string, amount: bigint, interestRateMode: bigint, onBehalfOf: string], {asset: string, amount: bigint, interestRateMode: bigint, onBehalfOf: string}, bigint>(
        abi, '0x573ade81'
    ),
    repayWithATokens: new Func<[asset: string, amount: bigint, interestRateMode: bigint], {asset: string, amount: bigint, interestRateMode: bigint}, bigint>(
        abi, '0x2dad97d4'
    ),
    repayWithPermit: new Func<[asset: string, amount: bigint, interestRateMode: bigint, onBehalfOf: string, deadline: bigint, permitV: number, permitR: string, permitS: string], {asset: string, amount: bigint, interestRateMode: bigint, onBehalfOf: string, deadline: bigint, permitV: number, permitR: string, permitS: string}, bigint>(
        abi, '0xee3e210b'
    ),
    rescueTokens: new Func<[token: string, to: string, amount: bigint], {token: string, to: string, amount: bigint}, []>(
        abi, '0xcea9d26f'
    ),
    resetIsolationModeTotalDebt: new Func<[asset: string], {asset: string}, []>(
        abi, '0xe43e88a1'
    ),
    setConfiguration: new Func<[asset: string, configuration: ([data: bigint] & {data: bigint})], {asset: string, configuration: ([data: bigint] & {data: bigint})}, []>(
        abi, '0xf51e435b'
    ),
    setReserveInterestRateStrategyAddress: new Func<[asset: string, rateStrategyAddress: string], {asset: string, rateStrategyAddress: string}, []>(
        abi, '0x1d2118f9'
    ),
    setUserEMode: new Func<[categoryId: number], {categoryId: number}, []>(
        abi, '0x28530a47'
    ),
    setUserUseReserveAsCollateral: new Func<[asset: string, useAsCollateral: boolean], {asset: string, useAsCollateral: boolean}, []>(
        abi, '0x5a3b74b9'
    ),
    supply: new Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number], {asset: string, amount: bigint, onBehalfOf: string, referralCode: number}, []>(
        abi, '0x617ba037'
    ),
    supplyWithPermit: new Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number, deadline: bigint, permitV: number, permitR: string, permitS: string], {asset: string, amount: bigint, onBehalfOf: string, referralCode: number, deadline: bigint, permitV: number, permitR: string, permitS: string}, []>(
        abi, '0x02c205f0'
    ),
    swapBorrowRateMode: new Func<[asset: string, interestRateMode: bigint], {asset: string, interestRateMode: bigint}, []>(
        abi, '0x94ba89a2'
    ),
    updateBridgeProtocolFee: new Func<[bridgeProtocolFee: bigint], {bridgeProtocolFee: bigint}, []>(
        abi, '0x3036b439'
    ),
    updateFlashloanPremiums: new Func<[flashLoanPremiumTotal: bigint, flashLoanPremiumToProtocol: bigint], {flashLoanPremiumTotal: bigint, flashLoanPremiumToProtocol: bigint}, []>(
        abi, '0xbcb6e522'
    ),
    withdraw: new Func<[asset: string, amount: bigint, to: string], {asset: string, amount: bigint, to: string}, bigint>(
        abi, '0x69328dec'
    ),
}

export class Contract extends ContractBase {

    ADDRESSES_PROVIDER(): Promise<string> {
        return this.eth_call(functions.ADDRESSES_PROVIDER, [])
    }

    BRIDGE_PROTOCOL_FEE(): Promise<bigint> {
        return this.eth_call(functions.BRIDGE_PROTOCOL_FEE, [])
    }

    FLASHLOAN_PREMIUM_TOTAL(): Promise<bigint> {
        return this.eth_call(functions.FLASHLOAN_PREMIUM_TOTAL, [])
    }

    FLASHLOAN_PREMIUM_TO_PROTOCOL(): Promise<bigint> {
        return this.eth_call(functions.FLASHLOAN_PREMIUM_TO_PROTOCOL, [])
    }

    MAX_NUMBER_RESERVES(): Promise<number> {
        return this.eth_call(functions.MAX_NUMBER_RESERVES, [])
    }

    MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): Promise<bigint> {
        return this.eth_call(functions.MAX_STABLE_RATE_BORROW_SIZE_PERCENT, [])
    }

    getConfiguration(asset: string): Promise<([data: bigint] & {data: bigint})> {
        return this.eth_call(functions.getConfiguration, [asset])
    }

    getEModeCategoryData(id: number): Promise<([ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string})> {
        return this.eth_call(functions.getEModeCategoryData, [id])
    }

    getReserveAddressById(id: number): Promise<string> {
        return this.eth_call(functions.getReserveAddressById, [id])
    }

    getReserveData(asset: string): Promise<([configuration: ([data: bigint] & {data: bigint}), liquidityIndex: bigint, currentLiquidityRate: bigint, variableBorrowIndex: bigint, currentVariableBorrowRate: bigint, currentStableBorrowRate: bigint, lastUpdateTimestamp: number, id: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, accruedToTreasury: bigint, unbacked: bigint, isolationModeTotalDebt: bigint] & {configuration: ([data: bigint] & {data: bigint}), liquidityIndex: bigint, currentLiquidityRate: bigint, variableBorrowIndex: bigint, currentVariableBorrowRate: bigint, currentStableBorrowRate: bigint, lastUpdateTimestamp: number, id: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, accruedToTreasury: bigint, unbacked: bigint, isolationModeTotalDebt: bigint})> {
        return this.eth_call(functions.getReserveData, [asset])
    }

    getReserveNormalizedIncome(asset: string): Promise<bigint> {
        return this.eth_call(functions.getReserveNormalizedIncome, [asset])
    }

    getReserveNormalizedVariableDebt(asset: string): Promise<bigint> {
        return this.eth_call(functions.getReserveNormalizedVariableDebt, [asset])
    }

    getReservesList(): Promise<Array<string>> {
        return this.eth_call(functions.getReservesList, [])
    }

    getUserAccountData(user: string): Promise<([totalCollateralBase: bigint, totalDebtBase: bigint, availableBorrowsBase: bigint, currentLiquidationThreshold: bigint, ltv: bigint, healthFactor: bigint] & {totalCollateralBase: bigint, totalDebtBase: bigint, availableBorrowsBase: bigint, currentLiquidationThreshold: bigint, ltv: bigint, healthFactor: bigint})> {
        return this.eth_call(functions.getUserAccountData, [user])
    }

    getUserConfiguration(user: string): Promise<([data: bigint] & {data: bigint})> {
        return this.eth_call(functions.getUserConfiguration, [user])
    }

    getUserEMode(user: string): Promise<bigint> {
        return this.eth_call(functions.getUserEMode, [user])
    }
}
