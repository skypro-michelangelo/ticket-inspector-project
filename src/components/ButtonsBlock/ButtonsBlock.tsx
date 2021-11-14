import * as React from 'react';
import { useState } from 'react';
import { CheckByNumber } from '../pages/CheckByNumber/CheckByNumber';
import { CheckByQrCode } from '../pages/CheckByQrCode/CheckByQrCode';
import { Button } from '../primitives/button/button';
import { Container } from '../primitives/container/Container';
import { Header } from '../primitives/Header/Header';
import { Title } from '../primitives/title/title';
import { StyledButtonsBlock } from './ButtonsBlock.styles';

export const ButtonsBlock = () => {

  let [screen, screenState] = useState(true)

//@ts-ignore
  function RenderScreen({screen}) {
    if (screen) {
    return <CheckByQrCode/>;
  }
  return <CheckByNumber/>;
  }

  const clickQrHandle = () => {
    screenState(true)
  };

  const clickNumberHandle = () => {
    screenState(false)
  
  };
  
  return (
    <div>
      <Header>
        <Title/>
      </Header>
      <StyledButtonsBlock>
        <Button onClick={clickQrHandle}>Сканировать QR-код</Button>
        <Button onClick={clickNumberHandle}>Проверить по номеру</Button>
    </StyledButtonsBlock>
    <Container> 
    <RenderScreen screen={screen}/>
    </Container> 
    </div>          
  );
}

