import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger';

const feeling = (state=0, action) =>{
    if(action.type === 'SUBMIT_FEELING'){
        let feelingInput = Number(action.payload)
        return feelingInput;
    }
    return state;
}
const understanding = (state=0, action) =>{
    if(action.type === 'SUBMIT_UNDERSTANDING'){
        let understandingInput = Number(action.payload)
        return understandingInput;
    }
    return state;
}
const support = (state=0, action) =>{
    if(action.type === 'SUBMIT_SUPPORTED'){
        let supportedInput = Number(action.payload)
        return supportedInput;
    }
    return state;
}
const comments = (state='', action) =>{
    if(action.type === 'SUBMIT_COMMENT'){
        let commentInput = action.payload;
        return commentInput;
    }
    return state;
}


const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(
        logger
    )
 )
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
 ); 
registerServiceWorker();
