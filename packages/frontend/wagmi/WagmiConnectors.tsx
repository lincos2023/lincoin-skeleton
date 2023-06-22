import { getDefaultWallets, connectorsForWallets, } from "@rainbow-me/rainbowkit";
import {  argentWallet,
          trustWallet,
          ledgerWallet } from '@rainbow-me/rainbowkit/wallets';

import { chain, configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

/**
 * chains for the app
 */
export const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  [
    alchemyProvider({ apiKey: '9Wv8d_jwwKGAM2gBmWkf_nqTQPWqN5Ik' }),
    publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

/**
 * wagmi connectors for the wagmi context
 */
export const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);