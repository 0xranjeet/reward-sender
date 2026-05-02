import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import type { Chain } from "viem";
import { arbitrum, base, mainnet, polygon, sepolia } from "wagmi/chains";

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "missing-project-id";

export const storyMainnet = {
  id: 1514,
  name: "Story Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "IP",
    symbol: "IP"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.storyrpc.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Storyscan",
      url: "https://www.storyscan.io"
    }
  }
} satisfies Chain;

export const supportedChains = [storyMainnet, mainnet, sepolia, polygon, arbitrum, base] as const;

export const rainbowKitConfig = getDefaultConfig({
  appName: "IP Reward Distributor",
  projectId: walletConnectProjectId,
  chains: supportedChains,
  ssr: true
});
