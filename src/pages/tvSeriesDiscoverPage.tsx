import React, { useState }from "react";
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
import { BaseTVSeriesProps } from "../types/interfaces";

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

const languageFiltering = {
  name: "original_language",
  value: "",
  condition: languageFilter,
};

const sortByPopularity = (a: BaseTVSeriesProps, b: BaseTVSeriesProps) => b.vote_average - a.vote_average;
const sortByName = (a: BaseTVSeriesProps, b: BaseTVSeriesProps) => a.name.localeCompare(b.name);



const TVSeriesDiscoverPage: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>("none");
  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>("discoverTV", getTVSeries);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [nameFiltering, genreFiltering, languageFiltering]
  );

  console.log("nameFiltering");
  console.log(nameFiltering);
  console.log("genreFiltering");
  console.log(genreFiltering);
  console.log("languageFiltering");
  console.log(languageFiltering);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
      if (type === "name") {
        const  updatedFilterSet = [changedFilter, filterValues[1], filterValues[2]];
        setFilterValues(updatedFilterSet);
      } else if (type === "genre") {
        const  updatedFilterSet = [filterValues[0], changedFilter, filterValues[2]];
        setFilterValues(updatedFilterSet);
      } else {
        const  updatedFilterSet = [filterValues[0], filterValues[1], changedFilter];
        setFilterValues(updatedFilterSet);
      }
  };

  const changeSortOption = (sort: string) => {
    setSortOption(sort);
  };

  const tvSeries = data ? data.results : [];
  const displayedTVSeries = filterFunction(tvSeries);

  const sortedTVSeries = [...displayedTVSeries].sort((a, b) => {
    switch (sortOption) {
      case "none":
        return 0;
      case "vote_average":
        return sortByPopularity(a, b);
        case "name":
          return sortByName(a, b);
      default:
        return 0;
    }
  });

  return (
    <>
      <PageTemplate
        title="Discover TV Series"
        tvseries={sortedTVSeries}

      />
       <TVSeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        languageFilter={filterValues[2].value}
        onSort={changeSortOption}
      /> 
    </>
  );
};
export default TVSeriesDiscoverPage;