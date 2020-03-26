import React, { Component } from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import SelectComponent from './SelectComponent';
import Tablelist from './list';
import './common.scss';
import './user.scss';
import Checklist from './Checklist';

class Notification extends Component {  
    render(){
        return(
            <div className="wrapper">
                <Header />               
               
                <Grid container className="container">
                    <div className="title-row">
                        <Grid item xs={12} sm={6} md={8}>
                            <div className="title">
                                <h2>Notification</h2>
                            </div>  
                        </Grid>      
                        <Grid item containe xs={12} sm={6} md={4}>    
                            <div className="controls-div"> 
                                <Grid item  xs={12} sm={6} md={1}>
                                    <Button variant="contained" className="btn"> 
                                        Create New
                                    </Button>
                                </Grid>  
                            </div>   
                        </Grid>
                    </div>    
                </Grid>                    
                <Grid container className="container">
                    <div className="user-wrapper">
                        <Checklist />
                    </div>
                    
                </Grid>     
            </div>    
        )
    }
}
export default Notification;



