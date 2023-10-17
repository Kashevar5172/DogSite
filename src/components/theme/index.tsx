import { useContext } from "react";

import styled from "styled-components";

import { ThemeContext } from "@/app/context/themeContext";
import { Moon } from "./icons/moon";
import { Sun } from "./icons/sun";

const StyledSun = styled(Sun)`
  width: 80px;
  height: 80px;
  bottom: 2%;
  position: fixed;
`;

const StyledMoon = styled(Moon)`
  width: 80px;
  height: 80px;
  bottom: 2%;
  position: fixed;
`;

const Wrapper = styled.div`
  padding: 6px;
`;

export const ThemeIcon = () => {
  const { themeMode, changeTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      {themeMode === "light" ? (
        <StyledMoon onClick={changeTheme} />
      ) : (
        <StyledSun onClick={changeTheme} />
      )}
    </Wrapper>
  );
};
