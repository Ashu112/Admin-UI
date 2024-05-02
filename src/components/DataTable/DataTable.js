import { Checkbox, TableCell, TableRow, Button } from "@mui/material";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({ dataList }) => {
  return (
    <>
      {dataList.length > 0 ? (
        dataList.map((row) => (
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
