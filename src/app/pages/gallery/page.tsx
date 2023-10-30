"use client";

import styled from "styled-components";
import { Item } from "./item";
import { dogGallery } from "./items";

const StyledPage = styled.div`
  padding-top: 92px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 14px;
`;

const Tilte = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
  font-family: "Krona One", sans-serif;
`;

const Gallery = () => {
  return (
    <StyledPage>
      <Tilte> Галерея </Tilte>
      <List>
        {dogGallery.map((container, id) => (
          <Item key={id} imageSrc={container.imageSrc} />
        ))}
      </List>
    </StyledPage>
  );
};

export default Gallery;
