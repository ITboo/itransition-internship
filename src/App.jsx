import Header from "./widgets/Header";
import CollapsibleTable from "./widgets/Table";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
import { Box, Container } from "@mui/material";
import Gallery from "./widgets/Gallery";
import { useEffect, useState, useCallback, useRef } from "react";
import Filters from "./widgets/Filters";
import { rows } from "./utils/mockData";
import { generateBooks } from "./data/books";

const INITIAL_ITEMS = 10;
const LOAD_MORE_ITEMS = 10;
const BOOKS_QUANTITY = 100;

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [visibleItems, setVisibleItems] = useState(INITIAL_ITEMS);
  const [viewMode, setViewMode] = useState("table");
  const loadingRef = useRef(null);

  const [filters, setFilters] = useState({
    likes: null,
    reviews: null,
  });

  useEffect(() => {
    setAllBooks(generateBooks(BOOKS_QUANTITY));
  }, []);

  const filteredBooks = allBooks.filter((book) => {
    const matchesLikes = book.likes >= filters.likes

    const matchesReviews =
      filters.reviews === null || book.reviews.length === filters.reviews;

    return matchesLikes && matchesReviews;
  });

  const displayedBooks = filteredBooks.slice(0, visibleItems);

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

  useEffect(() => {
    setVisibleItems(INITIAL_ITEMS);
  }, [filters]);

  return (
    <Container maxWidth="lg">
      <Header setViewMode={setViewMode} />
      <Filters filters={filters} onFiltersChange={setFilters} />

      {viewMode === "table" ? (
        <CollapsibleTable books={displayedBooks} />
      ) : (
        <Gallery books={displayedBooks} />
      )}
      {displayedBooks.length === 0 && <h3>No data</h3>}
      {visibleItems < allBooks.length && (
        <Box
          ref={loadingRef}
          sx={{ p: 2, display: "flex", justifyContent: "center" }}
        >
          <CircularProgress color="inherit" size="20px" />
        </Box>
      )}
    </Container>
  );
}

export default App;
