import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Metadata from "../components/Metadata";
import { useEffect } from "react";
import { ClientContextProvider } from "../contexts/ClientContext";

import { globalStyle } from "../styles";
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("vconsole").then(VConsoleModule => {
  //       const VConsole = VConsoleModule.default;
  //       new VConsole();
  //     });
  //   }
  // }, []);
  return (
    <>
      <Metadata />
      <GlobalStyle />
      <ClientContextProvider>
        <Component {...pageProps} />
      </ClientContextProvider>
    </>
  );
}

export default MyApp;
