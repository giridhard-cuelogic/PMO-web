import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
//import MenuIcon from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';
// import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import logo from '../asets/logo.png';
import './Header.scss';


class Header extends Component {  
    constructor(props) {
        super(props);
        this.state={open:false,
      }
        this.anchorRef = React.createRef(null);
        this.prevOpen = React.createRef(false);
      }
   
    handleToggle = () => {       
        this.setState( {open:!this.state.open});
    };
    handleClose = event => {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return;
        }

        this.setState( {open:false});
    };

    handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          this.setState( {open:false});
        }
      }
    
      //return focus to the button when we transitioned from !open -> open


      componentDidUpdate() {
        if (this.prevOpen.current === true && this.state.open === false) {
            this.anchorRef.current.focus();
          }
      
          this.prevOpen.current = this.state.open;
      }

    render() {
        return (
            <div className ="header-wrapper">
               <AppBar position="static">
                    <Toolbar className="tootbar-wrapper">
                        
                        <div className="logo-wrapper">
                            {/* <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Typography variant="h6">
                                    <img src={logo}></img>
                            </Typography>
                        </div>                       
                        <div className="right-menu">
                            <Button><SearchIcon></SearchIcon>  </Button>
                            <Button><NotificationsIcon></NotificationsIcon>  </Button>
                            <Button><SettingsIcon></SettingsIcon>  </Button>
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}                            
                            <div>
                                <Button
                                ref={this.anchorRef}
                                aria-controls={this.state.open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                                className="ProfileBtn"
                                >
                                <Avatar ClassName="profile-icon"></Avatar>   
                                <span className="Profile-name">abdelkader</span>
                                <ExpandMoreIcon></ExpandMoreIcon>
                                </Button>
                                <Popper open={this.state.open} anchorEl={this.anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList autoFocusItem={this.state.open} id="menu-list-grow" onKeyDown={this.handleListKeyDown}>
                                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                    </Grow>
                                )}
                                </Popper>
                            </div>
                        </div> 
                    </Toolbar>
                </AppBar>
                <div className="MainMenu">
                    <ul>
                        <li><a className="active">Dashboard</a></li>
                        <li><a>Users</a></li>
                        <li><a>Missions</a></li>
                        <li><a>Reports</a></li>
                        <li><a>Delegation</a></li>
                        <li><a>Activity</a></li>      
                     </ul>
                </div>
            </div>    
        );
    }
}
export default Header;