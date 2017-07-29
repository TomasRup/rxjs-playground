import { Observable } from 'rxjs';

import { RECEIVED_REPOSITORIES, SEARCH_REPOSITORIES } from '../action-types';


const repositories = (state = [], { type, payload }) => {
  switch (type) {
    case RECEIVED_REPOSITORIES: return payload;
    default: return state;
  }
};

const searchRepositories = payload => ({ type: SEARCH_REPOSITORIES, payload: payload });

const searchRepositoriesEpic = (action$, store, { githubApi }) => action$
  .filter(action => action.type === SEARCH_REPOSITORIES)
  .switchMap(({ payload }) => {
    if (!payload) return Observable.empty();
    return Observable
      .fromPromise(githubApi.searchRepositories(payload))
      .map(response => {
        console.log('received', response);
        return { type: RECEIVED_REPOSITORIES, payload: [] }
      });
  });



export const epics = searchRepositoriesEpic;
export const actions = { searchRepositories };
export const reducers = repositories;