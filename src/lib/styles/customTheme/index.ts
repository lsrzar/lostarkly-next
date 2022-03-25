import { extendTheme } from "@chakra-ui/react";
import type { GlobalStyleProps, Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("#FFFFFF", "gray.900")(props),
    },
  }),
};

const customTheme = extendTheme({
  fonts,
  colors,
  styles,
  components: {
    Button,
  },
});

export default customTheme;
