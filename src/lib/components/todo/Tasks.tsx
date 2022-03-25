import {
  Text,
  WrapItem,
  Wrap,
  useColorMode,
  Checkbox,
  Flex,
  CheckboxGroup,
  Image,
} from "@chakra-ui/react";

import tasks from "./data/tasks";

const Tasks = () => {
  const { colorMode } = useColorMode();
  const dailyTasks = tasks.dailies;
  const dailyItems = dailyTasks.map((daily) => {
    return (
      <WrapItem aria-label="Task">
        <Flex
          p={2}
          w="max-content"
          bgColor={colorMode === "light" ? "gray.200" : "gray.800"}
          borderRadius={8}
        >
          <Image src={daily.icon} h="16px" pr="4px" />
          <Text
            mr={2}
            fontSize="xs"
            fontWeight="semibold"
            color={colorMode === "light" ? "gray.800" : "white"}
          >
            {daily.title}
          </Text>
          <CheckboxGroup colorScheme="yellow">
            {[...Array(daily.amount)].map(() => (
              <Checkbox
                pr="2px"
                borderColor={colorMode === "light" ? "gray.800" : "gray.100"}
              />
            ))}
          </CheckboxGroup>
        </Flex>
      </WrapItem>
    );
  });

  return (
    // Daily tasks
    <Wrap py={4} w="500px">
      {dailyItems}
    </Wrap>
  );
};

export default Tasks;
