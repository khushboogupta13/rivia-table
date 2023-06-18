import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Grid } from "@mui/material";

import './userDetails.css';
import { api } from "../../apiConfig";
import { UserDetailsBox } from "../../styles/Box";


function UserDetails(){
    
    const [currentUserInfo, setCurrentUserInfo] = useState(null);
    const location = useLocation();
    const userId = location.pathname;

    useEffect(() => {
        api.get("/users" + userId)
        .then((response) => {
            setCurrentUserInfo(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    });
    
    return(
        <div className="overall-layout">
            <UserDetailsBox>
                <div className="section-header">
                    {currentUserInfo?.name}
                </div>
                
                <div className="section-content">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div>

                                <div className="property-box">
                                    <p className="property-heading"> Username: </p>
                                    <p> {currentUserInfo?.username} </p>
                                </div>

                                <div className="property-box">
                                    <p className="property-heading"> Phone: </p>
                                    <p> {currentUserInfo?.phone} </p>
                                </div>

                                <div className="property-box">
                                    <p className="property-heading"> Address: </p>
                                    <p> {currentUserInfo?.address.suite}, {currentUserInfo?.address.street} </p>
                                    <p> {currentUserInfo?.address.city} ({currentUserInfo?.address.zipcode}) </p>
                                    <p> Lat: {currentUserInfo?.address.geo.lat}, Long: {currentUserInfo?.address.geo.lng} </p>
                                </div>
                                
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <div className="property-box">
                                    <p className="property-heading"> Email: </p>
                                    <p> {currentUserInfo?.email} </p>
                                </div>

                                <div className="property-box">
                                    <p className="property-heading"> Website: </p>
                                    <p> {currentUserInfo?.website}  </p>
                                </div>

                                <div className="property-box">
                                    <p className="property-heading"> Company: </p>
                                    <p> {currentUserInfo?.company.name}  </p>
                                    <p> "{currentUserInfo?.company.catchPhrase}" </p>
                                    <p> {currentUserInfo?.company.bs} </p>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </UserDetailsBox>
        </div>
    )
}

export default UserDetails;