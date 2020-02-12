import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/Calculadora';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calculadora />, document.getElementById('root'));


serviceWorker.unregister();
