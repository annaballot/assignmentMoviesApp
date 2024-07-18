import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieSimilarList from "../movieSimilarList";
import {  MovieListPageTemplateProps} from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const MovieSimilarPageTemplate: React.FC<MovieListPageTemplateProps> = ({ movies, title, action })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <MovieSimilarList action={action} movies={movies}></MovieSimilarList>
      </Grid>
    </Grid>
  );
}
export default MovieSimilarPageTemplate;