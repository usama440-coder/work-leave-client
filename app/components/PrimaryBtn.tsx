"use client";

import { Button } from "@mui/material";

interface PrimaryBtn {
  text: String;
}

const PrimaryBtn = ({ text }: PrimaryBtn) => {
  return (
    <Button
      sx={{ mx: 1, my: 2, width: "20ch", alignSelf: "flex-start" }}
      variant="contained"
      size="large"
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;
