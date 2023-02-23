import React from 'react';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  flexWrapper: {
    display: 'flex',
  },
  blockWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    position: 'relative',
    zIndex: '1',
    '&:after': {
      content: '""',
      background: theme.palette.secondary.main,
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      height: '100px',
      zIndex: '-1',
    },
  },
  bigAvatar: {
    width: '128px !important',
    height: '128px !important',
  },
  flexContent: {
    marginLeft: '15px',
  },
  blockContent: {
    marginTop: '15px',
    textAlign: 'center',
  },
  sidePopup: {},
  tableTitle: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.title.fontSize,
    color: theme.title.color,
    fontWeight: theme.title.fontWeight,
  },
  tableDesc: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.desc.fontSize,
    color: theme.desc.color,
    fontWeight: theme.desc.fontWeight,
    marginTop: theme.desc.marginTop,
  },
}));

const UserHead = (props) => {
  const { user: userData, design } = props;
  const classes = useStyles();
  const user = userData;
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
    <div
      className={
        design === 'popupDesign' ? classes.blockWrapper : classes.flexWrapper
      }
    >
      <Avatar
        className={design === 'popupDesign' ? classes.bigAvatar : ''}
        src={
          design === 'popupDesign'
            ? user['picture']['large']
            : user['picture']['thumbnail']
        }
        alt={fullName}
      />
      <div
        className={
          design === 'popupDesign' ? classes.blockContent : classes.flexContent
        }
      >
        <div className={classes.tableTitle}>{fullName}</div>
        <div className={classes.tableDesc}>{fullAddress}</div>
      </div>
    </div>
  );
};

export default UserHead;
