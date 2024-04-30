import React, { useState } from "react";
import Search from "../Search/Search";
import DataTable from "../DataTable/DataTable";
import axios from "axios";
import { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Paper,
} from "@mui/material";

const Body = () => {
  const [dataList, setDataList] = useState([]);

  //function to fetch data from the api using axios
  const fetchData = async () => {
    try {
      const url =
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
      const response = await axios.get(url);
      console.log(response);
      setDataList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="search-continer">
        <Search />
      </div>
      <div className="table-container">
        <TableContainer
          component={Paper}
          style={{
            border: "none",
            backgroundColor: "aqua",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Checkbox />
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Role
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Action Items
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ backgroundColor: "white" }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: "none" }}
                  >
                    <Checkbox />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: "none" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: "none" }}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: "none" }}
                  >
                    {row.role}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ border: "none" }}
                  >
                    Action items
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Body;
