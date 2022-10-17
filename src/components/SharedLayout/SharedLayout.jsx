import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <footer>Copyright 2022</footer>
    </>
  );
};
