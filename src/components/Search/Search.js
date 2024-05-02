import { TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import "../Search/Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ dataList, setFilteredData, setCurrentPage }) => {
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const performSearch = (text) => {
    setCurrentPage(1);

    const searchText = text.trim().toLowerCase();

    if (!searchText) {
      setFilteredData(dataList);
      return;
    }

    const filteredData = dataList.filter((user) =>
      [user.name, user.email, user.role]
        .join("")
        .toLowerCase()
        .includes(searchText)
    );

    setFilteredData(filteredData);
  };

  const debounceSearch = (event, debounceTimeout) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    let timerId = setTimeout(() => {
      performSearch(event.target.value);
    }, 500);
    setDebounceTimeout(timerId);
  };

  return (
    <div className="main">
      <TextField
        className="searchbar"
        size="small"
        placeholder="Search by name,email or role"
        name="search"
        onChange={(e) => debounceSearch(e, debounceTimeout)}
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
