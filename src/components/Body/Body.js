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
  Button,
} from "@mui/material";
import "./Body.css";
import Pagination from "../Pagination/Pagination";

const Body = () => {
  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
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
      setDataList(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //row select logic
  const handleRowSelect = (id) => {
    if (selectedUser.includes(id)) {
      setSelectedUser((prevSelectedId) =>
        prevSelectedId.filter((rowId) => rowId !== id)
      );
    } else {
      setSelectedUser((prevSelectedId) => [...prevSelectedId, id]);
    }
  };

  // selecting all the users on current page
  const handleAllSelect = () => {
    const currentPageData = filteredData.slice(first, last);

    const allSelected = currentPageData.every((user) =>
      selectedUser.includes(user.id)
    );

    if (allSelected) {
      setSelectedUser((prevSelectedId) =>
        prevSelectedId.filter(
          (id) => !currentPageData.some((userData) => userData.id === id)
        )
      );
    } else {
      setSelectedUser((prevSelectedId) => [
        ...prevSelectedId,
        ...currentPageData.map((userData) => userData.id),
      ]);
    }
  };

  // function to remove user from button
  const handleDeleteSelected = () => {
    const newData = filteredData.filter(
      (user) => !selectedUser.includes(user.id)
    );

    setFilteredData(newData);
    setDataList(newData);

    const updatedPages = Math.ceil(newData.length / usersPerPage);

    if (currentPage > updatedPages) setCurrentPage(updatedPages);

    setSelectedUser([]);
  };

  // function to delete data on the same row
  const handleRowDelete = (id) => {
    const newFilteredData = filteredData.filter((user) => user.id !== id);

    setFilteredData(newFilteredData);
    setDataList(dataList.filter((user) => user.id !== id));

    const updatedPages = Math.ceil(newFilteredData.length / usersPerPage);

    if (currentPage > updatedPages) {
      setCurrentPage(updatedPages);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="search-continer">
        <Search
          dataList={dataList}
          setFilteredData={setFilteredData}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="table-container">
        <TableContainer className="table-head" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Checkbox
                    checked={
                      !!(
                        filteredData.length &&
                        filteredData
                          .slice(first, last)
                          .every((user) => selectedUser.includes(user.id))
                      )
                    }
                    onClick={handleAllSelect}
                  />
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
              <DataTable
                dataList={filteredData.slice(first, last)}
                selectedUser={selectedUser}
                setFilteredData={setFilteredData}
                handleRowSelect={handleRowSelect}
                setDataList={setDataList}
                handleRowDelete={handleRowDelete}
              />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {filteredData.length > 0 && (
        <div className="footer">
          <Button className="delete-btn" onClick={handleDeleteSelected}>
            Delete Selected
          </Button>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData.length / usersPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default Body;
