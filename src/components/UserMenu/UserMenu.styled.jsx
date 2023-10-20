import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(6)};
`;

export const GreetUser = styled.p`
  font-family: 'sa';
  font-size: 26px;
  font-weight: 700;
  color: ${p => p.theme.colors.blue};
`;

export const BattonLogOut = styled.button`
  font-family: 'sans-serif';
  font-size: 26px;
  font-weight: 700;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.beige};
  }
`;
