import Header from "./widgets/Header";
import CollapsibleTable from "./widgets/Table";

import "./App.css";
import { Container } from "@mui/material";
import Gallery from "./widgets/Gallery";
import { useState } from "react";

function App() {
  const [viewMode, setViewMode] = useState('table');
  return (
    <Container maxWidth="lg">
      <Header setViewMode={setViewMode}/>
      {viewMode === "table" ? <CollapsibleTable /> : <Gallery />}
    </Container>
  );
}

export default App;
