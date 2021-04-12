import React from 'react';
import { connect } from 'react-redux';
import './SearchResultsTable.scss';
import {
  arriveTabSelector,
  departTabSelector,
} from '../../features/flight.selectors';
import SearchResultsArrivals from '../SearchResults/SearchResultsArrivals.jsx';
import SearchResultsDepartures from '../SearchResults/SearchResultsDepartures.jsx';

const SearchResultsTable = ({ activeArrTab, activeDepTab }) => {
  if (activeArrTab || activeDepTab) {
    return (
      <div className="search__results">
      <div className="search__results-container">
        <table className="search__results-table">
          <thead>
            <tr>
              <th className="search__results-table__header">Terminal</th>
              <th className="search__results-table__header">Local time</th>
              <th className="search__results-table__header">Destination</th>
              <th className="search__results-table__header">Status</th>
              <th className="search__results-table__header">Airline</th>
              <th className="search__results-table__header">Flight</th>
              <th className="search__results-table__header">Flight details</th>
            </tr>
          </thead>
          <tbody>
            {activeArrTab && !activeDepTab ? (
              <SearchResultsArrivals />
            ) : (
              <SearchResultsDepartures />
            )}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
  return null;
};

const mapState = state => ({
  activeArrTab: arriveTabSelector(state),
  activeDepTab: departTabSelector(state),
});

export default connect(mapState)(SearchResultsTable);
