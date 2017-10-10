import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Store from './store';
import {Provider} from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
let store= new Store()

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>

, document.getElementById('root'));
registerServiceWorker();
