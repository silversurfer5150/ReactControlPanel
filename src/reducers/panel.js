import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE } from '../actions/types';

const initialState = {
  collapse: false,
  panelType: 'default',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COLLAPSE_LEADSPACE:
      return {
        ...state,
        collapse: true,
        panelType: action.payload,
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
