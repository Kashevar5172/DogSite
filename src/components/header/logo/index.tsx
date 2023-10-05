"use client"
import styled from "styled-components";
import { ThemeContext } from "@/app/styles/theme/ThemeContext";
import { FC, useContext } from "react";
import Link from "next/link";
import { LogoImg } from "../../../../public/images/logo";

export const StyledLogo = styled(LogoImg)`
  height: 40px;
  width: 40px;
  
  &:hover,
  &:focus {
    path {
      transition: 0.4s;
      fill: white;
      stroke: black;
      stroke-width: 200px;
      stroke-linecap: butt;
    }
  }
`;

const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const StyledText = styled.span`
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 26px;
  letter-spacing: -2px;
  line-height: 1.4;
`;

export const Logo: FC = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <WrapperLogo>
      <StyledText onClick={changeTheme}>DS</StyledText>
      <Link href="/">
        <StyledLogo />
      </Link>
    </WrapperLogo>
  );
};
