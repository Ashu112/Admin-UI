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
          style={{
            border: "none",
            backgroundColor: "aqua",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <DataTable dataList={dataList} />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Body;
