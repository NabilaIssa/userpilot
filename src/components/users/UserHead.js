import React from 'react';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  flexWrapper: {
    display: 'flex',
  },
  sidePopup: {},
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

const UserHead = (userData, customDesign = null) => {
  const classes = useStyles();
  const user = userData.user;
  const getFullName = (name) => {
    return name['first'] + ' ' + name['last'];
  };

  const getFullAddress = (location) => {
    return (
      location['street']['number'] +
      ' ' +
      location['street']['name'] +
      '. ' +
      location['city'] +
      ', ' +
      location['state']
    );
  };

  const fullName = getFullName(user['name']);
  const fullAddress = getFullAddress(user['location']);
  return (
    <div className={customDesign ? classes.blockWrapper : classes.flexWrapper}>
      <Avatar
        className={customDesign ? classes.bigAvatar : ''}
        src={
          customDesign
            ? user['picture']['thumbnail']
            : user['picture']['medium']
        }
        alt={fullName}
      />
      <div className="table-content">
        <div className={classes.tableTitle}>{fullName}</div>
        <div className={classes.tableDesc}>{fullAddress}</div>
      </div>
    </div>
  );
};

export default UserHead;
