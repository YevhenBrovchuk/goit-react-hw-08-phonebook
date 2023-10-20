import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  ButtonReg,
  Form,
  FormInput,
  FormLabel,
  TextReg,
  Thumb,
  Wrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            Username
            <FormInput
              type="text"
              name="name"
              pattern="[A-Za-z]{3,}"
              title="Login must include min 3 Latin characters"
            />
          </FormLabel>
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
            <TextReg>Register</TextReg>
          </ButtonReg>
        </Form>
      </Thumb>
    </Wrapper>
  );
};
