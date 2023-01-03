import React, { useEffect } from "react";
import PrismCode from "../../components/PrismCode";
import { Grid, Typography } from "@mui/material";

const Notes = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={10}>
        <Typography variant='h4'>Notes</Typography>
      </Grid>
    </Grid>
  );
};

export default Notes;
