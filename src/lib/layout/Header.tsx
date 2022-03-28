import { Box, Flex, Link, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex as="header" width="full" align="center">
      <Flex as="image" px={4} pt={2}>
        <Link isExternal rel="noopener noreferrer" href="/">
          <Image
            aria-label="Lostarkly Logo"
            tabIndex={0}
            src={
              colorMode === "light"
                ? "/lostarkly-light.svg"
                : "/lostarkly-dark.svg"
            }
            layout="intrinsic"
            width={300}
            height={65}
            alt="Lostarkly Logo"
          />
        </Link>
      </Flex>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
