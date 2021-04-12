import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './SearchResults.scss';
import PropTypes from 'prop-types';

import { getFlightListAction } from '../../features/flight.actions';

const SearchResults = ({ getFlightListActionProp, flightlist }) => {
  useEffect(() => getFlightListActionProp(), []);

  const listToRender = flightlist.slice().map(flight => {
    const {
      term,
      timeLandCalc,
      timeDepExpectCalc,
      timeTakeofFact,
      timeLandFact,
      status,
      fltNo,
      delay,
      ID,
    } = flight;

    const direction = timeLandCalc ? 'arrivals' : 'departures';

    const factTimeStatus = () => {
      if (status === 'LN') {
        return `Landed at ${moment(timeLandFact).format('HH:mm')}`;
      }
      if (status === 'DP') {
        return `Departed at ${moment(timeTakeofFact).format('HH:mm')}`;
      }
      if (status === 'CK') {
        return 'Check in';
      }
      return delay ? 'Delayed' : 'On time';
    };

    return (
      <tr key={flight.ID} className="search__results-table_row">
        <td className="search__results-table__data terminal">
          <span className="terminal__letter">{term}</span>
        </td>
        <td className="search__results-table__data">
          {moment(timeLandCalc || timeDepExpectCalc).format('HH:mm')}
        </td>
        <td className="search__results-table__data">
          <span>
            {flight['airportToID.city_en'] || flight['airportFromID.name_en']}
          </span>
        </td>
        <td className="search__results-table__data">
          <div>{factTimeStatus()}</div>
        </td>
        <td className="search__results-table__data">
          <div className="airline__description">
            <img
              className="airline__logo"
              src={flight.airline.en.logoSmallName}
              alt="logo"
            />
            <p className="airline__name">{flight.airline.en.name}</p>
          </div>
        </td>
        <td className="search__results-table__data">
          <span>{`${
            flight['carrierID.IATA'] || flight['carrierID.code']
          }${fltNo}`}</span>
        </td>
        <td className="search__results-table__data">
          <div>
            <a
              target="_blank"
              className="flight__details"
              href={`https://iev.aero/en/${direction}/${ID}?dt=${moment().format(
                'DD-MM-YYYY',
              )}`}
            >
              Flight details
            </a>
          </div>
        </td>
      </tr>
    );
  });

  if (listToRender.length < 1) {
    return (
      <tr className="search__results-table_row no__flights_tr">
        <td colSpan="7" className="search__results-table__data no__flights_tr">
          No flights :(
        </td>
      </tr>
    );
  }

  return listToRender;
};

SearchResults.propTypes = {
  getFlightListActionProp: PropTypes.func.isRequired,
  flightlist: PropTypes.array,
}

const mapDispatch = {
  getFlightListActionProp: getFlightListAction,
};

export default connect(null, mapDispatch)(SearchResults);
