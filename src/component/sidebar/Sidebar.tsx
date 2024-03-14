import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { Box , Typography} from '@mui/material';

interface SidebarItem {
  text: string;
  path: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  { text: 'Inbox', path: '/inbox', icon: <InboxIcon /> },
  { text: 'Mail', path: '/mail', icon: <MailIcon /> },
  // Add more items as needed
];
const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box
        sx={{ width: 250, paddingTop: '10px' }}
        role="presentation"
      >
        <Typography variant="h6" noWrap component="div" sx={{ paddingLeft: '10px' }}>
          Sidebar Title
        </Typography>
        <List>
          {sidebarItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
