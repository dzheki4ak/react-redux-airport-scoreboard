import React from 'react';
import { connect } from 'react-redux';
import './NavButtons.scss';
import {
  switchActiveTabDepAction,
  switchActiveTabArrAction,
} from '../../features/flight.actions';

import {
  arriveTabSelector,
  departTabSelector,
} from '../../features/flight.selectors';

const NavButtons = ({
  arrivalsActive,
  departuresActive,
  arrActiveTab,
  depActiveTab,
}) => (
  <div className="nav__tabs-container">
    <div className="nav__tabs-block">
      <a
        onClick={arrivalsActive}
        className={`nav__tabs-link arrivals ${arrActiveTab && 'active-arr'}`}
        href="#"
      >
        <span className="fa fa-plane land" aria-hidden="true"></span>
        {` arrivals`}
      </a>
      <a
        onClick={departuresActive}
        className={`nav__tabs-link departures ${depActiveTab && 'active-dep'}`}
        href="#"
      >
        {`departures `}
        <span className="fa fa-plane" aria-hidden="true"></span>
      </a>
    </div>
  </div>
);

const mapDispatch = {
  arrivalsActive: switchActiveTabArrAction,
  departuresActive: switchActiveTabDepAction,
};

const mapState = state => ({
  arrActiveTab: arriveTabSelector(state),
  depActiveTab: departTabSelector(state),
});

export default connect(mapState, mapDispatch)(NavButtons);
