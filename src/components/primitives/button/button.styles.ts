import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#434ADC',
  color: theme.palette.primary.contrastText,
  borderRadius: '8px',
  fontSize: '10px',
}));
