import { Box, Input } from "@mui/material";
import React from "react";

const ReviewsInput = () => {
  return (
    <Box  sx={{display:'flex', flexDirection:'column'}}>
      Average reviews
      <Input type="number" />
    </Box>
  );
};

export default ReviewsInput;
