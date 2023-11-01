"use client";

import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

import { Logo } from "./logo";
import { Search, StyledList, StyledSearch, TextInList } from "./search";
import Link from "next/link";
import { dogData } from "@/modules/sections/dogs/items";
import Media from "./media";

// export const StyledLoupe = styled(Loupe)`;
//   width: 40px;
//   height: auto;
//   padding: 2px;
//   /* margin: -4px 4px 4px 4px; */
// `;

export const StyledArticles = styled.div`
  font-family: "Mont Bold";
  font-size: 26px;

  color: white;
  text-shadow: black 2px 2px 4px;
  &:hover {
    transition: 0.2s;
    color: #00ff1a;
    cursor: pointer;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 24px 0px;
  position: fixed;

  display: flex;

  justify-content: space-around;
  align-items: center;

  z-index: 2;

  background-color: ${(props) => props.theme.backgroundHeader};
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setShowList(value.trim() !== "");
  };

  const filteredDate = dogData.filter((item) =>
    item.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const clearSearch = () => {
    setSearchValue("");
    setShowList(false);
  };

  return (
    <StyledHeader>
      <Logo />
      <StyledSearch>
        <Search
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Введите породу собаки..."
        />
        <StyledList>
          {showList &&
            filteredDate.map((dogData, index) => (
              <div key={index}>
                <Link href={dogData.link} legacyBehavior>
                  <TextInList onClick={clearSearch}>{dogData.text}</TextInList>
                </Link>
              </div>
            ))}
        </StyledList>
      </StyledSearch>
      <WrapperText>
        <Link href="/pages/breeds" legacyBehavior>
          <StyledArticles>Породы</StyledArticles>
        </Link>
        <Link href="/pages/articles" legacyBehavior>
          <StyledArticles>Articles</StyledArticles>
        </Link>
        <Link href="/pages/gallery" legacyBehavior>
          <StyledArticles>Gallery</StyledArticles>
        </Link>
        <Media />
      </WrapperText>
    </StyledHeader>
  );
};
