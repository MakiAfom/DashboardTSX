import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "../sidebar/Sidebar"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

interface ButtonAppBarProps {
  // Define props here if needed, e.g., title
}

const NavBar: React.FC<ButtonAppBarProps> = () => {
  // Define state and functions here if necessary

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to={"/Sidebar"}
            // onClick should call a function to handle opening the drawer
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer />{" "}
      {/* Use TemporaryDrawer here if it's part of the AppBar */}
    </Box>
  );
};

export default NavBar;
