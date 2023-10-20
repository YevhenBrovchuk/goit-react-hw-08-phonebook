import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Form, FormLabel } from './LoginForm.styled';

import {
  ButtonReg,
  FormInput,
  TextReg,
  Thumb,
  Wrapper,
} from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Thumb>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            Email
            <FormInput
              type="email"
              name="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Missing an '@' or '.' character"
            />
          </FormLabel>
          <FormLabel>
            Password
            <FormInput
              type="password"
              name="password"
              pattern=".{7,10}"
              title="Password must include 7 to 10 simbols"
            />
          </FormLabel>
          <ButtonReg type="submit">
            <TextReg>Log In</TextReg>
          </ButtonReg>
        </Form>
      </Thumb>
    </Wrapper>
  );
};
