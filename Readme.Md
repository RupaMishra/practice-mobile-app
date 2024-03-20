normal button elevated and shadhow style
button: {
borderRadius: 6,
paddingVertical: 0,
paddingHorizontal: 8,
elevation: 500,
shadowColor: "black",
shadowOffset: { width: 1, height: 1 },
shadowOpacity: 0.25,
shadowRadius: 4,
},
buttonText: { fontSize: 16 },
pressed: {
opacity: 0.7,
},

import { DefaultTheme, DarkTheme } from "@react-navigation/native";

function applyOpacity(color, opacity) {
// Extract RGB values from the color string
const [r, g, b] = color.match(/\d+/g).map(Number);

// Ensure opacity is within the valid range (0 to 1)
const validOpacity = Math.min(Math.max(opacity, 0), 1);

// Construct RGBA string with the given opacity
return `rgba(${r}, ${g}, ${b}, ${validOpacity})`;
}

const GREY = {
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

const COMMON = {
common: { black: "#000", white: "#fff" },
primary: PRIMARY,
secondary: SECONDARY,
info: INFO,
success: SUCCESS,
warning: WARNING,
error: ERROR,
blue: BLUE,
grey: GREY,
divider: applyOpacity(GREY[500], 0.24),
action: {
hover: applyOpacity(GREY[500], 0.08),
selected: applyOpacity(GREY[500], 0.16),
disabled: applyOpacity(GREY[500], 0.8),
disabledBackground: applyOpacity(GREY[500], 0.24),
focus: applyOpacity(GREY[500], 0.24),
hoverOpacity: 0.08,
disabledOpacity: 0.48,
},
};

export const light = {
...DefaultTheme,
dark: true,
colors: {
...DefaultTheme.colors,
text: "#616161",
card: "#f9f9f9",
border: "#9F9F9F",
primary: "#333333",
background: "#ffffff",
},
};
export const dark = {
...DarkTheme,
dark: false,
colors: {
...DarkTheme.colors,
text: "#dadada",
card: "#191919",
border: "#444859",
primary: "#f9f9f9",
background: "#121212",
},
};
