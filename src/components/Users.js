import '../css/Table.css';
import React from 'react';
import useFetch from '../useFetch';
import { format } from 'date-fns';
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
  IconButton,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import { CircularProgress, Alert } from '@mui/material';

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

const UserRow = (userData) => {
  const user = userData.user;
  const fullName = getFullName(user['name']);
  const fullAddress = getFullAddress(user['location']);
  const date = new Date(user['registered']['date']);
  return (
    <TableRow key={user['id']['value']}>
      <TableCell
        data-name="User"
        xs={{ '&:last-child td,&:last-child th': { border: 0 } }}
      >
        <div className="table-item">
          <div className="table-thumb">
            <img src={user['picture']['thumbnail']} alt={fullName} />
          </div>
          <div className="table-content">
            <div className="table--title">{fullName}</div>
            <div className="table--desc">{fullAddress}</div>
          </div>
        </div>
      </TableCell>
      <TableCell data-name="Contact Information">
        <div className="table--title">{user['email']}</div>
        <div className="table--desc">{user['phone']}</div>
      </TableCell>
      <TableCell data-name="Registration Date">
        <div className="table--title">{format(date, 'PP')}</div>
        <div className="table--desc">{format(date, 'p')}</div>
      </TableCell>
      <TableCell data-name="Country/Post Code">
        <div className="table--title">{user['location']['country']}</div>
        <div className="table--desc">{user['location']['postcode']}</div>
      </TableCell>
    </TableRow>
  );
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={count < rowsPerPage}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const Users = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const { data, loading, error } = useFetch(
    `https://randomuser.me/api?results=${rowsPerPage}&page=${page}`
  );

  if (loading) {
    return (
      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
      return (
        <div style={{width: '100%'}}>
          <Alert style={{width: '100%'}} severity="error">Something went wrong</Alert>
        </div>
      );
  }

  const items = data ? data.results : [];

  if (items === null) {
    return (
      <Alert severity="info">No data</Alert>
    );
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(1);
  };

  const itemsCount = ((page - 1) * rowsPerPage) + items.length;

  return (
    <Box sx={{ width: '100%', padding: '40px' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            All Users
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table aria-label="All Users">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Contact Information</TableCell>
                <TableCell>Registration Date</TableCell>
                <TableCell>Country/Post Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((user, index) => (
                <UserRow key={page + " " + index} user={user} />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[8, 16, 24]}
                  colSpan={3}
                  count={itemsCount}
                  page={page - 1}
                  rowsPerPage={rowsPerPage}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Users;
