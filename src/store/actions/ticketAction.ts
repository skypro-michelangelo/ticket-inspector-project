import { TicketState } from '../reducers/ticketReducer';

export const CHECK_TICKET_SUCCESS = 'CHECK_TICKET_SUCCESS';
export const CHECK_TICKET_ERROR = 'CHECK_TICKET_ERROR';
export const CHECK_TICKET_LOADER = 'CHECK_TICKET_LOADER';

export function checkTicketSuccess(ticket: TicketState) {
  return {
    type: CHECK_TICKET_SUCCESS,
    payload: ticket,
  };
}

export function checkTicketError(error: string) {
  return {
    type: CHECK_TICKET_ERROR,
    payload: error,
  };
}

export function checkTicketLoader(loading: boolean) {
  return {
    type: CHECK_TICKET_LOADER,
    payload: loading,
  };
}

export type checkTicketSuccessType = ReturnType<typeof checkTicketSuccess>;
export type checkTicketErrorType = ReturnType<typeof checkTicketError>;
export type checkTicketLoaderType = ReturnType<typeof checkTicketLoader>;

export type RootAction = checkTicketSuccessType | checkTicketErrorType | checkTicketLoaderType;
