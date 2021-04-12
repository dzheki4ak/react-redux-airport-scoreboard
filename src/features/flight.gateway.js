import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';

const today = moment().format('DD-MM-YYYY');

export const fetchFlightsList = () =>
  fetch(`${baseUrl}/${today}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => alert(error));
