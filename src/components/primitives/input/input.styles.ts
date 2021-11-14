import * as React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: 'rgba(67, 74, 220, 0.14)',
  borderRadius: '8px',
  width: '70vw',
  height: '50px',
  textAlign: 'center',
  marginBottom: '40px',
  marginTop: '40px',
}));
