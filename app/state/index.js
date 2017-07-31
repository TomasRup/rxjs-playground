import 'whatwg-fetch';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  actions as uiActions,
  epics as uiEpics,
} from './ui';
import {
  actions as universityActions,
  reducers as universities,
  epics as universityEpics
} from './universities';


const reducers = combineReducers({
  universities,
});

const middlewares = [
  createEpicMiddleware(
    combineEpics(
      universityEpics,
      uiEpics
    ),
    {
      dependencies: {
        getObservable: ajax.getJSON,
        getPromise: fetch,
      }
    }
  )
];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export const actions = {
  university: universityActions,
  ui: uiActions,
};
