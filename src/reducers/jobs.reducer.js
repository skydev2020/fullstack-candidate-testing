import * as ActionType from 'actions/jobs.action'

export const initialState = {
  jobs: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_JOBS:
      return {
        ...initialState,
        jobs: action.payload
      };
    default:
      return state
  }
}
