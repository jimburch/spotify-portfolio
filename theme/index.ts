import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      green: "#1DB954",
      white: "#FFFFFF",
      black: "#191414",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.black",
        color: "gray.100",
      },
    },
  },
});
