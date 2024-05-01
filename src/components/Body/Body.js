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
import "./Body.css";
import Pagination from "../Pagination/Pagination";

const Body = () => {
  const [dataList, setDataList] = useState([]);
  const usersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const first = (currentPage - 1) * usersPerPage;
  const last = currentPage * usersPerPage;
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
    <div className="main-container">
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
              <DataTable dataList={dataList} />
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dataList.length / usersPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Body;
