"use client";

import { Button } from "@mui/material";

interface PrimaryBtn {
  text: String;
  variant: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  handleBtn?: () => void;
}

const PrimaryBtn = ({
  text,
  variant,
  size,
  fullWidth,
  handleBtn,
}: PrimaryBtn) => {
  return (
    <Button
      onClick={handleBtn}
      sx={{ my: 2, alignSelf: "flex-start" }}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;
