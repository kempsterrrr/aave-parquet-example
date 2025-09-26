# Aave Squid Parquet Indexer

A TypeScript indexer that tracks Aave Pool events and writes them to local Parquet files using Subsquid. Uses official Aave v3 ABIs from `@aave/core-v3`.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment:
   ```bash
   # Edit .env with your RPC endpoint, chain, and pool address
   ```

   Example for Ethereum mainnet:
   ```
   RPC_HTTP=https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY
   CHAIN=ethereum-mainnet
   POOL_ADDRESS=0x87870Bcd30e50c13c28C3b82a0f3b7dA3e9fEaA8
   ```

3. The project automatically uses the official Aave IPool ABI from `@aave/core-v3` package. Types are pre-generated.

4. Build the project:
   ```bash
   npm run build
   ```

## Running the Indexer

```bash
npm start
```

The indexer will create a `./data/` directory with Parquet files containing indexed Aave events.

## Events Tracked

- **Supply**: User deposits assets into Aave
- **Withdraw**: User withdraws assets from Aave
- **Borrow**: User borrows assets against collateral
- **Repay**: User repays borrowed assets
- **LiquidationCall**: Liquidation of undercollateralized positions

## Output

Parquet files are saved in `./data/aave_pool_events.parquet` with columns:
- `kind`: Event type (Supply, Withdraw, Borrow, Repay, LiquidationCall)
- `txHash`: Transaction hash
- `block`: Block number
- `user`: User/liquidator address
- `reserve`: Asset address
- `amount`: Amount transferred
- `rateMode`: Interest rate mode (for Borrow events, nullable)
- `debtAsset`: Debt asset (for LiquidationCall events, nullable)
- `collateralAsset`: Collateral asset (for LiquidationCall events, nullable)
- `debtToCover`: Debt amount covered (for LiquidationCall events, nullable)

## Supported Chains

Configure `CHAIN` environment variable with:
- `ethereum-mainnet`
- `polygon-mainnet`
- `optimism-mainnet`
- `arbitrum-one`
- `base-mainnet`

Ensure you use the correct Pool address for your chosen chain from [Aave Address Book](https://docs.aave.com/developers/deployed-contracts/v3-mainnet).