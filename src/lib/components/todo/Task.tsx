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
import { useState } from "react";

interface ITask {
  title: string;
  amount: number;
  icon?: string;
}

const Task = ({ title, amount, icon }: ITask) => {
  const { colorMode } = useColorMode();
  const [checked, setChecked] = useState(false);
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
        onClick={() => setChecked(!checked)}
        {...getCheckboxProps()}
      >
        <Image src={icon} h="16px" pr="4px" />
        <Text
          mr={2}
          fontSize="xs"
          fontWeight="semibold"
          textDecoration={checked ? "line-through" : "none"}
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          {title}
        </Text>
        <CheckboxGroup colorScheme="yellow">
          {[...Array(amount)].map((i) => (
            <Checkbox
              key={i}
              pr="2px"
              isChecked={checked}
              onChange={() => setChecked(!checked)}
              borderColor={colorMode === "light" ? "gray.800" : "gray.100"}
            />
          ))}
        </CheckboxGroup>
      </Flex>
    </WrapItem>
  );
};

export default Task;
