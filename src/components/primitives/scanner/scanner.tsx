import * as React from 'react';
import { FC } from 'react';
import { StyledScanner } from './scanner.styles';


export const Scanner: FC = ({children}) => {
  return (
    <div>
      <StyledScanner>{children}</StyledScanner>
    </div>
      
  );
}
