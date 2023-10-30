"use client";

import React, {useState} from "react";
import styled from "styled-components";

const StyledPage = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Articles = () => {
  const [showList, setShowList] = useState(false);

  const ArrowClick = () => {
    setShowList(!showList);
  };
  return (
  <StyledPage>
    
  </StyledPage>
  );
};

export default Articles;
