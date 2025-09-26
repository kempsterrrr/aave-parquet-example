import * as ethers from 'ethers';
import { LogEvent, Func, ContractBase } from './abi.support';
export declare const abi: ethers.ethers.Interface;
export declare const events: {
    BackUnbacked: LogEvent<[reserve: string, backer: string, amount: bigint, fee: bigint] & {
        reserve: string;
        backer: string;
        amount: bigint;
        fee: bigint;
    }>;
    Borrow: LogEvent<[reserve: string, user: string, onBehalfOf: string, amount: bigint, interestRateMode: number, borrowRate: bigint, referralCode: number] & {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        interestRateMode: number;
        borrowRate: bigint;
        referralCode: number;
    }>;
    FlashLoan: LogEvent<[target: string, initiator: string, asset: string, amount: bigint, interestRateMode: number, premium: bigint, referralCode: number] & {
        target: string;
        initiator: string;
        asset: string;
        amount: bigint;
        interestRateMode: number;
        premium: bigint;
        referralCode: number;
    }>;
    IsolationModeTotalDebtUpdated: LogEvent<[asset: string, totalDebt: bigint] & {
        asset: string;
        totalDebt: bigint;
    }>;
    LiquidationCall: LogEvent<[collateralAsset: string, debtAsset: string, user: string, debtToCover: bigint, liquidatedCollateralAmount: bigint, liquidator: string, receiveAToken: boolean] & {
        collateralAsset: string;
        debtAsset: string;
        user: string;
        debtToCover: bigint;
        liquidatedCollateralAmount: bigint;
        liquidator: string;
        receiveAToken: boolean;
    }>;
    MintUnbacked: LogEvent<[reserve: string, user: string, onBehalfOf: string, amount: bigint, referralCode: number] & {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        referralCode: number;
    }>;
    MintedToTreasury: LogEvent<[reserve: string, amountMinted: bigint] & {
        reserve: string;
        amountMinted: bigint;
    }>;
    RebalanceStableBorrowRate: LogEvent<[reserve: string, user: string] & {
        reserve: string;
        user: string;
    }>;
    Repay: LogEvent<[reserve: string, user: string, repayer: string, amount: bigint, useATokens: boolean] & {
        reserve: string;
        user: string;
        repayer: string;
        amount: bigint;
        useATokens: boolean;
    }>;
    ReserveDataUpdated: LogEvent<[reserve: string, liquidityRate: bigint, stableBorrowRate: bigint, variableBorrowRate: bigint, liquidityIndex: bigint, variableBorrowIndex: bigint] & {
        reserve: string;
        liquidityRate: bigint;
        stableBorrowRate: bigint;
        variableBorrowRate: bigint;
        liquidityIndex: bigint;
        variableBorrowIndex: bigint;
    }>;
    ReserveUsedAsCollateralDisabled: LogEvent<[reserve: string, user: string] & {
        reserve: string;
        user: string;
    }>;
    ReserveUsedAsCollateralEnabled: LogEvent<[reserve: string, user: string] & {
        reserve: string;
        user: string;
    }>;
    Supply: LogEvent<[reserve: string, user: string, onBehalfOf: string, amount: bigint, referralCode: number] & {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        referralCode: number;
    }>;
    SwapBorrowRateMode: LogEvent<[reserve: string, user: string, interestRateMode: number] & {
        reserve: string;
        user: string;
        interestRateMode: number;
    }>;
    UserEModeSet: LogEvent<[user: string, categoryId: number] & {
        user: string;
        categoryId: number;
    }>;
    Withdraw: LogEvent<[reserve: string, user: string, to: string, amount: bigint] & {
        reserve: string;
        user: string;
        to: string;
        amount: bigint;
    }>;
};
export declare const functions: {
    ADDRESSES_PROVIDER: Func<[], {}, string>;
    BRIDGE_PROTOCOL_FEE: Func<[], {}, bigint>;
    FLASHLOAN_PREMIUM_TOTAL: Func<[], {}, bigint>;
    FLASHLOAN_PREMIUM_TO_PROTOCOL: Func<[], {}, bigint>;
    MAX_NUMBER_RESERVES: Func<[], {}, number>;
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT: Func<[], {}, bigint>;
    backUnbacked: Func<[asset: string, amount: bigint, fee: bigint], {
        asset: string;
        amount: bigint;
        fee: bigint;
    }, bigint>;
    borrow: Func<[asset: string, amount: bigint, interestRateMode: bigint, referralCode: number, onBehalfOf: string], {
        asset: string;
        amount: bigint;
        interestRateMode: bigint;
        referralCode: number;
        onBehalfOf: string;
    }, []>;
    configureEModeCategory: Func<[id: number, config: [ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {
        ltv: number;
        liquidationThreshold: number;
        liquidationBonus: number;
        priceSource: string;
        label: string;
    }], {
        id: number;
        config: ([ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {
            ltv: number;
            liquidationThreshold: number;
            liquidationBonus: number;
            priceSource: string;
            label: string;
        });
    }, []>;
    deposit: Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number], {
        asset: string;
        amount: bigint;
        onBehalfOf: string;
        referralCode: number;
    }, []>;
    dropReserve: Func<[asset: string], {
        asset: string;
    }, []>;
    finalizeTransfer: Func<[asset: string, from: string, to: string, amount: bigint, balanceFromBefore: bigint, balanceToBefore: bigint], {
        asset: string;
        from: string;
        to: string;
        amount: bigint;
        balanceFromBefore: bigint;
        balanceToBefore: bigint;
    }, []>;
    flashLoan: Func<[receiverAddress: string, assets: string[], amounts: bigint[], interestRateModes: bigint[], onBehalfOf: string, params: string, referralCode: number], {
        receiverAddress: string;
        assets: Array<string>;
        amounts: Array<bigint>;
        interestRateModes: Array<bigint>;
        onBehalfOf: string;
        params: string;
        referralCode: number;
    }, []>;
    flashLoanSimple: Func<[receiverAddress: string, asset: string, amount: bigint, params: string, referralCode: number], {
        receiverAddress: string;
        asset: string;
        amount: bigint;
        params: string;
        referralCode: number;
    }, []>;
    getConfiguration: Func<[asset: string], {
        asset: string;
    }, [data: bigint] & {
        data: bigint;
    }>;
    getEModeCategoryData: Func<[id: number], {
        id: number;
    }, [ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {
        ltv: number;
        liquidationThreshold: number;
        liquidationBonus: number;
        priceSource: string;
        label: string;
    }>;
    getReserveAddressById: Func<[id: number], {
        id: number;
    }, string>;
    getReserveData: Func<[asset: string], {
        asset: string;
    }, [configuration: [data: bigint] & {
        data: bigint;
    }, liquidityIndex: bigint, currentLiquidityRate: bigint, variableBorrowIndex: bigint, currentVariableBorrowRate: bigint, currentStableBorrowRate: bigint, lastUpdateTimestamp: number, id: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, accruedToTreasury: bigint, unbacked: bigint, isolationModeTotalDebt: bigint] & {
        configuration: ([data: bigint] & {
            data: bigint;
        });
        liquidityIndex: bigint;
        currentLiquidityRate: bigint;
        variableBorrowIndex: bigint;
        currentVariableBorrowRate: bigint;
        currentStableBorrowRate: bigint;
        lastUpdateTimestamp: number;
        id: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        accruedToTreasury: bigint;
        unbacked: bigint;
        isolationModeTotalDebt: bigint;
    }>;
    getReserveNormalizedIncome: Func<[asset: string], {
        asset: string;
    }, bigint>;
    getReserveNormalizedVariableDebt: Func<[asset: string], {
        asset: string;
    }, bigint>;
    getReservesList: Func<[], {}, string[]>;
    getUserAccountData: Func<[user: string], {
        user: string;
    }, [totalCollateralBase: bigint, totalDebtBase: bigint, availableBorrowsBase: bigint, currentLiquidationThreshold: bigint, ltv: bigint, healthFactor: bigint] & {
        totalCollateralBase: bigint;
        totalDebtBase: bigint;
        availableBorrowsBase: bigint;
        currentLiquidationThreshold: bigint;
        ltv: bigint;
        healthFactor: bigint;
    }>;
    getUserConfiguration: Func<[user: string], {
        user: string;
    }, [data: bigint] & {
        data: bigint;
    }>;
    getUserEMode: Func<[user: string], {
        user: string;
    }, bigint>;
    initReserve: Func<[asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string], {
        asset: string;
        aTokenAddress: string;
        stableDebtAddress: string;
        variableDebtAddress: string;
        interestRateStrategyAddress: string;
    }, []>;
    liquidationCall: Func<[collateralAsset: string, debtAsset: string, user: string, debtToCover: bigint, receiveAToken: boolean], {
        collateralAsset: string;
        debtAsset: string;
        user: string;
        debtToCover: bigint;
        receiveAToken: boolean;
    }, []>;
    mintToTreasury: Func<[assets: string[]], {
        assets: Array<string>;
    }, []>;
    mintUnbacked: Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number], {
        asset: string;
        amount: bigint;
        onBehalfOf: string;
        referralCode: number;
    }, []>;
    rebalanceStableBorrowRate: Func<[asset: string, user: string], {
        asset: string;
        user: string;
    }, []>;
    repay: Func<[asset: string, amount: bigint, interestRateMode: bigint, onBehalfOf: string], {
        asset: string;
        amount: bigint;
        interestRateMode: bigint;
        onBehalfOf: string;
    }, bigint>;
    repayWithATokens: Func<[asset: string, amount: bigint, interestRateMode: bigint], {
        asset: string;
        amount: bigint;
        interestRateMode: bigint;
    }, bigint>;
    repayWithPermit: Func<[asset: string, amount: bigint, interestRateMode: bigint, onBehalfOf: string, deadline: bigint, permitV: number, permitR: string, permitS: string], {
        asset: string;
        amount: bigint;
        interestRateMode: bigint;
        onBehalfOf: string;
        deadline: bigint;
        permitV: number;
        permitR: string;
        permitS: string;
    }, bigint>;
    rescueTokens: Func<[token: string, to: string, amount: bigint], {
        token: string;
        to: string;
        amount: bigint;
    }, []>;
    resetIsolationModeTotalDebt: Func<[asset: string], {
        asset: string;
    }, []>;
    setConfiguration: Func<[asset: string, configuration: [data: bigint] & {
        data: bigint;
    }], {
        asset: string;
        configuration: ([data: bigint] & {
            data: bigint;
        });
    }, []>;
    setReserveInterestRateStrategyAddress: Func<[asset: string, rateStrategyAddress: string], {
        asset: string;
        rateStrategyAddress: string;
    }, []>;
    setUserEMode: Func<[categoryId: number], {
        categoryId: number;
    }, []>;
    setUserUseReserveAsCollateral: Func<[asset: string, useAsCollateral: boolean], {
        asset: string;
        useAsCollateral: boolean;
    }, []>;
    supply: Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number], {
        asset: string;
        amount: bigint;
        onBehalfOf: string;
        referralCode: number;
    }, []>;
    supplyWithPermit: Func<[asset: string, amount: bigint, onBehalfOf: string, referralCode: number, deadline: bigint, permitV: number, permitR: string, permitS: string], {
        asset: string;
        amount: bigint;
        onBehalfOf: string;
        referralCode: number;
        deadline: bigint;
        permitV: number;
        permitR: string;
        permitS: string;
    }, []>;
    swapBorrowRateMode: Func<[asset: string, interestRateMode: bigint], {
        asset: string;
        interestRateMode: bigint;
    }, []>;
    updateBridgeProtocolFee: Func<[bridgeProtocolFee: bigint], {
        bridgeProtocolFee: bigint;
    }, []>;
    updateFlashloanPremiums: Func<[flashLoanPremiumTotal: bigint, flashLoanPremiumToProtocol: bigint], {
        flashLoanPremiumTotal: bigint;
        flashLoanPremiumToProtocol: bigint;
    }, []>;
    withdraw: Func<[asset: string, amount: bigint, to: string], {
        asset: string;
        amount: bigint;
        to: string;
    }, bigint>;
};
export declare class Contract extends ContractBase {
    ADDRESSES_PROVIDER(): Promise<string>;
    BRIDGE_PROTOCOL_FEE(): Promise<bigint>;
    FLASHLOAN_PREMIUM_TOTAL(): Promise<bigint>;
    FLASHLOAN_PREMIUM_TO_PROTOCOL(): Promise<bigint>;
    MAX_NUMBER_RESERVES(): Promise<number>;
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): Promise<bigint>;
    getConfiguration(asset: string): Promise<([data: bigint] & {
        data: bigint;
    })>;
    getEModeCategoryData(id: number): Promise<([ltv: number, liquidationThreshold: number, liquidationBonus: number, priceSource: string, label: string] & {
        ltv: number;
        liquidationThreshold: number;
        liquidationBonus: number;
        priceSource: string;
        label: string;
    })>;
    getReserveAddressById(id: number): Promise<string>;
    getReserveData(asset: string): Promise<([configuration: ([data: bigint] & {
        data: bigint;
    }), liquidityIndex: bigint, currentLiquidityRate: bigint, variableBorrowIndex: bigint, currentVariableBorrowRate: bigint, currentStableBorrowRate: bigint, lastUpdateTimestamp: number, id: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, accruedToTreasury: bigint, unbacked: bigint, isolationModeTotalDebt: bigint] & {
        configuration: ([data: bigint] & {
            data: bigint;
        });
        liquidityIndex: bigint;
        currentLiquidityRate: bigint;
        variableBorrowIndex: bigint;
        currentVariableBorrowRate: bigint;
        currentStableBorrowRate: bigint;
        lastUpdateTimestamp: number;
        id: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        accruedToTreasury: bigint;
        unbacked: bigint;
        isolationModeTotalDebt: bigint;
    })>;
    getReserveNormalizedIncome(asset: string): Promise<bigint>;
    getReserveNormalizedVariableDebt(asset: string): Promise<bigint>;
    getReservesList(): Promise<Array<string>>;
    getUserAccountData(user: string): Promise<([totalCollateralBase: bigint, totalDebtBase: bigint, availableBorrowsBase: bigint, currentLiquidationThreshold: bigint, ltv: bigint, healthFactor: bigint] & {
        totalCollateralBase: bigint;
        totalDebtBase: bigint;
        availableBorrowsBase: bigint;
        currentLiquidationThreshold: bigint;
        ltv: bigint;
        healthFactor: bigint;
    })>;
    getUserConfiguration(user: string): Promise<([data: bigint] & {
        data: bigint;
    })>;
    getUserEMode(user: string): Promise<bigint>;
}
//# sourceMappingURL=aavePool.d.ts.map