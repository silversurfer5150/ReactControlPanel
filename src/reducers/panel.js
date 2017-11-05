import { COLLAPSE_LEADSPACE, EXPAND_LEADSPACE, SWITCH_PANEL } from '../actions/types';

const initialState = {
  collapse: false,
  panelType: 'default',
  tabs: [
    { name: 'Welcome', class: 'btn-default', path: '/', selected: true },
    { name: 'GMail', class: 'btn-primary', path: 'gmail', selected: false },
    { name: 'Photos', class: 'btn-success', path: 'photos', selected: false },
    { name: 'Drive', class: 'btn-info', path: 'drive', selected: false },
    { name: 'Facebook', class: 'btn-warning', path: 'facebook', selected: false },
    { name: 'Google', class: 'btn-danger', path: 'search', selected: false },
  ],
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
        panelType: 'default',
      };

    case SWITCH_PANEL:
      return {
        ...state,
        tabs: action.payload,
      };

    default:
      return state;
  }
};
