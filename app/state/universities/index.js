import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { RECEIVED_UNIVERSITIES, SEARCH_UNIVERSITIES } from '../action-types';


const universities = (state = [], { type, payload }) => {
  switch (type) {
    case RECEIVED_UNIVERSITIES:
      return payload;
    default:
      return state;
  }
};

const universityToAction = university => ({ type: RECEIVED_UNIVERSITIES, payload: university });
const searchUniversities = payload => ({ type: SEARCH_UNIVERSITIES, payload: payload });

const emptyUniversitiesSearchEpic = action$ => action$
  .filter(action => action.type === SEARCH_UNIVERSITIES && !action.payload)
  .mapTo({ type: RECEIVED_UNIVERSITIES, payload: [] });

const searchUniversitiesEpic = (action$, store, { getPromise, getObservable }) => action$
  .filter(action => action.type === SEARCH_UNIVERSITIES && action.payload)
  // .delay(2000)
  // .throttleTime(1000)
  .switchMap(({ payload }) => getObservable(`//localhost:8080/api/search?name=${payload}`).map(universityToAction))
  // .switchMap(({ payload }) => Observable.fromPromise(getPromise(`${HOSTNAME}/search?name=${payload}`).then(res => res.json())).map(universityToAction))
  .catch(err => {
    console.error(err); // we can retry!
    return Observable.empty();
  });

export const actions = { searchUniversities };
export const reducers = universities;
export const epics = combineEpics(
  searchUniversitiesEpic,
  emptyUniversitiesSearchEpic,
);
