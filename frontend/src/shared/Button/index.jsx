import Button from "@mui/material/Button";
import TableChartIcon from "@mui/icons-material/TableChart";
import GridOnIcon from "@mui/icons-material/GridOn";

export const IconButton = ({ model }) => {
  return (
    <Button variant="outlined" model={model}>
      {model === "table" ? <TableChartIcon /> : <GridOnIcon />}
    </Button>
  );
};
