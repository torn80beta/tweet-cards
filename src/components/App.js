import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import './App.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));

export const App = () => {
  useEffect(() => {
    document.title = 'Tweets';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
