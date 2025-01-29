import * as React from "react";
import { useTranslation } from "react-i18next";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const LangSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="language">{t('language')}</InputLabel>
      <Select
        defaultValue={i18n.resolvedLanguage}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
        labelId="language"
        id="demo-select-small"
        label="Language"
      >
        <MenuItem value={"en"}>EN</MenuItem>
        <MenuItem value={"ru"} selected>
          RU
        </MenuItem>
        <MenuItem value={"ko"}>KO</MenuItem>
      </Select>
    </FormControl>
  );
};
