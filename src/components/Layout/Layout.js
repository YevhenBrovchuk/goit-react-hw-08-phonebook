import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalContainer } from './Layout.styled';

export const Layout = () => {
  // console.log(bgimage);
  return (
    <GlobalContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </GlobalContainer>
  );
};
