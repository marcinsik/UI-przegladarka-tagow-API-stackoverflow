import React from "react";
import { Alert, Box, CircularProgress } from "@mui/material";

const StatusIndicators = ({ isLoading, error }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
      }}
    >
      {isLoading && (
        <>
          <CircularProgress sx={{ marginRight: 2 }} />
          Ładowanie...
        </>
      )}
      {error && (
        <Alert severity="error">
          {error.message}
          Wystąpił błąd przy pobieraniu danych. Maksymalna liczba danych na stronę wynosi: 100
        </Alert>
      )}
    </Box>
  );
};

export default StatusIndicators;
