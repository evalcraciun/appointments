import { Container } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router';
import { Navigation } from '../../components/Navigation/Navigation';
import './Layout.scss';

export default function Layout() {
  return (
    <div className='layout'>
      <Navigation items={[{ title: 'Home', url: '/' }]} />
      <Container maxWidth='lg' className='container'>
        <Outlet />
      </Container>
    </div>
  );
}
