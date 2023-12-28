import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      green: "#1DB954",
      black: "#121212",
      gray: {
        base: "#535353",
        dark: "#212121",
        light: "#B3B3B3",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
      },
      variants: {
        solid: {
          color: "white",
          bg: "brand.green",
          _hover: {
            bg: "#29E05F",
          },
          _active: {
            bg: "#29E05F",
          },
        },
        secondary: {
          color: "white",
          bg: "brand.gray.base",
        },
      },
      defaultProps: {},
    },
  },
  styles: {
    global: {
      body: {
        bg: { base: "brand.gray.dark", lg: "brand.black" },
        color: "white",
      },
    },
  },
});
