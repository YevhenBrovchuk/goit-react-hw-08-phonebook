import { useDispatch } from 'react-redux';
import { BattonLogOut, GreetUser, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <GreetUser>Welcome, {user.name}</GreetUser>
      <BattonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BattonLogOut>
    </Wrapper>
  );
};
