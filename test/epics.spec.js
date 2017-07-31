import nock from 'nock';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';

import { epics as universitiesEpics } from '../app/state/universities';


describe('Epics', () => {

  describe('Universities', () => {
    it('handles SEARCH_UNIVERSITIES with payload', () => {

    });

    it('handles SEARCH_UNIVERSITIES without payload', () => {

    });
  });

  describe('UI', () => {
    it('handles MOVE_MOUSE with payload', () => {

    });
  });

});