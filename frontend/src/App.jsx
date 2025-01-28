import Header from "./widgets/Header";
import CollapsibleTable from "./widgets/Table";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
import { Box, Container } from "@mui/material";
import Gallery from "./widgets/Gallery";
import { useEffect, useState, useCallback, useRef } from "react";
import Filters from "./widgets/Filters";
import { rows } from "./utils/mockData";

const INITIAL_ITEMS = 10;
const LOAD_MORE_ITEMS = 10;

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [visibleItems, setVisibleItems] = useState(INITIAL_ITEMS);
  const [viewMode, setViewMode] = useState("table");
  const loadingRef = useRef(null);
  useEffect(() => {
    setAllBooks(rows);
  }, []);
  const displayedBooks = allBooks.slice(0, visibleItems);
  const loadMore = useCallback(() => {
    if (visibleItems < allBooks.length) {
      setVisibleItems((prev) => prev + LOAD_MORE_ITEMS);
    }
  }, [visibleItems, allBooks.length]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <Container maxWidth="lg">
      <Header setViewMode={setViewMode} />
      <Filters />
      {viewMode === "table" ? (
        <CollapsibleTable books={displayedBooks} />
      ) : (
        <Gallery books={displayedBooks} />
      )}
      {visibleItems < allBooks.length && (
        <Box ref={loadingRef} sx={{ p: 2, display:'flex',justifyContent:'center' }}>
          <CircularProgress color="inherit" size="20px"/>
        </Box>
      )}
    </Container>
  );
}

export default App;
