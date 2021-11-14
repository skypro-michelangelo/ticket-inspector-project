import * as React from 'react';
import { FC } from 'react';
import { StyledScreenError } from './ScreenError.styles';
import error from '../../images/error.svg'
import { Header } from '../../primitives/Header/Header';
import { Title } from '../../primitives/title/title';
import { ButtonBack } from '../../primitives/buttonBack/buttonBack';

export const ScreenError: FC = () => {
  return (
    <div>
       <Header>
         <ButtonBack/> 
        <Title/>       
      </Header>
      <StyledScreenError>
        <img src={error} alt={error} width="200px" height="100vh"/>
      </StyledScreenError>
    </div>
      
  );
}