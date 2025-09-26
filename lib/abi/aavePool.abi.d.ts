export declare const ABI_JSON: ({
    type: string;
    anonymous: boolean;
    name: string;
    inputs: {
        type: string;
        name: string;
        indexed: boolean;
    }[];
    constant?: undefined;
    payable?: undefined;
    outputs?: undefined;
    stateMutability?: undefined;
} | {
    type: string;
    name: string;
    constant: boolean;
    payable: boolean;
    inputs: {
        type: string;
        name: string;
    }[];
    outputs: {
        type: string;
        name: string;
    }[];
    anonymous?: undefined;
    stateMutability?: undefined;
} | {
    type: string;
    name: string;
    constant: boolean;
    payable: boolean;
    inputs: ({
        type: string;
        name: string;
        components?: undefined;
    } | {
        type: string;
        name: string;
        components: {
            type: string;
            name: string;
        }[];
    })[];
    outputs: never[];
    anonymous?: undefined;
    stateMutability?: undefined;
} | {
    type: string;
    name: string;
    constant: boolean;
    stateMutability: string;
    payable: boolean;
    inputs: {
        type: string;
        name: string;
    }[];
    outputs: {
        type: string;
        name: string;
    }[];
    anonymous?: undefined;
} | {
    type: string;
    name: string;
    constant: boolean;
    stateMutability: string;
    payable: boolean;
    inputs: {
        type: string;
        name: string;
    }[];
    outputs: {
        type: string;
        name: string;
        components: ({
            type: string;
            name: string;
            components: {
                type: string;
                name: string;
            }[];
        } | {
            type: string;
            name: string;
            components?: undefined;
        })[];
    }[];
    anonymous?: undefined;
})[];
//# sourceMappingURL=aavePool.abi.d.ts.map