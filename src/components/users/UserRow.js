import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { format } from 'date-fns';
import UserHead from './UserHead';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  clickableCell: {
    cursor: 'pointer',
  },
  TableRow: {
    '&:hover': {
      background: theme.palette.primary.light,
    },
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

const UserRow = (props) => {
  const { user } = props;
  const classes = useStyles();
  const date = new Date(user['registered']['date']);
  const id = user['id']['value'];

  const onRowClick = () => {
    if (props.onClick) {
      props.onClick(user);
    }
  };

  return (
    <React.Fragment key={id}>
      <TableRow className={classes.TableRow} key={id}>
        <TableCell
          data-name="User"
          className={classes.clickableCell}
          onClick={onRowClick}
        >
          <UserHead user={user} />
        </TableCell>
        <TableCell
          data-name="Contact Information"
          className={classes.clickableCell}
          onClick={onRowClick}
        >
          <div className={classes.tableTitle}>{user['email']}</div>
          <div className={classes.tableDesc}>{user['phone']}</div>
        </TableCell>
        <TableCell
          data-name="Registration Date"
          className={classes.clickableCell}
          onClick={onRowClick}
        >
          <div className={classes.tableTitle}>{format(date, 'PP')}</div>
          <div className={classes.tableDesc}>{format(date, 'p')}</div>
        </TableCell>
        <TableCell
          data-name="Country/Post Code"
          className={classes.clickableCell}
          onClick={onRowClick}
        >
          <div className={classes.tableTitle}>
            {user['location']['country']}
          </div>
          <div className={classes.tableDesc}>
            {user['location']['postcode']}
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default UserRow;
