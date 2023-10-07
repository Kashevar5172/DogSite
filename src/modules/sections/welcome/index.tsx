import styled from 'styled-components';

import { Headline } from './headline';

///images/main/background.jpg

export const StyledMain = styled.section`
  background-image: url('images/main/background.jpg');
  background-position: center;
  background-size: cover;
  height: 130vh;
`;


export const Main = () => {
  return (
    <StyledMain>
      <Headline />
    </StyledMain>
  );
};
