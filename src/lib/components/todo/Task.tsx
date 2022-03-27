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

import type ITask from "./data/ITask";

const Task = ({ title, icon }: ITask) => {
  const { colorMode } = useColorMode();
  const checkboxId = `${title
    .toLocaleLowerCase()
    .split(" ")
    .join("-")}-checkbox`;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const ischecked = localStorage.getItem(checkboxId) === "true";
    setChecked(ischecked);
  }, [checkboxId]);
  const { getCheckboxProps } = useCheckbox();
  return (
    <WrapItem aria-label="Task">
      <Flex
        p={2}
        w="max-content"
        bgColor={colorMode === "light" ? "gray.200" : "gray.800"}
        borderRadius={8}
        opacity={checked ? "40%" : "100%"}
        cursor="pointer"
        onClick={() => {
          setChecked(!checked);
          if (typeof window !== "undefined") {
            localStorage.setItem(checkboxId, `${!checked}`);
          }
        }}
        {...getCheckboxProps()}
      >
        <Image src={icon} h="16px" pr="4px" />
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
            onChange={() => {
              if (typeof window !== "undefined") {
                localStorage.setItem(checkboxId, `${checked}`);
              }
              setChecked(checked);
            }}
            borderColor={colorMode === "light" ? "gray.800" : "gray.100"}
          />
        </CheckboxGroup>
      </Flex>
    </WrapItem>
  );
};

export default Task;
