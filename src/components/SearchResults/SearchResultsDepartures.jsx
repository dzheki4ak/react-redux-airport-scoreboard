import { connect } from 'react-redux';

import SearchResults from './SearchResults.jsx';

import { departuresSelector ,filterredListSelector, searchedValueSelector } from '../../features/flight.selectors';

const mapState = state => {
  if (searchedValueSelector(state) !== '') {
    return {
      flightlist: filterredListSelector(state, departuresSelector)
    }
  }
  return {
    flightlist: departuresSelector(state)
  }

}


export default connect(mapState, null)(SearchResults);
