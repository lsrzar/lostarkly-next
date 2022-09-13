import { Flex } from "@chakra-ui/react";

import tasks from "./data/tasks";
import TaskListWrapper from "./TaskListWrapper";

const taskData = [
  {
    type: "Dailies",
    list: tasks?.dailies,
  },
  {
    type: "Weeklies",
    list: tasks?.weeklies,
  },
];

const Tasks: React.FC = () => {
  return (
    <Flex direction="column" w={{ base: "450px", lg: "600px", small: "550px" }}>
      {taskData?.map(({ type, list }) => (
        <TaskListWrapper taskList={list} type={type} key={type} />
      ))}
    </Flex>
  );
};

export default Tasks;
