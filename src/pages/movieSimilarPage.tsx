import React from "react";
import { useParams } from "react-router-dom";
// import MovieSimilar from "../components/movieSimilar";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies } from '../api/tmdb-api'
// import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
// import { MovieDetailsProps } from "../types/interfaces";
import { DiscoverMovies } from "../types/interfaces";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const MovieSimilarPage: React.FC= () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["similarmovies", id],
    ()=> getSimilarMovies(id||"")
  );

  // const { data: movie, error, isLoading, isError } = useQuery<MovieDetailsProps, Error>(
  //   ["movie", id],
  //   ()=> getMovie(id||"")
  // );

  // console.log("movie")
  // console.log(movie)

  // console.log("movie title")



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  // {movie.title}

  const similarmovies = data ? data.results : [];


  // console.log("movie")
  // console.log(movie)


  return (
    <>
      <PageTemplate
        // title={movie.title}
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