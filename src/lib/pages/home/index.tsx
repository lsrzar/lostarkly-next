import { Box } from "@chakra-ui/react";
import Head from "next/head";

import HeroImage from "lib/components/samples/HeroImage";
import TaskList from "lib/components/samples/TaskList";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Head>
        <title>LostArkly</title>
        <meta
          name="description"
          content="Keep track of your daily and weekly tasks."
        />
      </Head>

      <Box w={{ md: "600px", sm: "450px", lg: "700px" }}>
        <TaskList />
      </Box>
      <HeroImage />
    </Box>
  );
};

export default Home;
