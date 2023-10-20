import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">LogIn</StyledLink>
    </nav>
  );
};
