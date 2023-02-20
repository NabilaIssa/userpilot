import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

function UsersTable() {
  return (
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
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
