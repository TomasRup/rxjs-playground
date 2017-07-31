import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { MOVE_MOUSE } from '../action-types';


const moveMouse = () => ({ type: MOVE_MOUSE });

const nervousUserEpic = action$ => action$
  .ofType(MOVE_MOUSE)
  // .windowCount(100).skip(1)
  .bufferCount(100)
  .map(() => {
    console.log('User is getting nervous...')
    return Observable.empty();
  })
  .switch();

export const actions = { moveMouse };
export const epics = combineEpics(
  nervousUserEpic,
);
