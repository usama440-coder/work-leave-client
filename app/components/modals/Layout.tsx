"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  text: string;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const LayoutModal = ({ open, text, setOpen, children }: Props) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="invite-employee-model"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="primary"
            sx={{ mb: 2, textAlign: "center" }}
          >
            {text}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default LayoutModal;
