import { Box, Flex } from "@chakra-ui/react";

import Tasks from "../todo/Tasks";

const TaskList: React.FC = () => {
  return (
    <Box textAlign={{ base: "center", md: "left" }} marginTop={8}>
      <Flex>
        <Tasks />
      </Flex>
    </Box>
  );
};

export default TaskList;
