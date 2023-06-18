import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import './userTable.css';
import { api } from "../../apiConfig";
import { Button } from "../../styles/Button";
import { DataGridBox } from "../../styles/Box";
import { setUserInfo, deleteUserInfo } from '../../store/usersDataSlice';
import { StyledDataGrid } from "../../styles/DataGrid";

function UserTable(){
    
    const [deletedRows, setDeletedRows] = useState([]);
    const userInfo = useSelector((state) => state.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        api.get("/users")
        .then((response) => {
            dispatch(setUserInfo(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    //function to handle deletion of a particular row in the user table
    const handleRowDeletion = (e, id) => {
        e.stopPropagation();
        dispatch(deleteUserInfo(id));
        setDeletedRows([...deletedRows, id]);
    }

    //storing the deleted rows in local storage such that the rows remain deleted when moved back and forth between different pages
    useEffect(() => {
        const deletedRowsData = localStorage.getItem('deletedRows');
        if (deletedRowsData) {
            setDeletedRows(deletedRowsData);
        }
    }, []);
    
    //updating the local storage whenever a row is deleted i.e. deletedRows state changes
    useEffect(() => {
        localStorage.setItem('deletedRows', deletedRows);
    }, [deletedRows]);
    
    //function to navigate going to page of a particular user
    const openUserDetails = (e, userId) => {
        e.stopPropagation();
        navigate(`${userId}`);
    }
    
    //columns defining the user table and its parameters
    const columns = [
        {
            field: 'name',
            headerClassName: 'header_theme',
            headerName: 'Name',
            sortable: true,
            width: 150
        },
        {
            field: 'username',
            headerClassName: 'header_theme',
            headerName: 'Username',
            sortable: false,
            width: 120
        },
        {
            field: 'email',
            headerClassName: 'header_theme',
            headerName: 'Email',
            sortable: true,
            width: 220,
        },
        {
            field: 'address',
            headerClassName: 'header_theme',
            headerName: 'Address',
            sortable: false,
            width: 200,
            renderCell: (params) => (
                <div>
                    <p style={{fontWeight: 'normal'}}> {params.value.suite}, {params.value.street}</p>
                    <p> {params.value.city} </p>
                    <p style={{fontWeight: 'normal'}}> {params.value.zipcode}</p>
                </div>
            )
        },
        {
            field: 'phone',
            headerClassName: 'header_theme',
            headerName: 'Phone',
            sortable: false,
            width: 180,
        },
        {
            field: 'website',
            headerClassName: 'header_theme',
            headerName: 'Website',
            sortable: false,
            width: 130,
            headerAlign: 'center',
        },
        {
            field: 'company',
            headerClassName: 'header_theme',
            headerName: 'Company',
            sortable: false,
            width: 240,
            headerAlign: 'center',
            renderCell: (params) => (
                <div>
                    <p style={{textAlign: 'center'}}> {params.value.name}</p>
                    <p style={{fontWeight: 'normal'}}> {params.value.catchPhrase}</p>
                    <p style={{fontWeight: 'normal'}}> {params.value.bs}</p>
                </div>
            )
    
        },
        {
            field: 'id',
            headerClassName: 'header_theme',
            headerName: 'Actions',
            sortable: false,
            width: 200,
            headerAlign: 'center',
            renderCell: (params) => (
                <div style={{display: 'flex', verticalAlign: 'center', justifyContent: 'center'}}>
                    <div>
                        <Button 
                            variant="contained"
                            onClick={(e) => openUserDetails(e, params.id)}
                        > 
                            Open 
                        </Button>
                    </div>
                    <div>
                        <Button 
                            variant="contained"
                            onClick={(e) => handleRowDeletion(e, params.id)}
                        > 
                            Delete 
                        </Button>
                    </div>
                </div>
            )
        }
    ]

    //filter the deleted rows from the entire user data
    const filteredUserInfo = userInfo.filter((row) => !deletedRows.includes(row.id));
    
    return(
        <div className="overall-layout">
            <DataGridBox>
                <StyledDataGrid
                    rows={filteredUserInfo}
                    columns={columns}
                    initialState={{
                        pagination: {
                                paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[2, 3, 5]}
                    getRowId={(row) => row.id}
                    getRowHeight={() => 'auto'} 
                />
            </DataGridBox>
        </div>
    );
}

export default UserTable;