import { Flex, Heading } from "@chakra-ui/react";

import type { ITask } from "./data/tasks";
import TaskCheckboxList from "./TaskCheckboxList";

interface IProps {
  taskList: ITask[];
  type: string;
}

const TaskListWrapper: React.FC<IProps> = ({ taskList, type }: IProps) => {
  return (
    <Flex direction="column" py={4}>
      <Heading
        as="h3"
        fontSize={{ base: "lg", sm: "3x1" }}
        pb={4}
        textAlign="left"
      >
        {type}
      </Heading>
      <TaskCheckboxList tasks={taskList} type={type} />
    </Flex>
  );
};

export default TaskListWrapper;
