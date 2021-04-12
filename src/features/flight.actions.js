import { fetchFlightsList } from './flight.gateway';

export const FETCH_FLIGHTS_LIST = 'FLIGHTS_LIST/FETCH_FLIGHTS_LIST';
export const SWITCH_ACTIVE_TAB_DEP = 'ACTIVE_TAB/SWITCH_ACTIVE_TAB_DEPARTURE';
export const SWITCH_ACTIVE_TAB_ARR = 'ACTIVE_TAB/SWITCH_ACTIVE_TAB_ARRIVAL';
export const SEARCH_VALUE_HANDLED = 'SEARCH_INPUT/SEARCH_VALUE_HANDLED';

export const flightsListActionCreator = flights => {
  const action = {
    type: FETCH_FLIGHTS_LIST,
    payload: flights,
  };
  return action;
};

export const getFlightListAction = () => {
  const thunkAction = function (dispatch) {
    fetchFlightsList().then(flightList =>
      dispatch(flightsListActionCreator(flightList)),
    );
  };
  return thunkAction;
};

export const switchActiveTabDepAction = () => ({
  type: SWITCH_ACTIVE_TAB_DEP,
});

export const switchActiveTabArrAction = () => ({
  type: SWITCH_ACTIVE_TAB_ARR,
});

export const handleSearchValueAtction = text => ({
  type: SEARCH_VALUE_HANDLED,
  payload: text,
});
