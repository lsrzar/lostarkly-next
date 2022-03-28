import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import type { NextPageContext } from "next/types";

import customTheme from "lib/styles/customTheme";

interface Props {
  cookies: string;
  children: React.ReactNode;
}

export function Chakra({ cookies, children }: Props) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={customTheme}>
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
