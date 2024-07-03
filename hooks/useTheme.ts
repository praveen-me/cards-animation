// src/hooks/useTheme.ts

import { ThemeContext } from "@/theme";
import { useContext } from "react";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
