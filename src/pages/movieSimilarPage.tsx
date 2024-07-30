import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { DiscoverMovies } from "../types/interfaces";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


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

  return (
    <>
      <PageTemplate
        title="Similar Movies"
        movies={similarmovies}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />
        }}
      />
    </>
  );
};

export default MovieSimilarPage;