import { REQUEST_STARTED, REQUEST_SUCCEEDED, REQUEST_FAILED } from '../actions/types';

// Async reducer
// Performs the AJAX requests and related store updates
const initialState = {
  homeData: {},
  error: '',
  isLoading: false,
  apiUrl: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        apiUrl: action.payload,
      };

    case REQUEST_SUCCEEDED:
      return {
        ...state,
        homeData: action.payload,
        isLoading: false,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
