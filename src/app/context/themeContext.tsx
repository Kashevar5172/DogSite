import { createContext } from "react";

interface ThemeContextInterface {
  themeMode: string;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  themeMode: "light",
  changeTheme: () => {},
});
