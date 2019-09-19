import React from 'react';
import {connect} from "react-redux";
import s from './Header.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { getIsVisibleNavState } from '../../redux/selects/selectorCommon';
import { toggleNavVisible } from './../../redux/reducers/reducer-common';
import Divider from '@material-ui/core/Divider';
import { ListItem, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { ListItemIcon } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';

let Header = (props) => {

    let handleDrawerOpen = () => {
        props.toggleNavVisible(true);
    }

    let handleDrawerClose = () => {
        props.toggleNavVisible(false);
    }

    return (
        <>
            <div className={`${s.header} ${props.isVisibleNav ? s.openNav : s.closeNav}`}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        { !props.isVisibleNav &&
                            <IconButton 
                                    edge="start" 
                                    color="inherit" 
                                    aria-label="menu"
                                    onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        }
                        <Typography variant="h6" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>    
            <Drawer
                className={s.navigator}
                variant="persistent"
                anchor="left"
                open={props.isVisibleNav}
            >
                 <div className={s.navigatorHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                   {['Profile', 'Tasks'].map((text, index) => (
                       <Link to={text} key={text}>
                            <ListItem button >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                       </Link>
                   ))}  
                </List>
            </Drawer>
            
        </>
    );
}

let mapStateToProps = (state) => {
    return {
      isVisibleNav: getIsVisibleNavState(state)
    }
  }
export default connect(mapStateToProps, { toggleNavVisible })(Header);