import React from "react";
import { LangSwitcher } from "../LangSwitcher";
import SeedInput from "../Seed";
import { Stack } from "@mui/material";
import LikesSlider from "../LikesSlider";

const Filters = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <LangSwitcher />
      <SeedInput />
      <LikesSlider/>
    </Stack>
  );
};

export default Filters;
