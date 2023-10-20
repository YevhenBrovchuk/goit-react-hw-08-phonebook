import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 160px;
  left: 32%;
`;

export const Form = styled.form`
  width: 320px;
`;

export const FormLabel = styled.label`
  color: ${p => p.theme.colors.black};
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${p => p.theme.spacing(8)};
`;

export const FormInput = styled.input`
  padding: ${p => p.theme.spacing(8)};
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
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
    box-shadow: 0px 0px 0px ${p => p.theme.colors.shadow},
      0px 0px 0px ${p => p.theme.colors.white},
      -3px -3px 5px inset ${p => p.theme.colors.white},
      3px 3px 5px inset ${p => p.theme.colors.rgba};
  }

  &:invalid {
    border-color: ${p => p.theme.colors.red};
  }
`;

export const ButtonReg = styled.button`
  margin: 0 auto 40px;
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
    border: 3px solid #e4ebf5;
    z-index: 1;
  }

  &:hover {
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

export const TextReg = styled.h3`
  color: ${p => p.theme.colors.blue};
  transition: 0.5s;
  pointer-events: none;
`;
