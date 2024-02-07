import { Outlet, useLocation } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalContainer } from './Layout.styled';
import homimg from '../../img/imgPhoneBook.jpg';
import regimg from '../../img/register.jpg';
import loginimg from '../../img/login.webp';
import contimg from '../../img/istockphoto-456106063-612x612.jpg';

export const Layout = () => {
  const state = useLocation();

  const helper = pathname => {
    if (pathname === '/') {
      return homimg;
    } else if (pathname === '/register') {
      return regimg;
    } else if (pathname === '/login') {
      return loginimg;
    } else if (pathname === '/contacts') return contimg;
  };

  return (
    <GlobalContainer pimg={helper(state.pathname)}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </GlobalContainer>
  );
};
