import { AppBar, Box, Toolbar, IconButton, Typography, Tab, Tabs, Badge, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
           
          <Typography component="H1">
            BRAIDS FAIRY
          </Typography>
          <Tabs>
            <Tab 
              key={0}
              label={'Home'}
              component={Link}
            />
            <Tab 
              key={1}
              label={'About'}
              component={Link}
            />
            <Tab 
              key={2}
              label={'Book'}
              component={Link}
            />
            <Tab 
              key={3}
              label={'Gallery'}
              component={Link}
            />
            <Tab 
              key={4}
              label={'Gift Card'}
              component={Link}
            />
          </Tabs>
          <Box>
            <IconButton size='small' component={Link} to={'/search'} color='inherit' edge='start'>
              <SearchIcon />
            </IconButton>

            <IconButton size='small' component={Link} to={'/notifications'} color='inherit' edge='start'>
              <Badge color='error' overlap='circle' variant='dot'>
               <NotificationsNoneIcon />
              </Badge>
            </IconButton>

            <IconButton size='small' component={Link} to={'/search'} color='inherit' edge='start'>
              <SearchIcon />
            </IconButton>

          </Box>
 
        </Toolbar>
</AppBar>
    </Box>
   
  )
}
