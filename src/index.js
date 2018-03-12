import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer'

let middleware = store => next => action => {
    console.log('state:',store.getState());
    console.log('dispatch:',action);
    next(action);
    console.log('finish:',action);
};
// const store = applyMiddleware(middleware)(createStore)
const store = createStore(reducer,{
    appName:'my name is master!'
},applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
