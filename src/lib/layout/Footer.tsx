import { Flex, Link, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text fontSize="xs" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://github.com/lesrz"
          isExternal
          rel="noopener noreferrer"
        >
          lesrz
        </Link>
      </Text>
      <Flex ml="auto" mb={2}>
        <Link
          isExternal
          rel="noopener noreferrer"
          href="https://ko-fi.com/lsrza"
        >
          <Image
            src="https://ko-fi.com/img/githubbutton_sm.svg"
            alt="Buy me a coffee"
            w="180px"
            h="24px"
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
