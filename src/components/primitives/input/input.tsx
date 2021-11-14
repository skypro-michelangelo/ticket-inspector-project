import * as React from 'react';
import { FC } from 'react';
import { StyledInput } from './input.styles';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({onChange, children}) => {
  return (
    <div>
      <StyledInput placeholder="Номер билета" onChange={onChange}>{children}</StyledInput>
    </div>
      
  );
}
