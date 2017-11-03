import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE } from '../actions/types';

const initialState = {
  collapse: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE_LEADSPACE:
      return {
        ...state,
        collapse: true,
      };

    case EXPAND_LEADSPACE:
      return {
        ...state,
        collapse: false,
      };

    default:
      return state;
  }
};
