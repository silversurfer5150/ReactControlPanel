import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE } from './types';

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
