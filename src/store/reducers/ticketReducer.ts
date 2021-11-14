import { CHECK_TICKET_ERROR, CHECK_TICKET_LOADER, CHECK_TICKET_SUCCESS, RootAction } from '../actions/ticketAction';

const initialState: TicketState = {
  ticket: {},
  loading: false,
  error: '',
};

export type TicketState = {
  ticket: {};
  loading: boolean;
  error: string;
};

export type Ticket = {
  ticket: {};
  event: {};
};

export type TicketType = {
  id: string;
  first_name: string;
  second_name: string;
};
export const ticketReducer = (state = initialState, action: RootAction) => {
  switch (action.type) {
    case CHECK_TICKET_SUCCESS:
      return { ...state, ticket: action.payload };
    case CHECK_TICKET_ERROR:
      return { ...state, error: action.payload };
    case CHECK_TICKET_LOADER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
