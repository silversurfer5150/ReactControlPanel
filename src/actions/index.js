import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE } from './types';

// collapse the leadspace and change the panel type in store
export const collapseLeadspace = panel => (dispatch) => {
  dispatch({
    type: COLLAPSE_LEADSPACE,
    payload: panel,
  });
};

// expand the leadspace, (default panel always set in reducer)
export const expandLeadspace = () => (dispatch) => {
  dispatch({
    type: EXPAND_LEADSPACE,
  });
};
