# IP Reward Distributor UI

Simple Next.js dashboard for the `IPRewardDistributor` Solidity contract.

## Features

- Connect wallet with RainbowKit
- Load `owner`, `ipToken`, and `contractBalance`
- Deposit tokens with `approve + deposit`
- Send rewards using `sendReward`

## Setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

Set this in `.env.local`:

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`

Then open `http://localhost:3000`.
