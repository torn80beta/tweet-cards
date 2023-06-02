import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { Tweets } from 'pages/Tweets/Tweets';
import { useEffect } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import './App.css';

export const App = () => {
  useEffect(() => {
    document.title = 'Tweets';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
