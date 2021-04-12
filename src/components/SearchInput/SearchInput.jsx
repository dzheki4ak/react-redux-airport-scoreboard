import React from 'react';
import { connect } from 'react-redux';
import './SearchInput.scss';

import { searchedValueSelector } from '../../features/flight.selectors';
import { handleSearchValueAtction, switchActiveTabDepAction } from '../../features/flight.actions';

const SearchInput = ({ searchedValueProp, handleSearchedValueProp, handleSwitchActiveTabDepActionProp }) => (
  <div className="flight__search-block">
    <div className="flight__search-field">
      <h2 className="flight__search-header">search flight</h2>
      <form className="flight__search-form">
        <span
          className="fa fa-search flight__search-form_icon"
          aria-hidden="true"
        ></span>
        <input
          className="flight__search-input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={searchedValueProp}
          onChange={event => handleSearchedValueProp(event.target.value)}
        />
        <button
          onClick={handleSwitchActiveTabDepActionProp}
          className="flight__search-button"
          type="submit"
        >
          search
        </button>
      </form>
    </div>
  </div>
);

const mapState = state => ({
  searchedValueProp: searchedValueSelector(state),
});

const mapDispatch = {
  handleSearchedValueProp: handleSearchValueAtction,
  handleSwitchActiveTabDepActionProp: switchActiveTabDepAction
};

export default connect(mapState, mapDispatch)(SearchInput);
