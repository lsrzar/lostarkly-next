import { Box, Flex } from "@chakra-ui/react";

import Tasks from "../todo/Tasks";

const TaskList = () => {
  return (
    <Box textAlign={{ base: "center", md: "left" }} marginTop={8}>
      <Flex>
        <Tasks />
      </Flex>
    </Box>
  );
};

export default TaskList;
