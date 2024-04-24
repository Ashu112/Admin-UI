import { Checkbox, TableCell, TableRow } from "@mui/material";
import React from "react";

const DataTable = ({ dataList }) => {
  return (
    <div className="table-data">
      {dataList.map((row) => (
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.role}</TableCell>
        </TableRow>
      ))}
    </div>
  );
};

export default DataTable;
