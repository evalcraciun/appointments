import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
