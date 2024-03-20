import { useContext } from "react";
import palette from "./palette";
import ThemeContext from "../contexts/ThemeContext";

// Palette function to return the theme based on the theme mode
export default function useTheme() {
  const { theme } = useContext(ThemeContext);

  return palette(theme);
}
