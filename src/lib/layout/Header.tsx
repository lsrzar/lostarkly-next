import { Box, Flex, Link, useColorMode } from "@chakra-ui/react";
import NImage from "next/image";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex width="full" align="center">
      <Flex px={4} pt={2}>
        <Link rel="noopener noreferrer" href="/">
          <NImage
            aria-label="Lostarkly Logo"
            tabIndex={0}
            src={
              colorMode === "light"
                ? "/lostarkly-light.svg"
                : "/lostarkly-dark.svg"
            }
            layout="intrinsic"
            width="300px"
            height="65px"
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
