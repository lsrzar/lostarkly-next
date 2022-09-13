import {
  WrapItem,
  Flex,
  CheckboxGroup,
  Checkbox,
  Image,
  Text,
  useCheckbox,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import type { ITask } from "./data/tasks";

const TaskBox: React.FC<ITask> = ({ title, icon }: ITask) => {
  const { colorMode } = useColorMode();
  const checkboxId = `${title
    .toLocaleLowerCase()
    .split(" ")
    .join("-")}-checkbox`;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const isChecked = localStorage.getItem(checkboxId) === "true";
    setChecked(isChecked);
  }, [checkboxId, setChecked]);
  const { getCheckboxProps } = useCheckbox();
  const toggleChecked = () => setChecked((val) => !val);
  const onClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(checkboxId, `${!checked}`);
    }
    toggleChecked();
  };
  return (
    <WrapItem aria-label="Task">
      <Flex
        p={2}
        w="max-content"
        bgColor={colorMode === "light" ? "gray.200" : "gray.800"}
        borderRadius={8}
        opacity={checked ? "45%" : "100%"}
        cursor="pointer"
        userSelect="none"
        onClick={onClick}
        {...getCheckboxProps()}
      >
        <Image src={icon} width="16px" height="16px" pr="4px" />
        <Text
          tabIndex={0}
          mr={2}
          fontSize="xs"
          fontWeight="semibold"
          textDecoration={checked ? "line-through" : "none"}
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          {title}
        </Text>
        <CheckboxGroup colorScheme="yellow">
          <Checkbox
            isChecked={checked}
            id={checkboxId}
            pr="2px"
            onChange={onClick}
            borderColor={colorMode === "light" ? "gray.800" : "gray.100"}
          />
        </CheckboxGroup>
      </Flex>
    </WrapItem>
  );
};

export default TaskBox;
