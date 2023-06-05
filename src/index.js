import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/Montserrat/static/Montserrat-Bold.ttf';
import './fonts/Montserrat/static/Montserrat-Medium.ttf';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/tweet-cards">
      <App />
    </BrowserRouter>
  </Provider>
);
