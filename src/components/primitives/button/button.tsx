import * as React from 'react';
import { FC } from 'react';
import { StyledButton } from './button.styles';

type Props = {
   onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export const Button: FC<Props> = ({onClick, children}) => {
  return (
    <div>
      <StyledButton variant='contained' onClick={onClick}>{children}</StyledButton>
    </div>
      
  );
}
