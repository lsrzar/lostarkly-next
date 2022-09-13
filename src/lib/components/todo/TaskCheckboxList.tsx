import { Wrap } from "@chakra-ui/react";

import type { ITask } from "./data/tasks";
import TaskBox from "./TaskBox";

interface IProps {
  tasks: ITask[];
  type: string;
}

const TaskCheckboxList: React.FC<IProps> = ({ tasks, type }: IProps) => (
  <Wrap key={type} w={{ base: "450px", lg: "600px", small: "550px" }}>
    {tasks.map(({ icon, title }) => {
      return <TaskBox icon={icon} title={title} key={`${type}${title}`} />;
    })}
  </Wrap>
);

export default TaskCheckboxList;
