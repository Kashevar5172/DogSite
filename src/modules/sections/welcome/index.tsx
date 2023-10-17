import styled from "styled-components";

import { Headline } from "./headline";

export const StyledMain = styled.div`
  background-image: url("/images/background.jpg");
  background-position: center;
  background-size: cover;
  height: 140vh;
`;

export const Main = () => {
  return (
    <StyledMain>
      <Headline />
    </StyledMain>
  );
};
