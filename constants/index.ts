export const GAP = 2;

export const scrollbar = {
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

export const hiddenScrollbar = {
  scrollbarWidth: "none" /* For Firefox */,
  msOverflowStyle: "none" /* For Internet Explorer and Edge */,
  "&::-webkit-scrollbar": {
    /* For WebKit (Safari, Chrome, etc) */ display: "none",
  },
};
