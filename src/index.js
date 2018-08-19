import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducers';
var store = applyMiddleware()(createStore);

ReactDOM.render(<Provider store={store(rootReducer)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
