import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledScanner = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(67, 74, 220, 0.14)',
  borderRadius: '28px',
  width: '70%',
  height: '200px',
  marginTop: '30px',
  marginBottom: '30px',
}));
