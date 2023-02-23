import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import Users from './users/Users';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '30px',
    background: '#f7f8fc',
  },
  pageHead: {
    marginBottom: '30px',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: '24px !important',
    fontWeight: '700 !important',
    lineHeight: '30px !important',
  },
  userInfo: {
    padding: '0 !important',
    minHeight: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userName: {
    fontSize: '14px !important',
    fontWeight: '600 !important',
    marginRight: '15px !important',
  },
  userImage: {
    margin: '2px',
    border: '2px solid #f7f8fc',
    boxShadow: '0 0 0 2px #DFE0EB',
  },
});

const PageContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container className={classes.pageHead}>
        <Grid item xs={6}>
          <Typography
            variant="h1"
            id="tableTitle"
            component="h1"
            className={classes.pageTitle}
          >
            Users
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.userInfo}>
            <Typography
              id="userName"
              component="div"
              className={classes.userName}
            >
              Nabila Issa
            </Typography>
            <Avatar className={classes.userImage}>NI</Avatar>
          </div>
        </Grid>
      </Grid>
      <Users></Users>
    </Box>
  );
};

export default PageContent;
