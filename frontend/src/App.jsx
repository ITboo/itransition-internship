import Header from "./widgets/Header";
import CollapsibleTable from "./widgets/Table";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Header/>
      <CollapsibleTable />
    </Container>
  );
}

export default App;
