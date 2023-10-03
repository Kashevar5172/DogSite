import { useState, createContext } from 'react';
import { GlobalStyles, themeName } from '../GlobalStyles';

interface ThemeContextInterface {
  themeMode: { [key: string]: string };
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  themeMode: themeName.light,
  changeTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const savedThemeName = localStorage.getItem(
    'themeName'
  ) as keyof typeof themeName;

  const initialThemeMode =
    savedThemeName && themeName[savedThemeName]
      ? themeName[savedThemeName]
      : themeName.light;

  const [themeMode, setthemeMode] = useState(initialThemeMode);

  const changeTheme = () => {
    const newThemeMode =
      themeMode === themeName.light ? themeName.dark : themeName.light;
    setthemeMode(newThemeMode);
    localStorage.setItem(
      'themeName',
      newThemeMode === themeName.light ? 'light' : 'dark'
    );
  };

  return (
    <ThemeContext.Provider value={{ themeMode, changeTheme }}>
      <GlobalStyles theme={themeMode} />
      {children}
    </ThemeContext.Provider>
  );
}
