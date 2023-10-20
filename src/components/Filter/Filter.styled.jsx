import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: ${p => p.theme.spacing(8)};
  font-size: 20px;
  font-weight: 600;
  width: 180px;
  height: 40px;
  background: transparent;
  display: flex;
  align-items: center;
  transition: 0.5s;
  border-radius: 0px 18px;
  border: 3px solid ${p => p.theme.colors.bshadow};
  box-shadow: 1px 1px 2px ${p => p.theme.colors.shadow},
    -2px -2px 3px ${p => p.theme.colors.white},
    0px 0px 0px inset ${p => p.theme.colors.white},
    0px 0px 0px inset ${p => p.theme.colors.rgba};
  transition: 0.5s;
  outline: 0;

  &::after {
    transition: 0.5s;
    content: '';
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px ${p => p.theme.colors.shadow},
      0px 0px 0px ${p => p.theme.colors.white},
      -3px -3px 5px inset ${p => p.theme.colors.white},
      3px 3px 5px inset ${p => p.theme.colors.rgba};
  }
`;

export const SearchLabelText = styled.h2`
  color: ${p => p.theme.colors.red};
  font-size: 18px;
  margin-left: 70px;
`;
