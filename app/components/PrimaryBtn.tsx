"use client";

import { Button } from "@mui/material";

interface PrimaryBtn {
  text: String;
  variant: "contained" | "outlined" | "text";
}

const PrimaryBtn = ({ text, variant }: PrimaryBtn) => {
  return (
    <Button
      sx={{ my: 2, alignSelf: "flex-start" }}
      variant={variant}
      size="large"
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;
