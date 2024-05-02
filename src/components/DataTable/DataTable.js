import { Checkbox, TableCell, TableRow, Button } from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

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
              <Button startIcon={<EditNoteIcon />} style={{ color: "black" }} />
              <Button startIcon={<DeleteIcon />} style={{ color: "black" }} />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell>No Data Found !</TableCell>
        </TableRow>
      )}
    </>
  );
};

export default DataTable;
