import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../../Utils/constants";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = () => (
  <Stack
    className="Navbar"
    direction={"row"}
    alignItems="center"
    p={2}
    sx={{
      background: "#343434",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Link to={"/"}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
