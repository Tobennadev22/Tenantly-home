import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    PrimaryColor: {
      50: "#EAEFFD",
      100: "#BDCEFA",
      200: "#9DB6F7",
      300: "#7195F4",
      400: "#5581F1",
      500: "#2B61EE",
      600: "#2758D9",
      700: "#1F45A9",
      800: "#183583",
      900: "#122964",
    },

    TextColor: {
      50: "#EAEAEA",
      100: "#BFBFBF",
      200: "#9F9F9F",
      300: "#747474",
      400: "#595959",
      500: "#2F2F2F",
      600: "#2B2B2B",
      700: "#212121",
      800: "#1A1A1A",
      900: "#141414",
    },

    BgColor: {
      0: "#FFFFFF",
      50: "#F9F9F9",
      100: "#EAEAEA",
      200: "#141414",
    },

    NeutralColor: {
      0: "#FFFFFF",
      50: "#F9F9F9",
      100: "#141414",
    },

    SecondaryColor: {
      50: "#fffff8",
      100: "#fffeeb",
      200: "#fffde1",
      300: "#fefcd3",
      400: "#fefcca",
      500: "#fefbbd",
      600: "#e7e4ac",
      700: "#b4b286",
      800: "#8c8a68",
      900: "#6b694f",
    },
  },

  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Plus Jakarta Sans",
  },
});

export default Theme;
