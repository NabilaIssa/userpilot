import React from 'react';
import logo from '../images/logo.png';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sidebar: {
    height: '100%',
    minHeight: '100vh',
    background: '#363740',
  },
  sidebarLogo: {
    display: 'block',
    padding: '40px',
  },
  sidebarLogoImg: {
    display: 'block',
    margin: '0 auto',
  },
  listItemButton: {
    color: '#a4a6b3 !important',
    '&.Mui-selected': {
      background: '#3e4049',
      color: '#dde2ff',
      borderLeft: '3px solid #dde2ff',
    },
  },
  listItemIcon: {
    color: '#a4a6b3 !important',
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const icons = [
    {
      id: 1,
      title: 'Overview',
      icon: <PieChartIcon className="material-icons"></PieChartIcon>,
    },
    {
      id: 2,
      title: 'Tickets',
      icon: (
        <ConfirmationNumberIcon className="material-icons"></ConfirmationNumberIcon>
      ),
    },
    {
      id: 3,
      title: 'Ideas',
      icon: <LightbulbIcon className="material-icons"></LightbulbIcon>,
    },
    {
      id: 4,
      title: 'Users',
      icon: <PersonIcon className="material-icons"></PersonIcon>,
    },
  ];

  return (
    <Box className={classes.sidebar}>
      <Link href="/" title="Userpilot" className={classes.sidebarLogo}>
        <img src={logo} alt="Userpilot" className={classes.sidebarLogoImg} />
      </Link>
      <List>
        {icons.map((item) => (
          <ListItem key={item['id']} disablePadding>
            <ListItemButton className={classes.listItemButton} selected>
              <ListItemIcon className={classes.listItemIcon}>
                {item['icon']}
              </ListItemIcon>
              <ListItemText primary={item['title']} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
