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

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: '100%',
    minHeight: '100vh',
    background: theme.palette.primary.dark,
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
      background: theme.palette.primary.dark,
      color: '#dde2ff',
      borderLeft: '3px solid #dde2ff',
    },
  },
  listItemIcon: {
    color: '#a4a6b3 !important',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const icons = [
    {
      id: 1,
      title: 'Overview',
      icon: <PieChartIcon className="material-icons"></PieChartIcon>,
      url: '/',
    },
    {
      id: 2,
      title: 'Tickets',
      icon: (
        <ConfirmationNumberIcon className="material-icons"></ConfirmationNumberIcon>
      ),
      url: '/',
    },
    {
      id: 3,
      title: 'Ideas',
      icon: <LightbulbIcon className="material-icons"></LightbulbIcon>,
      url: '/',
    },
    {
      id: 4,
      title: 'Users',
      icon: <PersonIcon className="material-icons"></PersonIcon>,
      url: '/users',
    },
  ];

  return (
    <Box className={classes.sidebar}>
      <Link href="/" title="Userpilot" className={classes.sidebarLogo}>
        <img src={logo} alt="Userpilot" className={classes.sidebarLogoImg} />
      </Link>
      <List>
        {icons.map((item,index) => (
          <ListItem key={item['id']} disablePadding>
            <ListItemButton className={classes.listItemButton} selected={index === 3}>
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
