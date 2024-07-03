import { theme } from "@/constants/theme";

import { createContext, ReactNode } from "react";

export const ThemeContext = createContext({
  theme,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
