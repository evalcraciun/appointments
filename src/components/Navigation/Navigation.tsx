import { Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

interface Menu {
  title: string;
  url: string;
}

interface Props {
  items: Menu[];
}

export const Navigation: React.FC<Props> = ({ items }) => {
  return (
    <Container maxWidth='lg' className='navigation'>
      <div className='nav'>
        <a href='/' className='logo'>
          AppDoctors
        </a>
        <div className='main-navigation'>
          {items?.map((element, index) => {
            return (
              <NavLink to={element.url} className='rounded' key={index}>
                {element.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
