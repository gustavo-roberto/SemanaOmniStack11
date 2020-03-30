import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/*Está sendo reinderizado em tela a componente App importado do arquivo App.js*/}
  </React.StrictMode>,
  document.getElementById('root')
);


