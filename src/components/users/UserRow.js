import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { format } from 'date-fns';
import UserHead from './UserHead';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  clickableCell: {
    cursor: 'pointer',
  },
  sidePopup: {
    cursor: 'pointer',
  },
  tableTitle: {
    fontSize: theme.title.fontSize,
    color: theme.title.color,
    fontWeight: theme.title.fontWeight,
  },
  tableDesc: {
    fontSize: theme.desc.fontSize,
    color: theme.desc.color,
    fontWeight: theme.desc.fontWeight,
    marginTop: theme.desc.marginTop,
  },
}));

const UserRow = (userData) => {
  const classes = useStyles();
  const user = userData.user;
  const date = new Date(user['registered']['date']);
  const id = user['id']['value'];
  const [openPopup, setOpenPopup] = React.useState(false);

  const toggleDrawer = (event) => () => {
    setOpenPopup(event);
  };

  return (
    <React.Fragment key={id}>
      <TableRow key={id}>
        <TableCell
          data-name="User"
          className={classes.clickableCell}
          onClick={toggleDrawer(true)}
        >
          <UserHead user={user} />
        </TableCell>
        <TableCell
          data-name="Contact Information"
          className={classes.clickableCell}
          onClick={toggleDrawer(true)}
        >
          <div className={classes.tableTitle}>{user['email']}</div>
          <div className={classes.tableDesc}>{user['phone']}</div>
        </TableCell>
        <TableCell
          data-name="Registration Date"
          className={classes.clickableCell}
          onClick={toggleDrawer(true)}
        >
          <div className={classes.tableTitle}>{format(date, 'PP')}</div>
          <div className={classes.tableDesc}>{format(date, 'p')}</div>
        </TableCell>
        <TableCell
          data-name="Country/Post Code"
          className={classes.clickableCell}
          onClick={toggleDrawer(true)}
        >
          <div className={classes.tableTitle}>{user['location']['country']}</div>
          <div className={classes.tableDesc}>{user['location']['postcode']}</div>
        </TableCell>
      </TableRow>
      <Drawer
        anchor={'right'}
        open={openPopup}
        onClose={toggleDrawer(false)}
        className={classes.sidePopup}
      >
        <UserHead user={user} extraProps="design2" />
      </Drawer>
    </React.Fragment>
  );
};

export default UserRow;
