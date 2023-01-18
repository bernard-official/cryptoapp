import React from "react";
import ReactDOM  from "react-dom";
import App from './App';
import { Provider } from "react-redux";

import { BrowserRouter  } from 'react-router-dom';

import 'antd/dist/antd.min.css'
import store from './app/store'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 </React.StrictMode>
);