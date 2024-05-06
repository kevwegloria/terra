import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/Bizedge_ORIGINAL.png';
import Box from '@mui/material/Box';

function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: '9999' }}>
      <Toolbar sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '9em',
        paddingTop: '1em',
        '@media (max-width: 768px)': {
          display: 'flex',
          justifyContent: 'space-between',

        }


      }}>
        <Box sx={{



        }} >
          <img
            src={logo}
            alt='logo'
            className='logo' />
        </Box>

        <Box sx={{


        }}>
          <Hidden mdUp >
            <IconButton
              size="large"
              edge="start"
              color="#323232"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
            </Menu>
          </Hidden>

          <Hidden smDown>
            <Button sx={{
              ml: 6,
              mr: 5,
              textTransform: 'none',
              fontFamily: 'blacksansbold',
              color: '#171717',
              fontSize: '14px'
            }}>Home</Button>
            <Button sx={{
              mr: 5,
              textTransform: 'none',
              fontFamily: 'blacksans',
              fontWeight: 'bold',
              color: '#171717',
              fontSize: '14px'
            }}>Request a Demo</Button>
            <Button sx={{
              textTransform: 'none',
              fontFamily: 'blacksans',
              fontWeight: 'bold',
              color: '#2898A4',
              fontSize: '14px',
              padding: '8px 35px',
              backgroundColor: 'white'
            }} >Sign In</Button>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
