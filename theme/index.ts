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
  styles: {
    global: {
      body: {
        bg: "brand.black",
        color: "white",
      },
    },
  },
});
