import { createLocalStorageManager } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPageContext } from "next/types";

import customTheme from "lib/styles/customTheme";

interface Props {
  children: React.ReactNode;
}

export function Chakra({ children }: Props) {
  const manager = createLocalStorageManager("color-mode");

  return (
    <ChakraProvider colorModeManager={manager} theme={customTheme}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: NextPageContext) {
  return {
    props: {
      cookies: req?.headers.cookie ?? "",
    },
  };
}
