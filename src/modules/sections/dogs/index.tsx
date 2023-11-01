import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Item, ItemProps } from "./item";
import { dogData } from "./items";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;


  font-family: "Mont Bold";

  max-width: 100%;
  margin-bottom: 60px;
  padding: 6px;
  font-size: 50px;

  background-color: #00000030;
  color: white;
`;

export const DogsSection = () => {
  const [containers, setContainers] = useState<ItemProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage: number = 9;
  const isLoading = useRef<boolean>(false);

  useEffect(() => {
    const loadMoreContainers = () => {
      if (isLoading.current) return;

      isLoading.current = true;

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newContainers = dogData.slice(startIndex, endIndex);

      setContainers((prevContainers) => [...prevContainers, ...newContainers]);
      setPage((prevPage) => prevPage + 1);

      isLoading.current = false;
    };

    const handleScroll = () => {
      const windowHeight: number = window.innerHeight;
      const documentHeight: number = document.documentElement.scrollHeight;
      const scrollTop: number =
        window.scrollY || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 100) {
        loadMoreContainers();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);
  return (
    <>
      <StyledHeadline>Вата фак</StyledHeadline>
      <List>
        {containers.map((container, index) => (
          <Item
            key={index}
            text={container.text}
            imageSrc={container.imageSrc}
            link={container.link}
          />
        ))}
        {isLoading.current}
      </List>
    </>
  );
};
