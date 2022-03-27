import { Wrap } from "@chakra-ui/react";

import tasks from "./data/tasks";
import Task from "./Task";

const Weekly = () => {
  const weeklyTasks = tasks.weeklies;
  const weeklyItems = weeklyTasks.map((weekly) => {
    return <Task {...weekly} key={weekly.title} />;
  });

  return (
    // Daily tasks
    <Wrap key="weekly" w={{ base: "450px", lg: "600px", small: "550px" }}>
      {weeklyItems}
    </Wrap>
  );
};

export default Weekly;
