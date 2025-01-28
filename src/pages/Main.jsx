import * as React from "react";
import Container from '@mui/material/Container';
import DataTable from "./widgets/Table";
import Header from "./widgets/Header";

const Main = () => {
  return (
    <Container>
      <Header/>
      <DataTable />
    </Container>
  )
}

export default Main