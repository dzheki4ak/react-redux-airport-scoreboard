export const departuresSelector = state =>
  state.flightsList.departures.filter(
    flight =>
      new Date(flight.timeDepShedule).getDate() === new Date().getDate(),
  );

export const arrivalsSelector = state =>
  state.flightsList.arrivals.filter(
    flight =>
      new Date(flight.timeArrShedule).getDate() === new Date().getDate(),
  );

export const arriveTabSelector = state => state.activeTab.arrActive;
export const departTabSelector = state => state.activeTab.depActive;

export const searchedValueSelector = state => state.searchedValue.searchValue;

export const filterredListSelector = (state, selector) => selector(state).filter(flight => {
    const searchedValue = searchedValueSelector(state);
    const flightNo = `${flight['carrierID.IATA']}${flight.fltNo}`;
    if (searchedValue !== '') {
      return flightNo.toLowerCase().includes(searchedValue.toLowerCase())
    }
})





