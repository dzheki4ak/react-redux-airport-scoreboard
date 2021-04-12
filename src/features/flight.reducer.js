import {
  FETCH_FLIGHTS_LIST,
  SWITCH_ACTIVE_TAB_DEP,
  SWITCH_ACTIVE_TAB_ARR,
  SEARCH_VALUE_HANDLED,
} from './flight.actions';

const initialState = {
  departures: [],
  arrivals: [],
};

const initTab = {
  arrActive: false,
  depActive: false,
};

const initSearchValue = {
  searchValue: '',
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_LIST:
      return {
        ...state,
        departures: action.payload.body.departure,
        arrivals: action.payload.body.arrival,
      };
    default:
      return state;
  }
};

export const activeTabReducer = (state = initTab, action) => {
  switch (action.type) {
    case SWITCH_ACTIVE_TAB_DEP:
      return {
        ...state,
        arrActive: false,
        depActive: true,
      };
    case SWITCH_ACTIVE_TAB_ARR:
      return {
        ...state,
        arrActive: true,
        depActive: false,
      };
    default:
      return state;
  }
};

export const searchValueReducer = (state = initSearchValue, action) => {
  switch (action.type) {
    case SEARCH_VALUE_HANDLED:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
