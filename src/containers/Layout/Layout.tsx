import { Container, Divider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import { Navigation } from '../../components/Navigation/Navigation';
import './Layout.scss';

export default function Layout() {
  return (
    <div className='layout'>
      <Navigation
        items={[
          { title: 'Home', url: '/' },
          { title: 'Show events', url: '/events' }
        ]}
      />
      <Divider />
      <Container maxWidth='lg' className='container'>
        <Outlet />
      </Container>
    </div>
  );
}
