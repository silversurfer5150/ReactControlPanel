import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE, SWITCH_PANEL } from './types';

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

export const switchPanel = tabs => (dispatch) => {
  dispatch({
    type: SWITCH_PANEL,
    payload: tabs,
  });
};
