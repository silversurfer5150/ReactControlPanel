import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE, REQUEST_STARTED, REQUEST_SUCCEEDED, REQUEST_FAILED } from './types';

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

// call the API data
export const makeApiCall = url => (dispatch) => {
  dispatch({ type: REQUEST_STARTED });

  fetch(url)
    .then(response => response.json())
    .then(json => dispatch({ type: REQUEST_SUCCEEDED, payload: json }))
    .catch(error => dispatch({ type: REQUEST_FAILED, error }));
};
