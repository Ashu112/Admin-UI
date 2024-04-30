import { TextField, InputAdornment } from "@mui/material";
import React from "react";
import "../Search/Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="main">
      <TextField
        className="searchbar"
        size="small"
        placeholder="Search by name,email or role"
        name="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
