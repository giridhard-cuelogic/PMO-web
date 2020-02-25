import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//import MenuIcon from '@material-ui/icons/Menu';
import Header from './Header';
import Countinfo from './Countinfo';
import './dashboard.scss';


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <Header />
                <div className="count-info-section ">                   
                    <Countinfo></Countinfo>
                    <Countinfo></Countinfo>
                    <Countinfo></Countinfo>
                    <Countinfo></Countinfo>
                    <Countinfo></Countinfo>                                       
                </div>
                <div className="dashboard-inner-wraper container">
                    
                    <div className="left-section">
                        <div className="top-section"></div>
                        <div className="bottom-section"></div>
                    </div>
                    <div className="right-section"></div>
                </div>
            </div> 
        );
    }
}

export default Dashboard;