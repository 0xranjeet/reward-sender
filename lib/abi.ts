import { parseAbi } from "viem";

export const ipRewardDistributorAbi = parseAbi([
  "function owner() view returns (address)",
  "function ipToken() view returns (address)",
  "function deposit(uint256 amount)",
  "function sendReward(address user, uint256 amount)",
  "function contractBalance() view returns (uint256)"
]);

export const erc20Abi = parseAbi([
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)"
]);
