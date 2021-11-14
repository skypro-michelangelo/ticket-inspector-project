import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledHeader = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(67, 74, 220, 0.14)',
  width: '100%',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  padding: '25px',
}));
