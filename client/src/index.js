import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/Reset.css'

import store from './store'

ReactDOM.render(<Root store={store} />, document.getElementById('root'));