import { Box} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ReviewsInput = ({ value, onChange }) => {
const { t } = useTranslation();
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // If the input is empty or just a minus sign, set to null
    if (inputValue === '' || inputValue === '-') {
      onChange(null);
      return;
    }
    
    const numValue = Number(inputValue);
    // Only update if it's a valid number
    if (!isNaN(numValue)) {
      onChange(numValue);
    }
  };
  return (
    <Box  sx={{display:'flex', flexDirection:'column'}}>
      {t('reviews')}
      <input value={value ?? ''} type="number"  min={0} onChange={handleChange} />
    </Box>
  );
};

export default ReviewsInput;
