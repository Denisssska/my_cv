import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

import "swiper/css/bundle";
import "./styles.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);
reportWebVitals();