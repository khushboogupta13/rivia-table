import { styled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(() => ({
    boxShadow: 2,
    backgroundColor: '#f4f4f9',
    fontFamily: 'Poppins',
    fontSize: '12.5px',
    fontWeight: 'bold',
    '.MuiDataGrid-iconButtonContainer': {
        visibility: 'visible',
    },
    '.MuiDataGrid-sortIcon': {
        opacity: 'inherit !important',
        color: 'white'
    },
}));

