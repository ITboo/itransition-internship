import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const columns = [
  { field: "name", headerName: "Username", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "seen",
    headerName: "Last seen",
    width: 200,
  }
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({userList, selected, setSelected}) {
  
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => userList.find((row) => row.id === id));
    console.log(`Selected: ${selectedRowsData}`);
    setSelected(selectedRowsData)
  };


  return (
  <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
      />
    </Paper>
);
}
  /**/