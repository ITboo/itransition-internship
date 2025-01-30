import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../config/firebase";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";

const Header = ({ onDelete }) => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("delete");
    } catch (error) {}
  };

  return (
    <header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
          <IconButton aria-label="delete" onClick={() => handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <input type="text" />
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </Stack>
        <IconButton onClick={handleLogOut}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </header>
  );
};

export default Header;
