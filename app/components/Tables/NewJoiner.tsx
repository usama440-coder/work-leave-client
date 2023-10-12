"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import Link from "next/link";
import { StyledTableCell } from "./style";
import { employees } from "../../utils/data/employees";

const NewJoiner = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Employee</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
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
              <StyledTableCell align="right" size="small">
                <Link href="/">Details</Link>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewJoiner;
