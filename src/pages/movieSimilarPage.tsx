import React from "react";
import { useParams } from "react-router-dom";
// import MovieSimilar from "../components/movieSimilar";
import PageTemplate from "../components/templateSimilarMoviesPage";
import { getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
// import { MovieDetailsProps } from "../types/interfaces";
import { DiscoverMovies } from "../types/interfaces";


const MovieSimilarPage: React.FC= () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["similarmovies", id],
    ()=> getSimilarMovies(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  const similarmovies = data ? data.results : [];


  console.log("similarmovies")
  console.log(similarmovies)


  return (
    <>
      <PageTemplate
        title="Similar Movies"
        movies={similarmovies}
      />
    </>
  );
};

export default MovieSimilarPage;