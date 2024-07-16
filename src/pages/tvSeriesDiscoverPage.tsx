import React from "react";
import PageTemplate from "../components/templateTVSeriesListPage";
import { getTVSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import TVSeriesFilterUI, {
  nameFilter,
  genreFilter,
  languageFilter,
} from "../components/tvseriesFilterUI";
import { DiscoverTVSeries } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

// const languageFiltering = {
//   name: "original_language",
//   value: "",
//   condition: languageFilter,
// };

const TVSeriesDiscoverPage: React.FC = () => {

  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>("discoverTV", getTVSeries);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    // [nameFiltering, genreFiltering, languageFiltering]
    [nameFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const tvSeries = data ? data.results : [];
  const displayedTVSeries = filterFunction(tvSeries);


  return (
    <>
      <PageTemplate
        title="Discover TV Series"
        tvseries={displayedTVSeries}

      />
       <TVSeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        // languageFilter={filterValues[2].value}
      /> 
    </>
  );
};
export default TVSeriesDiscoverPage;