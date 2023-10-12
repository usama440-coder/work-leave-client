"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(
  id: string,
  name: string,
  duration: number,
  date: string,
  comment: string,
  status: string
) {
  return { id, name, duration, date, comment, status };
}

const rows = [
  createData("1111", "John Doe", 3, "1 May - 4 May", "issue", "pending"),
  createData("1112", "John Doe", 3, "1 May - 4 May", "issue", "pending"),
  createData("1113", "John Doe", 3, "1 May - 4 May", "issue", "rejected"),
  createData("1114", "John Doe", 3, "1 May - 4 May", "issue", "pending"),
  createData("1115", "John Doe", 3, "1 May - 4 May", "issue", "approved"),
];

const EmployeeRequestLatest = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Comment</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.duration}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.comment}</StyledTableCell>
              <StyledTableCell align="right">
                <Chip
                  size="small"
                  variant="outlined"
                  color={
                    row.status === "pending"
                      ? "warning"
                      : row.status === "approved"
                      ? "success"
                      : "error"
                  }
                  label={row.status}
                />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeRequestLatest;
