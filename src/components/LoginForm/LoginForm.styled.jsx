import styled from 'styled-components';

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
