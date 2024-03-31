// ----------------------------------------------------------------------

// SETUP COLORS

export const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

export const PRIMARY = {
  lighter: "#89c2d9",
  light: "#61a5c2",
  main: "#01497c",
  dark: "#013a63",
  darker: "#012a4a",
  contrastText: "#fff",
};

export const SECONDARY = {
  lighter: "#F2E9DA",
  light: "#DFC8A3",
  main: "#C09247",
  dark: "#866631",
  darker: "#604923",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#E9E0CFCB",
  light: "#D9C9AB",
  main: "#CAB387",
  dark: "#8D7D5E",
  darker: "#655943",
  contrastText: "#fff",
};

const BLUE = {
  lighter: "#ade8f4",
  light: "#90e0ef",
  main: "#0060B4",
  dark: "#023e8a",
  darker: "#03045e",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FED600",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

export const COMMON = {
  common: { black: "#000", white: "#ffffff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  blue: BLUE,
  grey: GREY,
  divider: GREY[500],
  action: {
    hover: GREY[500],
    selected: GREY[500],
    disabled: GREY[500],
    disabledBackground: GREY[500],
    focus: GREY[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500],
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === "light" ? light : dark;
}
