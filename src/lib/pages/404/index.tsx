import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import MotionBox from "lib/components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <Head>
        <title>Page not found | LostArkly</title>
      </Head>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["60%", "40%", "30%", "30%"]}
        margin="0 auto"
      >
        <Image src="/beatrice.png" alt="Error 404 not found Illustration" />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Text>You seem lost...</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              Take Me Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
