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
export const callLocationData = () => (dispatch) => {
  // Get the user's location from API, city name and country code
  const locationUrl = 'http://ip-api.com/json';

  // dispatch call location action
  dispatch({ type: REQUEST_STARTED, payload: locationUrl });
  fetch(locationUrl).then(response =>
    response
      .json()
      .then((json) => {
        // dispatch success action and build url for next API call
        dispatch({ type: REQUEST_SUCCEEDED, payload: json });
        const newApiUrl = `http://api.openweathermap.org/data/2.5/weather?appid=938c02687efb071eb7aab8b854b0d392&q=${json.city},${json.countryCode}`;
        dispatch({ type: REQUEST_STARTED, payload: locationUrl });
        return newApiUrl;
      })
      // using newly built url call final data from weather API
      .then(weatherApiUrl =>
        fetch(weatherApiUrl)
          .then(locationData => locationData.json())
          .then(json => dispatch({ type: REQUEST_SUCCEEDED, payload: json }))
          .catch(error => dispatch({ type: REQUEST_FAILED, error })),
      )
      // in case of failed location action
      .catch(error => dispatch({ type: REQUEST_FAILED, error })),
  );
};
