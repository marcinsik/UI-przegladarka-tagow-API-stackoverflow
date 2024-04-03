import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { all } from "axios";

const Pagination = ({
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  return (
    <div>
      <MuiPagination
        count={all}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Pagination;
