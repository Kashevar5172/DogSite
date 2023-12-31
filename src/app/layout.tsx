"use client";

import { useState } from "react";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/GlobalStyles";
import { ThemeContext } from "./context/themeContext";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components/header/header";
import { ThemeIcon } from "@/components/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialTheme = window.localStorage.getItem("themeName") || "light";
  const [themeMode, setThemeMode] = useState(initialTheme);
  const theme = themeMode === "light" ? darkTheme : lightTheme;

  const changeTheme = () => {
    const newThemeName = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeName);
    localStorage.setItem("themeName", newThemeName);
  };

  return (
    <html>
      <body>
        <ThemeContext.Provider value={{ themeMode, changeTheme }}>
          <GlobalStyles theme={theme} />
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <ThemeIcon />
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
