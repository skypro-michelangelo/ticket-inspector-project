import { api } from '../api/api';
import { checkTicketError, checkTicketLoader, checkTicketSuccess } from './actions/ticketAction';
import {  store } from './store';


export function checkTicketThunk(id: string) {
  store.dispatch(checkTicketLoader(true));

  api
    .checkTicket(id)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);

      store.dispatch(checkTicketSuccess(data));
      store.dispatch(checkTicketError(''));
    })
    .catch((error) => {
      store.dispatch(checkTicketError('Билет не найден'));
    })
    .finally(() => {
      store.dispatch(checkTicketLoader(false));
    });


}


