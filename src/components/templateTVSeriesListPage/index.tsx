import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TVSeriesList from "../tvseriesList";
import {  TVSeriesListPageTemplateProps} from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TVSeriesListPageTemplate: React.FC<TVSeriesListPageTemplateProps> = ({ tvseries, name })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
      <TVSeriesList  tvseries={tvseries}></TVSeriesList>
      </Grid>
    </Grid>
  );
}
export default TVSeriesListPageTemplate;