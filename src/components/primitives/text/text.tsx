import * as React from 'react';
import { FC } from 'react';
import { StyledText } from './text.styles';


export const Text: FC = ({children}) => {
  return (
    <StyledText variant="h5">{children}</StyledText>     
  );
}
