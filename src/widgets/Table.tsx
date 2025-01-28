import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "last_seen",
    headerName: "Last seen",
    width: 200,
  }
];

const rows = [
  { id: 1, username: "Snoweeee", email: "Jon", last_seen: '35' },
  { id: 2, username: "Snow", email: "Jonffs", last_seen: '35' },
  { id: 3, username: "Snow", email: "Jon", last_seen: '35' },
  { id: 4, username: "Sndfow", email: "Jons", last_seen: '35' },
  { id: 5, username: "Snow", email: "Jofen", last_seen: '35' },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
