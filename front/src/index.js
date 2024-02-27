import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/financas/App';
import { New } from './views/financas/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
