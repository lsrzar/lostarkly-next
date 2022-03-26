import { Box } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "lib/components/motion/Box";

const SomeImage = () => {
  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image src="/arcana.svg" width={400} height={400} alt="Arcana" />
      </MotionBox>
    </Box>
  );
};

export default SomeImage;
