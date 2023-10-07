'use client';

import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

import { Logo } from './logo';
import { Search, StyledList, StyledSearch, TextInList } from './search';
import { date } from './search/searchMass';
import Link from 'next/link';

export const StyledTextSecond = styled.div`
  font-family: sans-serif;
  font-size: 26px;

  text-shadow: black 0 3px;
  font-weight: bold;
  &:hover {
    transition: 0.4s;
    color: #00900e;
  }
  cursor: pointer;
`;

export const FAQ = styled.div`
  font-family: 'Krona One', sans-serif;
  text-decoration: none;

  font-size: 26px;

  text-shadow: black 0 3px;
  &:hover {
    transition: 0.4s;
    color: #00900e;
    cursor: pointer;
  }
`;

// export const StyledLoupe = styled(Loupe)`
//   width: 40px;
//   height: auto;
//   padding: 2px;
//   /* margin: -4px 4px 4px 4px; */
// `;

const StyledHeader = styled.header`
  width: 100%;

  padding: 24px 0px;

  position: fixed;

  display: flex;
  
  justify-content: space-around;
  align-items: center;

  z-index: 2;

  background-color: #ffffff30;
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showList, setShowList] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setShowList(value.trim() !== '');
  };

  const filteredDate = date.filter((item) =>
    item.Dog_name.toLowerCase().includes(searchValue.toLowerCase())
  );

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
            filteredDate.map((dogInfo, index) => (
              <div key={index}>
                <Link href={dogInfo.Link_name} legacyBehavior>
                  <TextInList>{dogInfo.Dog_name}</TextInList>
                </Link>
              </div>
            ))}
        </StyledList>
      </StyledSearch>
      <WrapperText>
        <Link href="/pages/breeds" legacyBehavior>
          <StyledTextSecond>Породы</StyledTextSecond>
        </Link>
        <Link href="/pages/faq" legacyBehavior>
          <FAQ>FAQ</FAQ>
        </Link>
      </WrapperText>
    </StyledHeader>
  );
};
