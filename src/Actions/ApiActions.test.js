import * as actions from './ApiActions';
import * as types from './../constants/ActionTypes';

describe('actions', () => {
    it('should create an action to fetch articles', () => {
      const expectedAction = {
        type: types.ActionTypes.LOADING_STATE,
      }
      expect(actions.loading_state()).toEqual(expectedAction)
    })
})