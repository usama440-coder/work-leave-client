"use client";

import * as React from "react";
import { TextField } from "@mui/material";
import PrimaryBtn from "../PrimaryBtn";
import LayoutModal from "./Layout";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const InviteEmployeeModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <LayoutModal open={open} setOpen={setOpen} text="Invite Employee">
        <React.Fragment>
          <TextField
            size="small"
            id="employee-email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <PrimaryBtn text="Invite" variant="contained" fullWidth={true} />
        </React.Fragment>
      </LayoutModal>
    </div>
  );
};

export default InviteEmployeeModal;
