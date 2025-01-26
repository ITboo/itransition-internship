import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const LangSwitcher=()=> {
  const [lang, setLang] = React.useState('');

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Language</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={lang}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={20}>ENG</MenuItem>
        <MenuItem value={10}>RUS</MenuItem>
        <MenuItem value={30}>KOR</MenuItem>
      </Select>
    </FormControl>
  );
}