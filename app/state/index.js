import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {
    actions as repositoriesActions,
    reducers as repositories,
    epics as repositoriesEpics
} from './repositories';
import createGithubApi from '../utils/create-github-api';


const reducers = combineReducers({
    repositories
});

const dependencies = {
    githubApi: createGithubApi()
};

const epics = [
    repositoriesEpics
];

const middlewares = [
    createEpicMiddleware(combineEpics(...epics), { dependencies })
];

export const store = createStore(reducers, applyMiddleware(...middlewares));

export const actions = {
    repository: repositoriesActions
};
