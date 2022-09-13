import { Box } from "@chakra-ui/react";
import NImage from "next/image";

import MotionBox from "lib/components/motion/Box";

const HeroImage: React.FC = () => {
  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <NImage
          src="/arcana.svg"
          width="400px"
          height="400px"
          alt="Arcana"
          priority
        />
      </MotionBox>
    </Box>
  );
};

export default HeroImage;
