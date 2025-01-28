import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent:'space-between',
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <IconButton aria-label="unblock">
            <AddCircleIcon />
          </IconButton>
          <IconButton aria-label="block">
            <BlockIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <input type="text" />
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </Stack>
      </Box>
    </header>
  );
};

export default Header;
