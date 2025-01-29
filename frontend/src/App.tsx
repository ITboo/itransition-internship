import { Route, Routes } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import Room from "./pages/Room";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rooms/:id" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
