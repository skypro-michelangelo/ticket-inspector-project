import * as React from 'react';
import { FC } from 'react';
import { StyledContainer } from './Container.styles';


export const Container: FC = ({children}) => {
  return (
    <div>
      <StyledContainer>{children}</StyledContainer>
    </div>
  );
}

