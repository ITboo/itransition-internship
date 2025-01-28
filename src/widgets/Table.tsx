import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

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

export default function DataTable({userList}) {
  return (
  <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
);
}
  /**/