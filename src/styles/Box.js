import { styled } from "@mui/system";
import MuiBox from "@mui/material/Box";

export const DataGridBox = styled(MuiBox)(() => ({
    
    height: 'auto', 
    width: '100%',
    '& .header_theme': {
        backgroundColor: '#8367c7',
        fontSize: '18px',
        color: '#ffffff'
    },

}));

export const UserDetailsBox = styled(MuiBox)(() => ({
    backgroundColor: '#f4f4f9',
    width: '70%',
    height: 'auto',
    borderRadius: '20px',
}));
