"use client";

import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
} from "@mui/material";
import { StyledTableCell } from "./style";
import { myLeaves } from "../../utils/data/myLeaves";

const MyLeavesTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 1000 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Leave Type</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Comment</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myLeaves
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.leaveType}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.duration}
                    </StyledTableCell>
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
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.comment}
                    </StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={myLeaves.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MyLeavesTable;
