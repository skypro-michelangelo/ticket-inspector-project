import * as React from 'react';
import { FC } from 'react';
import { StyledHeader } from './Header.styles';


export const Header: FC = ({children}) => {
  return (
    <div>
      <StyledHeader>{children}</StyledHeader>
    </div>
  );
}

