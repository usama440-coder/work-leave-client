"use client";

import * as React from "react";
import { TextField, Button } from "@mui/material";
import PrimaryBtn from "../PrimaryBtn";
import LayoutModal from "./Layout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { styled } from "@mui/material/styles";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddCompanyModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <LayoutModal open={open} setOpen={setOpen} text="Add New Company">
        <React.Fragment>
          <TextField
            size="small"
            id="company-name"
            label="Name"
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
          <TextField
            size="small"
            id="company-niche"
            label="Niche"
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
          <Button
            component="label"
            variant="outlined"
            fullWidth
            startIcon={<CloudUploadIcon />}
          >
            Upload image
            <VisuallyHiddenInput type="file" />
          </Button>
          <PrimaryBtn text="save" variant="contained" fullWidth={true} />
        </React.Fragment>
      </LayoutModal>
    </div>
  );
};

export default AddCompanyModal;
