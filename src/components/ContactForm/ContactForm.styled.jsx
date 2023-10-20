import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  width: 320px;
`;

export const InputStyled = styled(Field)`
  padding: ${p => p.theme.spacing(8)};
  font-size: 20px;
  font-weight: 600;
  width: 300px;
  height: 40px;
  background: transparent;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: 0px 18px;
  border: 3px solid ${p => p.theme.colors.bshadow};
  box-shadow: 1px 1px 2px ${p => p.theme.colors.shadow},
    -2px -2px 3px ${p => p.theme.colors.white},
    0px 0px 0px inset ${p => p.theme.colors.white},
    0px 0px 0px inset ${p => p.theme.colors.rgba};
  position: relative;
  transition: 0.5s;
  outline: 0;

  &::after {
    transition: 0.5s;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px ${p => p.theme.colors.bshadow},
      0px 0px 0px ${p => p.theme.colors.white},
      -3px -3px 5px inset ${p => p.theme.colors.white},
      3px 3px 5px inset ${p => p.theme.colors.rgba};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  color: ${p => p.theme.colors.red};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(8)};
  }
`;

export const ButtonAdd = styled.button`
  margin: 30px auto 15px;
  width: 180px;
  height: 40px;
  border-radius: 0 18px;
  background: transparent;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &::after {
    transition: 0.5s;
    content: '';
    width: 180px;
    height: 40px;
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
    letter-spacing: 1px;
  }

  &:active h3 {
    transition: 0.1s;
    letter-spacing: 2px;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.blue};
  font-size: 16px;
`;
