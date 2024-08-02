
import React, { useState } from "react";
import PageTemplate from "../components/templateFantasyMoviePage";
// import { getMovies } from "../api/tmdb-api";
// import useFiltering from "../hooks/useFiltering";
// import MovieFilterUI, {
//   titleFilter,
//   genreFilter,
// } from "../components/movieFilterUI";
// import { DiscoverMovies } from "../types/interfaces";
// import { useQuery } from "react-query";
// import Spinner from "../components/spinner";
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
// import { BaseMovieProps } from "../types/interfaces";




const MyFantasyMoviePage: React.FC = () => {

  return (
    <>
      <PageTemplate
        title="My Fantasy Movie"
      />
      {/* <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        onSort={changeSortOption}
      /> */}
    </>
  );
};
export default MyFantasyMoviePage;