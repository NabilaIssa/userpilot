import React from 'react';
import useFetch from '../../useFetch';
import UserRow from './UserRow';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Toolbar,
  Typography,
  TablePagination,
  TableFooter,
} from '@mui/material';
import UserPaginationActions from './UserPaginationActions';
import Controls from '../controls/Controls';
import { CircularProgress, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import UserDetails from './UserDetails';

const useStyles = makeStyles({
  rootCenter: {
    width: '100%',
    height: '100vh',
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootTop: {
    width: '100%',
    height: '100vh',
    padding: '40px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  alert: {
    width: '100%',
  },
  tableTitle: {
    flex: '1 1 100%',
    fontSize: '19px !important',
    fontWeight: '700 !important',
  },
  controlWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: '0 -5px',
  },
  formGroup: {
    padding: '0 5px',
    minWidth: '220px',
  },
  tableContainer: {
    borderRadius: 0,
    boxShadow: 'none',
  },
  cellTitle: {
    fontSize: '14px !important',
    fontWeight: '700 !important',
    color: '#9FA2B4 !important',
  },
});

const Users = () => {
  const classes = useStyles();
  const GENDER_NAME = 'gender';
  const NATIONALITY_NAME = 'nationality';
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [gender, setGender] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const { userId } = useParams();
  const [openPopup, setOpenPopup] = React.useState(!!userId);
  const [selectedUserId, setSelectedUserId] = React.useState(
    userId ? userId : null
  );

  const { data, loading, error } = useFetch(
    `https://randomuser.me/api?results=${rowsPerPage}&page=${page}&gender=${gender}&nat=${nationality}`
  );

  if (loading) {
    return (
      <Box className={classes.rootCenter}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className={classes.rootTop}>
        <Alert className={classes.alert} severity="error">
          Something went wrong
        </Alert>
      </Box>
    );
  }

  const items = data ? data.results : [];

  if (items === null) {
    return (
      <Box className={classes.rootTop}>
        <Alert className={classes.alert} severity="error">
          No data
        </Alert>
      </Box>
    );
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(1);
  };

  const handleInputChange = (event) => {
    if (event.target.name === GENDER_NAME) setGender(event.target.value);
    else if (event.target.name === NATIONALITY_NAME)
      setNationality(event.target.value);
  };

  function defaultLabelDisplayedRows({ from, to, count }) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  }

  const itemsCount = (page - 1) * rowsPerPage + items.length;

  const onRowClick = (user) => {
    setSelectedUserId(user?.id?.value);
    setOpenPopup(true);
  };

  const onDrawerClose = () => {
    setOpenPopup(false);
    setSelectedUserId(null);
  };

  return (
    <Paper>
      <Toolbar>
        <Typography
          className={classes.tableTitle}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All Users
        </Typography>
        <div className={classes.controlWrapper}>
          <div className={classes.formGroup}>
            <Controls.Input
              label="Gender"
              name={GENDER_NAME}
              value={gender}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.formGroup}>
            <Controls.Input
              name={NATIONALITY_NAME}
              label="Nationality"
              value={nationality}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </Toolbar>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="All Users">
          <TableHead>
            <TableRow>
              <TableCell className={classes.cellTitle}>User</TableCell>
              <TableCell className={classes.cellTitle}>
                Contact Information
              </TableCell>
              <TableCell className={classes.cellTitle}>
                Registration Date
              </TableCell>
              <TableCell className={classes.cellTitle}>
                Country/Post Code
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((user, index) => (
              <UserRow
                key={page + ' ' + index}
                user={user}
                onClick={onRowClick}
              />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={itemsCount}
                rowsPerPageOptions={[8, 16, 24]}
                colSpan={4}
                page={page - 1}
                rowsPerPage={rowsPerPage}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                labelDisplayedRows={defaultLabelDisplayedRows}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={UserPaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Drawer
        anchor={'right'}
        open={openPopup}
        onClose={onDrawerClose}
        className={classes.sidePopup}
      >
        {selectedUserId ? (
          <UserDetails userId={selectedUserId} />
        ) : (
          <Alert severity="error">This user does not have an Id</Alert>
        )}
      </Drawer>
    </Paper>
  );
};

export default Users;
