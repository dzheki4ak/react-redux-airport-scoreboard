import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FlightSearch from './components/FlightSearch/FlightSearch.jsx';

const App = () => (
    <Provider store={store}>
      <FlightSearch />
    </Provider>
  );

export default App;
