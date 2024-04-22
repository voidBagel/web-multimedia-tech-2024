import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

class ProfileDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
    };
  }
  signOut = () => {
    //ask for confirmation if yes, then sign out
    const confirmSignOut = window.confirm('Are you sure you want to sign out?');
    if (confirmSignOut) {
    localStorage.removeItem('token');
    window.location.href = '/';
    }
  }
  toggleDrawer = (anchor, open) => () => {
    this.setState({ [anchor]: open });
  };

  render() {
    const { right } = this.state;
    const token = localStorage.getItem('token');

    if (token === null) {
      return (
        <Avatar
          onClick={() => window.location.href = '/sign-in'}
        />
      );
    } else {
      return (
        <div>
          <Avatar
            className="profileIcon"
            
            onClick={(event) => {
              event.stopPropagation(); // Prevent event propagation
              this.toggleDrawer('right', true)(); // Open the drawer on avatar click
            }}
          />
          <Drawer
            anchor="right"
            open={right}
            onClose={this.toggleDrawer('right', false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={this.toggleDrawer('right', false)}
              onKeyDown={this.toggleDrawer('right', false)}
            >
              <List>
                <ListItem key={'MyProfile'} disablePadding>
                  <Link to={'/my'}>
                    <ListItemButton>
                      <ListItemText primary='My Profile' />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem key={'Add a book'} disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Add a book' />
                  </ListItemButton>
                </ListItem>
                <ListItem key={'Sign out'} disablePadding onClick={this.signOut}>
                  <ListItemButton>
                    <ListItemText primary='Sign out'/>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </div>
      );
    }
  }
}

export default ProfileDrawer;
