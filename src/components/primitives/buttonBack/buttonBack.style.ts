import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

export const StyledIcon = styled(ArrowBackIcon)(({ theme }) => ({
  color: '#0085FF',
  fontSize: '50px',
}));

export const StyledButtonBack = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(67, 74, 220, 0.14)',
}));
