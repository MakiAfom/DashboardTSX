// import React from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import AnchorTemporaryDrawer from "../sidebar/Sidebar";

// // Adjust the path as necessary
// import { Link } from "react-router-dom";
// //import Sidebar from "../sidebar/Sidebar";
// type Anchor = "top" | "left" | "bottom" | "right";

// interface ButtonAppBarProps {
//   // Define props here if needed, e.g., title
// }

// const NavBar: React.FC<ButtonAppBarProps> = () => {
//   // Define state and functions here if necessary
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             component={Link}
//             to={"/Sidebar"}
//             onClick={toggleDrawer(anchor, true)}
//           >
//             // onClick should call a function to handle opening the drawer
//             <MenuIcon />
//             {/* {anchor} */}
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       <AnchorTemporaryDrawer
//         state={state}
//         setState={setState}
//         toggleDrawer={toggleDrawer}
//       />

//       {/* Use TemporaryDrawer here if it's part of the AppBar */}
//     </Box>
//   );
// };

// export default NavBar;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorTemporaryDrawer from "../sidebar/Sidebar";

type Anchor = "top" | "left" | "bottom" | "right";

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
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
            onClick={toggleDrawer("left", true)}
          >
            {/* {anchor} */}
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <AnchorTemporaryDrawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      ></AnchorTemporaryDrawer>
       
    </Box>
  );
}
