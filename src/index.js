import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './components/Home';
import { Tekkisi } from './components/Tekkisi';
import { Ikikisi } from './components/Ikikisi';
import { Hayattakalma } from './components/Hayattakalma';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/tekkisi" element={<Tekkisi/>}/>
          <Route exact path="/ikikisi" element={<Ikikisi/>}/>
          <Route exact path="/hayattakalma" element={<Hayattakalma/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a functionn
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
