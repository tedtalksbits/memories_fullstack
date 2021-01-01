import React, { useState } from 'react';
import List from '@material-ui/core/List';
import { Collapse, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import './Nav.css';

const Nav = () => {

   const [open, setOpen] = useState(true);

   const handleClick = () => {
      setOpen(!open);
   }
   return (
      <>
         <List
            component="nav"
            aria-labelledby="vert-nav"
            className="nav"
            subheader={
               <ListSubheader
                  component="div"
                  id="vert-nav"
               >
                  <h2>Memories</h2>
               </ListSubheader>
            }
         >
            <ListItem button>
               <ListItemIcon>
                  <HomeIcon />
               </ListItemIcon>
               <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
               <ListItemIcon>
                  <LoyaltyIcon />
               </ListItemIcon>
               <ListItemText primary="Memories" />
            </ListItem>

            <ListItem button>
               <ListItemIcon>
                  <PersonIcon />
               </ListItemIcon>
               <ListItemText primary="Profile" />
            </ListItem>

            <ListItem button onClick={handleClick}>
               <ListItemIcon>
                  <MoreHorizIcon />
               </ListItemIcon>
               <ListItemText primary="More" />
               {open ? <ExpandMore /> : <ExpandLess />}
            </ListItem>

            <Collapse in={!open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                  <ListItem button className="nested">
                     <ListItemIcon>
                        <SettingsIcon />
                     </ListItemIcon>
                     <ListItemText primary="Settings" />
                  </ListItem>
               </List>
            </Collapse>

         </List>
      </>
   )
}

export default Nav;
