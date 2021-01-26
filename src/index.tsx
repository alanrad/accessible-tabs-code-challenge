import React from 'react';
import ReactDOM from 'react-dom';
// styles
import 'styles/reset.css';
// components
import { App } from 'app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
