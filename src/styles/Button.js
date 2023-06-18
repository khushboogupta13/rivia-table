import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(() => ({
    
    backgroundColor: '#9984d4',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    fontFamily: 'Poppins',
    '&:hover' : {
        backgroundColor: '#a663cc'
    }

}));