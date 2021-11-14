import React from 'react';
import { FC } from 'react';
import {  useSelector } from 'react-redux';
import { ScreenError } from './ScreenError/ScreenError';
import { Text } from '../primitives/text/text';
import { ScreenSuccess } from './ScreenSuccess/ScreenSuccess';
import { RootState } from '../../store/store';
import { TicketState } from '../../store/reducers/ticketReducer';

export const ValidateTicket: FC = () => {
    const { ticket, error, loading} = useSelector<RootState>((state) => state.ticket) as TicketState

    console.log(ticket)

if (loading) {
    return <h1>Идет загрузка...</h1>
}

if (error) {
    return (
        <div>
           <ScreenError/>
            <Text>Ошибка!</Text>  
        </div>
       
    )
}


return (
    <div>
        {/*@ts-ignore*/}
        {ticket.ticket ? 
        <div>
        <ScreenSuccess/>
        <Text>
            Успешно! 
        </Text>
        </div>
        :
        null}
    </div>
    )
}
export default ValidateTicket
