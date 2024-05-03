import {
  Checkbox,
  TableCell,
  TableRow,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import "./DataTable.css";

const DataTable = ({
  dataList,
  selectedUser,
  handleRowSelect,
  setFilteredData,
  handleRowDelete,
  setDataList,
}) => {
  const [editUser, setEditUser] = useState({});
  const [editingUser, setEditingUser] = useState(null);

  const handleRowEdit = (id) => {
    const rowToEdit = dataList.find((row) => row.id === id);

    setEditingUser(id);
    setEditUser(rowToEdit);
  };

  const handleSaveData = () => {
    if (editUser.name.trim() !== "" && editUser.email.trim() !== "") {
      setFilteredData((prevData) =>
        prevData.map((row) => (row.id === editingUser ? editUser : row))
      );

      setDataList((prevData) =>
        prevData.map((row) => (row.id === editingUser ? editUser : row))
      );
    }
    setEditingUser(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditUser((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <>
      {dataList.length > 0 ? (
        dataList.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            style={{
              backgroundColor: selectedUser.includes(row.id)
                ? "lightgrey"
                : "white",
            }}
          >
            <TableCell
              component="th"
              scope="row"
              align="center"
              sx={{ border: "none" }}
            >
              <Checkbox
                checked={selectedUser.includes(row.id)}
                onChange={() => handleRowSelect(row.id)}
              />
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              sx={{ border: "none" }}
            >
              {editingUser === row.id ? (
                <TextField
                  name="name"
                  value={editUser.name}
                  onChange={handleInputChange}
                  variant="standard"
                />
              ) : (
                row.name
              )}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              sx={{ border: "none" }}
            >
              {editingUser === row.id ? (
                <TextField
                  name="email"
                  value={editUser.email || ""}
                  onChange={handleInputChange}
                  variant="standard"
                />
              ) : (
                row.email
              )}
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
              {editingUser === row.id ? (
                <Button
                  startIcon={<DoneIcon />}
                  style={{ color: "green" }}
                  onClick={() => {
                    handleSaveData();
                  }}
                />
              ) : (
                <>
                  <Button
                    startIcon={<EditNoteIcon />}
                    style={{ color: "black" }}
                    onClick={() => handleRowEdit(row.id)}
                  />
                  <Button
                    startIcon={<DeleteIcon />}
                    style={{ color: "black" }}
                    onClick={() => handleRowDelete(row.id)}
                  />
                </>
              )}
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={5} align="center" className="no-data">
            No Data Found !
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default DataTable;
