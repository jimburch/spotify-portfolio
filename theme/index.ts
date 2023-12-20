import { extendTheme } from "@chakra-ui/react";

const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "brand.gray.dark",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "brand.gray.base",
    borderRadius: "20px",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "brand.gray.base brand.gray.dark",
};

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
    Flex: {
      baseStyle: {
        ...scrollbarStyles,
      },
    },
    Box: {
      baseStyle: {
        ...scrollbarStyles,
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
