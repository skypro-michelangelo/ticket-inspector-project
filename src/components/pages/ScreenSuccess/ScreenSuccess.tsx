import React from 'react';
import { FC } from 'react';
import { StyledScreenSuccess } from './ScreenSuccess.styles';
import success from '../../images/success.svg'
import { ButtonBack } from '../../primitives/buttonBack/buttonBack';
import { Header } from '../../primitives/Header/Header';
import { Title } from '../../primitives/title/title';


export const ScreenSuccess: FC = () => {
  return (
    <div>
      <Header>
        <ButtonBack/>
        <Title/>        
      </Header>
      <StyledScreenSuccess>
        <img src={success} alt={success} width="200px" height="100vh"/>
      </StyledScreenSuccess>
    </div>
      
  );
}
