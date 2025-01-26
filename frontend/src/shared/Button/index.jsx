import Button from "@mui/material/Button";
import TableChartIcon from "@mui/icons-material/TableChart";
import GridOnIcon from "@mui/icons-material/GridOn";

export const IconButton = ({ model, onClick }) => {
  return (
    <Button variant="outlined" model={model} onClick={onClick}>
      {model === "table" ? <TableChartIcon /> : <GridOnIcon />}
    </Button>
  );
};
