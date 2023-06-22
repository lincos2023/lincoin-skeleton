import type { AppProps } from "next/app";
//import "styles/globals.css";
import theme2 from '../theme/theme';

import 'styles/Fonts.css'
import 'styles/App.css'
import 'styles/Contact.css'

import 'react-calendar/dist/Calendar.css'
import 'styles/MiniCalendar.css'

import "@asseinfo/react-kanban/dist/styles.css";
import Layout from '../layouts'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//import "@rainbow-me/rainbowkit/styles.css";
//import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
//import { WagmiConfig } from "wagmi";
//import { chains } from "../wagmi/WagmiConnectors";
//import { wagmiClient } from "../wagmi/WagmiClient";



const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

function App({ Component, pageProps }: AppProps) {
  
  /*return (
    <ChakraProvider theme={theme2}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>
  );*/
  
 return (
  <ChakraProvider theme={theme2}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</ChakraProvider>
 )
   

}

export default App;