import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';

const EventsModule = React.lazy(() => import('./components/Events/Events'));

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='events'
            element={
              <React.Suspense fallback={<>...</>}>
                <EventsModule />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
