import React from 'react';
import './App.css';
import { ButtonsBlock } from './components/ButtonsBlock/ButtonsBlock';
import { ValidateTicket } from './components/pages/ValidateTicket';

function App() {

  return (
    <div>
      <ButtonsBlock/>
    <ValidateTicket/>
    </div>
    
  );
}

export default App;