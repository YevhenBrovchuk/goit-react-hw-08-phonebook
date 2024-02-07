import styled from 'styled-components';

export const GlobalContainer = styled.div`
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  background-image: url(${p => p.pimg});
  background-size: 100% 100%;
`;
