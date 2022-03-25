import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
  });

  return (
    <Grid gap={2}>
      <Heading as="h2" fontSize={{ base: "lg", sm: "3xl" }}>
        Tasks
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box fontSize={textSize}>
          Clear your daily & weekly tasks. The timer will let you know when they
          reset.
        </Box>
      </Box>
    </Grid>
  );
};

export default SomeText;
