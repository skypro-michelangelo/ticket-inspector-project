import * as React from 'react';
import { FC } from 'react';
import { ButtonsBlock } from '../../ButtonsBlock/ButtonsBlock';
import { StyledButtonBack, StyledIcon } from './buttonBack.style';


export const ButtonBack: FC = () => {
const backHandle = () => {
  return <ButtonsBlock/>
}

  return (
    <div>
      <StyledButtonBack variant="text" onClick={backHandle}><StyledIcon/></StyledButtonBack>
    </div>
      
  );
}
