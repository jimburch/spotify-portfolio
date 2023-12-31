import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      green: "#1DB954",
      black: "#121212",
      gray: {
        light: "#B3B3B3",
        soft: "#838383",
        base: "#535353",
        medium: "#3a3a3a",
        dark: "#212121",
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
