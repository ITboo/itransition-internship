import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Stack } from '@mui/material';

function valuetext(value) {
  return `${value} likes`;
}

export default function LikesSlider() {
  const [value, setValue] = React.useState([0, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      Average likes
    <Stack direction="row"
    spacing={3}
    sx={{
      justifyContent: "space-between",
      alignItems: "center",
      gap: 2
    }}>
      {value[0]}
    <Box sx={{ width: 200}}>     
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={10}
        step={0.1}
      />
    </Box>
   {value[1]}
    </Stack>
    </Box>
  );
}