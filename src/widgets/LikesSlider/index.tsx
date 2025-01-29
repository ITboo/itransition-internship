import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
function valuetext(value) {
  return `${value} likes`;
}

export default function LikesSlider({ likes, onChange }) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(likes);

  const handleChange = (e) => {
    const rangeValue = e.target.value;
    onChange(rangeValue);
    setValue(rangeValue);
  };

  return (
    <Box>
      {t("likes")}
      <Stack
        direction="row"
        spacing={3}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ width: 200 }}>
          <Slider
            track="inverted"
            value={value}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={10}
            step={0.1}
            onChange={handleChange}
          />
        </Box>
      </Stack>
    </Box>
  );
}
