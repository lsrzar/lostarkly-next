import { Wrap } from "@chakra-ui/react";

import tasks from "./data/tasks";
import Task from "./Task";

const Daily = () => {
  const dailyTasks = tasks.dailies;
  const dailyItems = dailyTasks.map((daily) => (
    <Task {...daily} key={daily.title} />
  ));

  return (
    // Daily tasks
    <Wrap key="daily" w={{ base: "450px", lg: "600px", small: "550px" }}>
      {dailyItems}
    </Wrap>
  );
};

export default Daily;
