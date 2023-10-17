"use client"
import styled from "styled-components";
import { FC } from "react";
import Link from "next/link";
import { LogoImg } from "@/components/theme/icons/logo";

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
  font-size: 26px;
  letter-spacing: -2px;
  line-height: 1.4;
  color: white;
  text-shadow: 2px 2px 6px black;
`;

export const Logo: FC = () => {
  return (
    <WrapperLogo>
      <StyledText>DS</StyledText>
      <Link href="/">
        <StyledLogo />
      </Link>
    </WrapperLogo>
  );
};
