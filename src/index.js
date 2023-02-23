import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path={"/users"} exact element={<App/>}/>
        <Route path={"/users/:userId"} exact element={<App/>}/>
        <Route path="*" exact element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
