import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import Application from '/src/components/Application';

import Header from'./components/Header';

createRoot(document.querySelector('.root')).render(<Application></Application>);


document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.querySelector('.root');


    ReactDOM.render(<Header />, root);
});