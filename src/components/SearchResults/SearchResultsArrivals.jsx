import { connect } from 'react-redux';

import SearchResults from './SearchResults.jsx';

import { arrivalsSelector, filterredListSelector, searchedValueSelector } from '../../features/flight.selectors';

const mapState = state => {
  if (searchedValueSelector(state) !== '') {
    return {
      flightlist: filterredListSelector(state, arrivalsSelector)
    }
  }
  return {
    flightlist: arrivalsSelector(state)
  }

}

export default connect(mapState, null)(SearchResults);  
