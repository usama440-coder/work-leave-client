"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { StyledTableCell } from "./style";
import { settings } from "../../utils/data/settings";
import EditSettingsModal from "../modals/EditSettings";

const SettingsTable = () => {
  const [open, setOpen] = React.useState(false);

  const handleEditSettings = () => {
    setOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Leave Type</StyledTableCell>
            <StyledTableCell align="right">No of Leaves</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {settings.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.leaveType}
              </StyledTableCell>
              <StyledTableCell align="right">{row.leaveNumber}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton size="small">
                  <DeleteRoundedIcon color="error" fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={handleEditSettings}>
                  <BorderColorRoundedIcon color="primary" fontSize="small" />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditSettingsModal open={open} setOpen={setOpen} />
    </TableContainer>
  );
};

export default SettingsTable;
