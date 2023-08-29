import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
const Header = () => {
  return (
    // <header className="flex mr-3 align-middle justify-between">
    //   <h1>Events App</h1>

    // </header>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Events App
        </Typography>

        <nav className="mr-4 flex align-middle justify-evenly">
          <Link className="border-s-black px-3" href="/events">
            Events
          </Link>
          <Link className="border-s-black px-3 py 3" href="/">
            Home
          </Link>
          <Link className="border-s-black px-3 py 3" href="/about-us">
            About-us
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
