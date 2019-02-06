import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/reducers';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>  
    </Provider>,
document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
