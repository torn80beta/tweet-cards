// import logo from './logo.svg';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { Tweets } from 'pages/Tweets/tweets';
import './App.css';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="tweets" end>
          Tweets
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
