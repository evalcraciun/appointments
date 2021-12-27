import { Container } from '@material-ui/core';
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
    <Container maxWidth='lg' className='container-navigation'>
      {items?.map(element => {
        return (
          <NavLink to={element.url} className='rounded'>
            {element.title}
          </NavLink>
        );
      })}
    </Container>
  );
};

export default Navigation;
