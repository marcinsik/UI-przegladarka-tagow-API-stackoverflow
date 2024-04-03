import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import TagTable from "./components/TagTable";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import StatusIndicators from "./components/StatusIndicators";

const App = () => {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&page=${currentPage}&sort=${sortBy}&order=${sortOrder}&site=stackoverflow`;
    axios
      .get(apiUrl)
      .then((response) => {
        setTags(response.data.items);
        setTotalCount(response.data.total);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [currentPage, pageSize, sortBy, sortOrder]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (event) => {
    const value = parseInt(event.target.value);
    const defaultValue = 15;
    setPageSize(value || defaultValue);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
  };

  return (
    <Container
      maxWidth="md"
      style={{
        backgroundColor: "#f0f2f5",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "10px",
          color: "#fffff",
        }}
      >
        Przeglądarka tagów StackOverflow
      </Typography>
      <StatusIndicators isLoading={isLoading} error={error} />
      <Filters
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
        handlePageSizeChange={handlePageSizeChange}
      />
      <div style={{ marginBottom: "20px" }}></div>
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div style={{ marginBottom: "20px" }}></div>
      <TagTable tags={tags} />
    </Container>
  );
};

export default App;
