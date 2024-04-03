import React from "react";
import { styled } from "@mui/material/styles";

const StyledFilters = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "#f0f0f0",
  borderRadius: theme.spacing(1),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const StyledLabel = styled("label")(({ theme }) => ({
  marginRight: theme.spacing(2),
  fontWeight: "bold",
}));

const StyledSelect = styled("select")(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  border: "1px solid #ccc",
  backgroundColor: "#fff",
}));

const StyledInput = styled("input")(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  width: "70px",
}));

const Filters = ({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
  pageSize,
  handlePageSizeChange,
}) => {
  return (
    <StyledFilters>
      <StyledLabel htmlFor="sort-by">Sortuj po:</StyledLabel>
      <StyledSelect
        id="sort-by"
        value={sortBy}
        onChange={(e) => onSortByChange(e.target.value)}
      >
        <option value="name">Nazwa</option>
        <option value="popular">Popularność</option>
        <option value="activity">Aktywność</option>
      </StyledSelect>
      <StyledLabel htmlFor="sort-order">Kierunek sortowania:</StyledLabel>
      <StyledSelect
        id="sort-order"
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value)}
      >
        <option value="asc">Rosnąco</option>
        <option value="desc">Malejąco</option>
      </StyledSelect>
      <StyledLabel htmlFor="page-size">Liczba na stronę:</StyledLabel>
      <StyledInput
        type="number"
        id="page-size"
        value={pageSize}
        onChange={handlePageSizeChange}
        min={1}
        max={100}
      />
    </StyledFilters>
  );
};

export default Filters;
