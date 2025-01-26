import { IconButton, InputAdornment, TextField } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import React from "react";

const SeedInput = () => {
  return (
    <TextField
      label="Seed"
      id="outlined-end-adornment"
      size="small"
      sx={{ m: 1, width: "25ch" }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <ShuffleIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SeedInput;
