import React from "react"; 
import { useParams } from "react-router-dom";
import TVSeriesDetails from "../components/tvseriesDetails";
import PageTemplate from "../components/templateTVSeriesPage";
import { getOneTVSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { TVSeriesDetailsProps } from "../types/interfaces";

const TVSeriesDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: tvseries, error, isLoading, isError } = useQuery<TVSeriesDetailsProps, Error>(
    ["tvseries", id],
    ()=> getOneTVSeries(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {tvseries ? (
        <>
        <PageTemplate tvseries={tvseries}> 
          <TVSeriesDetails {...tvseries} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for tvseries details</p>
    )}
    </>
  );
};

export default TVSeriesDetailsPage;