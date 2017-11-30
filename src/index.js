import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/css/index.css';

import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
