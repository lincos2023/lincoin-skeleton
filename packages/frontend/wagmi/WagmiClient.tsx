import { createClient } from "wagmi";
import { connectors, provider, webSocketProvider } from "./WagmiConnectors";

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
});