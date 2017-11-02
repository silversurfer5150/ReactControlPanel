export const COLLAPSE_LEADSPACE = 'panel/COLLAPSE_LEADSPACE';
export const EXPAND_LEADSPACE = 'panel/EXPAND_LEADSPACE';

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

export const collapseLeadspace = () => (dispatch) => {
  dispatch({
    type: COLLAPSE_LEADSPACE,
  });
};

export const expandLeadspace = () => (dispatch) => {
  dispatch({
    type: EXPAND_LEADSPACE,
  });
};
