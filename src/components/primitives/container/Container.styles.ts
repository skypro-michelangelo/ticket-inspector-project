import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));
