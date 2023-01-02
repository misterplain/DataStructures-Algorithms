import React from "react";
//material ui
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
//imports
import Notes from "../pages/notes/Notes";
import Patterns from "../pages/patterns/Patterns";
import Problems from "../pages/problems/Problems";
import Resources from "../pages/resources/Resources";
//routing
import { Link } from "react-router-dom";

const customTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },
  },
});

const drawerWidth = 240;
const navItems = ["Notes", "Patterns", "Problems", "Resources"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to='/'>
        <Typography variant='h6' sx={{ my: 2 }}>
          DS&A
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={`/${item.toLowerCase()}`}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component='nav' color='secondary' colorInherit>
            <Toolbar variant='dense' color='secondary'>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant='h6'
                component='div'
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
               <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Data Stuctures and Algorithms</Link> 
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Link to={`/${item.toLowerCase()}`} style={{textDecoration: 'none'}}>
                    {" "}
                    <Button key={item} sx={{ color: "#fff" }}>
                      {item}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component='nav'>
            <Drawer
              container={container}
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box component='main' sx={{ p: 2 }}>
            <Toolbar />
          </Box>
        </Box>{" "}
      </ThemeProvider>
    </>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
