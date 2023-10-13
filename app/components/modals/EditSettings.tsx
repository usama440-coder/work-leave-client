"use client";

import * as React from "react";
import { TextField } from "@mui/material";
import PrimaryBtn from "../PrimaryBtn";
import LayoutModal from "./Layout";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const EditSettingsModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <LayoutModal open={open} setOpen={setOpen} text="Edit Leave Settings">
        <React.Fragment>
          <TextField
            size="small"
            id="leave-type"
            label="Leave Type"
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
          <TextField
            type="number"
            size="small"
            id="no-of-leaves"
            label="No of Leaves"
            variant="outlined"
            fullWidth
          />
          <PrimaryBtn text="save" variant="contained" fullWidth={true} />
        </React.Fragment>
      </LayoutModal>
    </div>
  );
};

export default EditSettingsModal;
