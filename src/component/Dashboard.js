import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//import MenuIcon from '@material-ui/icons/Menu';
import Header from './Header';
import Countinfo from './Countinfo';
import Button from '@material-ui/core/Button';
import './dashboard.scss';


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <Header />
                <div className="count-info-section ">  
                    <Grid container  spacing={2} className="container">                  
                        <Countinfo></Countinfo>
                        <Countinfo></Countinfo>
                        <Countinfo></Countinfo>
                        <Countinfo></Countinfo>
                        <Countinfo></Countinfo>     
                    </Grid>                                      
                </div>
                <div className="dashboard-inner-wraper">                  
                    <Grid container  spacing={2} className="container">
                        <Grid container item xs={12} sm={12} md={7} spacing={0} className="left-section">
                            <Grid item xs={12} className="top-section">                                    
                                <div className="heding-content">
                                    <h2>Avg. Global Score</h2>
                                    
                                </div>
                                <div className="pichart-row">

                                </div>
                                <div className="title">
                                    <h2>Corporate Services Score Breakdown</h2>
                                </div>
                                <div className="pichart-row">

                                </div>
                            </Grid>
                            <Grid item xs={12} className="bottom-section">                                    
                                <div className="heding-content">
                                    <h2>Notifications</h2>
                                    <Button variant="contained" className="loginBtn"> 
                                        Create-new
                                    </Button> 
                                </div>
                                <div className="listrow">

                                </div>
                                
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} className="right-section">
                            <div className="heding-content">
                                <h2>Missions</h2>                                
                            </div>
                            
                        </Grid>
                    </Grid>                   
                </div>
            </div> 
        );
    }
}

export default Dashboard;