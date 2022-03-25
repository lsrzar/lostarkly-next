import { Flex, Heading } from "@chakra-ui/react";

import Daily from "./Daily";
import Weekly from "./Weekly";

const Tasks = () => {
  return (
    <Flex direction="column" w={{ base: "450px", lg: "600px", small: "550px" }}>
      <Flex direction="column" py={4}>
        <Heading
          as="h3"
          fontSize={{ base: "lg", sm: "3x1" }}
          pb={4}
          textAlign="left"
        >
          Dailies
        </Heading>
        <Daily />
      </Flex>
      <Flex direction="column" py={4}>
        <Heading
          as="h3"
          fontSize={{ base: "lg", sm: "3x1" }}
          pb={4}
          textAlign="left"
        >
          Weeklies
        </Heading>
        <Weekly />
      </Flex>
      <Flex direction="column" py={4}>
        <Heading
          as="h3"
          fontSize={{ base: "lg", sm: "3x1" }}
          pb={4}
          textAlign="left"
        >
          Done
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Tasks;
