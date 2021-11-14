import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledButtonsBlock = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(67, 74, 220, 0.14)',
  borderRadius: '12px',
  display: 'flex',
  margin: '20px',
  width: '90%',
}));
