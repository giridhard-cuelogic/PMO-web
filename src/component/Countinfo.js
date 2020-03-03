import React, { Component } from 'react';
import "./countinfo.scss";
import Grid from '@material-ui/core/Grid';

class Countinfo extends Component {
    render() {
        return (
            <Grid item xs={12} sm={6} md={3}>
                <div className="countinfo">
                 
                    <p>Total Members</p>
                    <h2>345</h2>                
                </div>
            </Grid>
        );
    }
}

export default Countinfo;