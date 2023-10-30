"use client";
import { TG } from "@/components/theme/icons/media/tg";
import { VK } from "@/components/theme/icons/media/vk";
import Link from "next/link";
import React, { FC, useState } from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 110px;
  height: 100px;

  fill: ${(props) => props.theme.textColor};
  cursor: pointer;
  circle {
    stroke: ${(props) => props.theme.textColor};
  }
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    fill: ${(props) => props.theme.linkColor};
  }

  &:hover circle {
    transition: 0.5s;
    stroke: ${(props) => props.theme.linkColor};
  }
`;

export const Media = styled.div`
  font-family: "Krona One", sans-serif;
  font-size: 26px;
  font-weight: bold;
  color: white;
  text-shadow: black 2px 2px 4px;
`;

const Box = styled.div`
  width: 0px;
  height: auto;
  position: absolute;
  background-color: red;
`;

const Empty = styled.div`
  width: 80px;
  height: 31px;
`;

const Test: FC = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <Media onMouseEnter={toggleList} onMouseLeave={toggleList}>
        MEDIA
        {showList && (
          <Box>
            <Empty />
            <Link href={"https://vk.com/maks.tipidor"}>
              <StyledSvg>
                <VK />
              </StyledSvg>
            </Link>
            <StyledSvg>
              <TG />
            </StyledSvg>
          </Box>
        )}
      </Media>
    </div>
  );
};

export default Test;
