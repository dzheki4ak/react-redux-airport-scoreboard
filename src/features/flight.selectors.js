import moment from 'moment';

const todaysList = time =>
  moment(time).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY');

export const departuresSelector = state =>
  state.flightsList.departures.filter(flight =>
    todaysList(flight.timeDepShedule),
  );

export const arrivalsSelector = state =>
  state.flightsList.arrivals.filter(flight =>
    todaysList(flight.timeArrShedule),
  );

export const arriveTabSelector = state => state.activeTab.arrActive;
export const departTabSelector = state => state.activeTab.depActive;

export const searchedValueSelector = state => state.searchedValue.searchValue;

export const filterredListSelector = (state, selector) =>
  selector(state).filter(flight => {
    const searchedValue = searchedValueSelector(state);
    const flightNo = `${flight['carrierID.IATA']}${flight.fltNo}`;
    if (searchedValue !== '') {
      return flightNo.toLowerCase().includes(searchedValue.toLowerCase());
    }
  });
