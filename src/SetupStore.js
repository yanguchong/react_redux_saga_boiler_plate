import React from 'react';
import { createStore, applyMiddleware} from 'redux'
import {render} from 'react-dom';
import {createLogger} from 'redux-logger';
import reducer from './Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga';
import loadState from "./LoadState";

const middleware =[];

if (process.env.NODE_ENV !== 'prod'){
    middleware.push(createLogger());
}

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

loadState(store);

export default store;