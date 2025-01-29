import React from "react";
import { LangSwitcher } from "../LangSwitcher";
import SeedInput from "../Seed";
import { Stack } from "@mui/material";
import LikesSlider from "../LikesSlider";
import ReviewsInput from "../ReviewsInput";

const Filters = ({ filters, onFiltersChange }) => {

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
      <LikesSlider  onChange={(value) => onFiltersChange({ ...filters, likes: value })} likes={filters.likes}/>
      <ReviewsInput onChange={(value) => onFiltersChange({ ...filters, reviews: value })} value={filters.reviews}/>
    </Stack>
  );
};

export default Filters;
