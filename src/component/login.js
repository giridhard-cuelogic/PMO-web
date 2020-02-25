import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import './login.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class Login extends React.Component {
    state={checked:true}

    handleChange = event => {
        this.setState({checked: event.target.checked});
    };

    preventDefault = event => event.preventDefault();

    render() {
        return (
              <div className="login-wrapper">
                 <Grid container  spacing={2} className="container">
                    <Grid item xs={12}>
                        <div className="login-header">

                        </div>
                    </Grid>
                </Grid> 
                <Grid container className="container section-2">   
                    <Grid item xs={12} sm={6}>
                        <div className="content">
                          <h2>Please login with your PMO credentials. </h2>                                
                            <p>If you have any queries on the login process please contact your HR or line Manager</p>                             
                        </div>                       
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div className="loginform-wrapper">
                            <div className="loginform-inner-wrapper">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <h2>Login</h2>
                                    </Grid>                                       
                                    <form noValidate autoComplete="off">
                                        <Grid item xs={12}> 
                                            <TextField id="standard-basic" label="Email Id" variant="filled"/>
                                        </Grid>
                                        <Grid item xs={12}>    
                                            <TextField id="standard-basic" label="Password" variant="filled"/>   
                                        </Grid>   
                                        <Grid container item xs={12}> 
                                            <Grid item xs={6}>                                             
                                                <FormGroup row>
                                                    <FormControlLabel control={<Checkbox checked={this.state.checked} onChange={this.handleChange} value="checkedA" /> }
                                                        label="Remember Me"
                                                    />
                                                </FormGroup>    
                                            </Grid> 
                                            <Grid item xs={6}>                                             
                                                <Link href="#" onClick={this.preventDefault}>
                                                   Forgot Password
                                                </Link>
                                            </Grid> 
                                        </Grid>    
                                    </form>  

                                    <Grid item xs={12}>
                                        <Button variant="contained" className="loginBtn"> 
                                            Login
                                        </Button>    
                                    </Grid>                                         
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>    
              </div>  
        )
    }
}

export default Login;