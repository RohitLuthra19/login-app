import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import './style.css';

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiInputAdornment-root.MuiInputAdornment-positionStart' : {
    marginTop: '0px !important'
  },
  '& .MuiInputLabel-root' : {
    left: '34px',
    color: 'rgba(0, 0, 0, 0.4)',
    '&.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.3)',
    },
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1' ,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'transparent',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:before': {
      border: 'none'
    },
    '&:after': {
      border: 'none'
    },
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&:hover:not(.Mui-disabled):before' :{
      borderBottom: 'none',
      border: 'none'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      borderColor: '#000',
    },
  },
}));

export default RedditTextField