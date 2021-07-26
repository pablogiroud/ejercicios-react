import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import HelloWorld from './ejercicios/HelloWorld';
import ListaDeTareas from './ejercicios/ListaDeTareas';
import TareasApp from './ejercicios/TareasApp';

ReactDOM.render(
//  <HelloWorld amigachos="my friend"/>,
// <HelloWorld />,
<TareasApp/>,
  document.getElementById('root')
);