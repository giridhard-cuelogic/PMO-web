import React, { Component } from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
//import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import SelectComponent from './SelectComponent';
import './common.scss';
import './user.scss';



class User extends Component {  
    render(){
        return(
            <div className="wrapper">
                <Header />               
                <div className="title-row">
                    <Grid container>
                        <Grid item xs={12} sm={6} md={8}>
                            <div className="title">
                                <h2>All User</h2>
                            </div>  
                        </Grid>      
                        <Grid item container xs={12} sm={6} md={4}>    
                            <div className="controls-div">
                                <Grid item  xs={12} sm={6} md={5}>
                                    <SelectComponent />
                                </Grid>    
                                <Grid item  xs={12} sm={6} md={5}>
                                    <SelectComponent />
                                </Grid>    
                                <Grid item  xs={12} sm={6} md={5}>
                                    <Button variant="contained" className="btn btn-search"> 
                                           <SearchIcon />
                                    </Button>
                                </Grid>  
                            </div>   
                        </Grid>
                    </Grid>                    
                </div>
                    
                

            </div>    
        )
    }
}
export default User;