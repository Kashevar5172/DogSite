import { useContext } from "react";

import styled from "styled-components";

import { ThemeContext } from "@/app/context/themeContext";

const StyledSun = styled(Sun)`
  width: 20px;
  height: 20px;
`;

const StyledMoon = styled(Moon)`
  width: 20px;
  height: 20px;
`;

const Wrapper = styled.div`
  padding: 6px;
`;
export const ThemeIcon = () => {
  const { themeMode, changeTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      {themeMode === "light" ? (
        <StyledSun onClick={changeTheme} />
      ) : (
        <StyledMoon onClick={changeTheme} />
      )}
    </Wrapper>
  );
};
