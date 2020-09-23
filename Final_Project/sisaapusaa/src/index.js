import React from 'react';
import ReactDOM from 'react-dom';
import './public';
import './component/app.css'
import App from './component/App';
import { ProductProvider } from "./Main/context";


ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

