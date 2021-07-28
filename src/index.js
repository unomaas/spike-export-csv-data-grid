import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga dependencies
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import App from './App';

// this startingPlantArray should eventually be removed
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' }
// ];


//***********REDUCERS***********//
const plantList = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_PLANT':
    //   return [ ...state, action.payload ]
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};


//***********SAGAS***********//

// Workers
// axios GET request for DB data
function* fetchPlant() {
  try{
    const response = yield axios.get('/api/plant');
    yield put({type: 'SET_PLANTS', payload: response.data});
  } catch (error) {
    console.error('error with Plant GET request', error)
  }
}

// axios POST request to add a new plan
function* postPlant(action) {
  try {
    yield axios.post('/api/plant', action.payload);
    yield put({type: 'FETCH_PLANT'});
  } catch (error) {
    console.error('error with Plant POST request', error);
  }
}

// axios DELETE request to remove plant
function* removePlant(action) {
  try{
    yield axios.delete(`/api/plant/${action.payload}`);
    yield put({type: 'FETCH_PLANT'});
  } catch (error) {
    console.error('error with Plant DELETE request', error);
  }
}


function* rootSaga() {
  yield takeEvery('FETCH_PLANT', fetchPlant)
  yield takeEvery('ADD_PLANT', postPlant)
  yield takeEvery('REMOVE_PLANT', removePlant)
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  combineReducers({ plantList,}),
  applyMiddleware(sagaMiddleware, logger),
);

// Allows rootSaga to start listening for action types *** MUST BE BELOW store
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
