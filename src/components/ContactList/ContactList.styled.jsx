import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin-top: ${p => p.theme.spacing(10)};
`;

export const ContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  pointer-events: none;
  color: ${p => p.theme.colors.blue};
  font-size: 20px;
  font-weight: 600;
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.red};
  }
`;

export const ButtonDel = styled.button`
  margin-bottom: ${p => p.theme.spacing(3)};

  font-size: 18px;
  pointer-events: auto;
  color: ${p => p.theme.colors.blue};
  width: 130px;
  height: 35px;
  border-radius: 0 18px;
  background: transparent;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &::after {
    transition: 0.5s;
    content: '';
    width: 130px;
    height: 35px;
    box-shadow: 1px 1px 2px ${p => p.theme.colors.shadow},
      -2px -2px 3px ${p => p.theme.colors.white},
      0px 0px 0px inset ${p => p.theme.colors.white},
      0px 0px 0px inset ${p => p.theme.colors.rgba};
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0 18px;
    border: 3px solid ${p => p.theme.colors.bshadow};
    z-index: 1;
  }

  &:hover::after {
    box-shadow: 0px 0px 0px ${p => p.theme.colors.shadow},
      0px 0px 0px ${p => p.theme.colors.white},
      -3px -3px 5px inset ${p => p.theme.colors.white},
      3px 3px 5px inset ${p => p.theme.colors.rgba};
  }

  &:hover h3 {
    color: ${p => p.theme.colors.red};
    letter-spacing: 1px;
  }

  &:active h3 {
    transition: 0.1s;
    letter-spacing: 2px;
  }
`;
