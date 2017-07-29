import 'whatwg-fetch';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import { actions as uiActions } from './ui';
import {
  actions as universityActions,
  reducers as universities,
  epics as universityEpics
} from './universities';


const reducers = combineReducers({
  universities,
});

const epics = [
  universityEpics,
];

const dependencies = {
  getObservable: ajax.getJSON,
  getPromise: fetch,
};

const middlewares = [
  createEpicMiddleware(combineEpics(...epics), { dependencies })
];

export const store = createStore(reducers, applyMiddleware(...middlewares));

export const actions = {
  university: universityActions,
  ui: uiActions,
};
