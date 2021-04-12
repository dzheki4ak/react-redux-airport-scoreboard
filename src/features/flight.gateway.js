import moment from 'moment';

export const fetchFlightsList = () =>
  fetch(
    `${'https://api.iev.aero/api/flights'}/${moment().format('DD-MM-YYYY')}`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => alert(error));
