export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "BackUnbacked",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "backer",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Borrow",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "address",
                "name": "onBehalfOf",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "interestRateMode",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "borrowRate",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "referralCode",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FlashLoan",
        "inputs": [
            {
                "type": "address",
                "name": "target",
                "indexed": true
            },
            {
                "type": "address",
                "name": "initiator",
                "indexed": false
            },
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "interestRateMode",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "premium",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "referralCode",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IsolationModeTotalDebtUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "totalDebt",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidationCall",
        "inputs": [
            {
                "type": "address",
                "name": "collateralAsset",
                "indexed": true
            },
            {
                "type": "address",
                "name": "debtAsset",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "debtToCover",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "liquidatedCollateralAmount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "liquidator",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "receiveAToken",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MintUnbacked",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "address",
                "name": "onBehalfOf",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "referralCode",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MintedToTreasury",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amountMinted",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RebalanceStableBorrowRate",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Repay",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "address",
                "name": "repayer",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "useATokens",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReserveDataUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "liquidityRate",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "stableBorrowRate",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "variableBorrowRate",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "liquidityIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "variableBorrowIndex",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReserveUsedAsCollateralDisabled",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReserveUsedAsCollateralEnabled",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Supply",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "address",
                "name": "onBehalfOf",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "referralCode",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SwapBorrowRateMode",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "interestRateMode",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UserEModeSet",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "categoryId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Withdraw",
        "inputs": [
            {
                "type": "address",
                "name": "reserve",
                "indexed": true
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "ADDRESSES_PROVIDER",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "BRIDGE_PROTOCOL_FEE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "FLASHLOAN_PREMIUM_TOTAL",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint128",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "FLASHLOAN_PREMIUM_TO_PROTOCOL",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint128",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_NUMBER_RESERVES",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "backUnbacked",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "fee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "borrow",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "interestRateMode"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "configureEModeCategory",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "id"
            },
            {
                "type": "tuple",
                "name": "config",
                "components": [
                    {
                        "type": "uint16",
                        "name": "ltv"
                    },
                    {
                        "type": "uint16",
                        "name": "liquidationThreshold"
                    },
                    {
                        "type": "uint16",
                        "name": "liquidationBonus"
                    },
                    {
                        "type": "address",
                        "name": "priceSource"
                    },
                    {
                        "type": "string",
                        "name": "label"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "dropReserve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeTransfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "balanceFromBefore"
            },
            {
                "type": "uint256",
                "name": "balanceToBefore"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "flashLoan",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "receiverAddress"
            },
            {
                "type": "address[]",
                "name": "assets"
            },
            {
                "type": "uint256[]",
                "name": "amounts"
            },
            {
                "type": "uint256[]",
                "name": "interestRateModes"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            },
            {
                "type": "bytes",
                "name": "params"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "flashLoanSimple",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "receiverAddress"
            },
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "bytes",
                "name": "params"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getConfiguration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "data"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getEModeCategoryData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint16",
                        "name": "ltv"
                    },
                    {
                        "type": "uint16",
                        "name": "liquidationThreshold"
                    },
                    {
                        "type": "uint16",
                        "name": "liquidationBonus"
                    },
                    {
                        "type": "address",
                        "name": "priceSource"
                    },
                    {
                        "type": "string",
                        "name": "label"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getReserveAddressById",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": "id"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getReserveData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "configuration",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "data"
                            }
                        ]
                    },
                    {
                        "type": "uint128",
                        "name": "liquidityIndex"
                    },
                    {
                        "type": "uint128",
                        "name": "currentLiquidityRate"
                    },
                    {
                        "type": "uint128",
                        "name": "variableBorrowIndex"
                    },
                    {
                        "type": "uint128",
                        "name": "currentVariableBorrowRate"
                    },
                    {
                        "type": "uint128",
                        "name": "currentStableBorrowRate"
                    },
                    {
                        "type": "uint40",
                        "name": "lastUpdateTimestamp"
                    },
                    {
                        "type": "uint16",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "aTokenAddress"
                    },
                    {
                        "type": "address",
                        "name": "stableDebtTokenAddress"
                    },
                    {
                        "type": "address",
                        "name": "variableDebtTokenAddress"
                    },
                    {
                        "type": "address",
                        "name": "interestRateStrategyAddress"
                    },
                    {
                        "type": "uint128",
                        "name": "accruedToTreasury"
                    },
                    {
                        "type": "uint128",
                        "name": "unbacked"
                    },
                    {
                        "type": "uint128",
                        "name": "isolationModeTotalDebt"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getReserveNormalizedIncome",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getReserveNormalizedVariableDebt",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getReservesList",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserAccountData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "totalCollateralBase"
            },
            {
                "type": "uint256",
                "name": "totalDebtBase"
            },
            {
                "type": "uint256",
                "name": "availableBorrowsBase"
            },
            {
                "type": "uint256",
                "name": "currentLiquidationThreshold"
            },
            {
                "type": "uint256",
                "name": "ltv"
            },
            {
                "type": "uint256",
                "name": "healthFactor"
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserConfiguration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "data"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserEMode",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "initReserve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "address",
                "name": "aTokenAddress"
            },
            {
                "type": "address",
                "name": "stableDebtAddress"
            },
            {
                "type": "address",
                "name": "variableDebtAddress"
            },
            {
                "type": "address",
                "name": "interestRateStrategyAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "liquidationCall",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralAsset"
            },
            {
                "type": "address",
                "name": "debtAsset"
            },
            {
                "type": "address",
                "name": "user"
            },
            {
                "type": "uint256",
                "name": "debtToCover"
            },
            {
                "type": "bool",
                "name": "receiveAToken"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintToTreasury",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "assets"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintUnbacked",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rebalanceStableBorrowRate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "address",
                "name": "user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "repay",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "interestRateMode"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "repayWithATokens",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "interestRateMode"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "repayWithPermit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "interestRateMode"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            },
            {
                "type": "uint256",
                "name": "deadline"
            },
            {
                "type": "uint8",
                "name": "permitV"
            },
            {
                "type": "bytes32",
                "name": "permitR"
            },
            {
                "type": "bytes32",
                "name": "permitS"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "rescueTokens",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "resetIsolationModeTotalDebt",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setConfiguration",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "tuple",
                "name": "configuration",
                "components": [
                    {
                        "type": "uint256",
                        "name": "data"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setReserveInterestRateStrategyAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "address",
                "name": "rateStrategyAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUserEMode",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "categoryId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUserUseReserveAsCollateral",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "bool",
                "name": "useAsCollateral"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supply",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supplyWithPermit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "onBehalfOf"
            },
            {
                "type": "uint16",
                "name": "referralCode"
            },
            {
                "type": "uint256",
                "name": "deadline"
            },
            {
                "type": "uint8",
                "name": "permitV"
            },
            {
                "type": "bytes32",
                "name": "permitR"
            },
            {
                "type": "bytes32",
                "name": "permitS"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "swapBorrowRateMode",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "interestRateMode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateBridgeProtocolFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "bridgeProtocolFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateFlashloanPremiums",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint128",
                "name": "flashLoanPremiumTotal"
            },
            {
                "type": "uint128",
                "name": "flashLoanPremiumToProtocol"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    }
]
