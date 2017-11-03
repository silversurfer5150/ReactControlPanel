import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE } from './types';

export const collapseLeadspace = panel => (dispatch) => {
  dispatch({
    type: COLLAPSE_LEADSPACE,
    payload: panel,
  });
};

export const expandLeadspace = () => (dispatch) => {
  dispatch({
    type: EXPAND_LEADSPACE,
  });
};
