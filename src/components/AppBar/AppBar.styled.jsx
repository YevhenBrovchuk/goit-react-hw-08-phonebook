import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Hr = styled.hr`
  margin: 0;
  height: 10px;
  border: none;
  color: ${p => p.theme.colors.black};
  background-image: linear-gradient(
    90deg,
    ${p => p.theme.colors.black},
    ${p => p.theme.colors.black} 33.33%,
    transparent 33.33%,
    transparent 100%
  );
  background-size: 3px 100%;
`;
