import React from 'react';
import SearchInput from '../SearchInput/SearchInput.jsx';
import NavButtons from '../NavButtons/NavButtons.jsx';
import SearchResultsTable from '../SearchResultsTable/SearchResultsTable.jsx';
import './FlightSearch.scss';

const FlightSearch = () => (
  <section className="flight__search">
    <SearchInput />
    <NavButtons />
    <SearchResultsTable />
  </section>
);

export default FlightSearch;
