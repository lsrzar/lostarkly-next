import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<RiMoonFill />, <RiSunLine />);

  return (
    <IconButton
      aria-label="theme toggle"
      _focus={{
        outline: "none",
      }}
      icon={toggleIcon}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
