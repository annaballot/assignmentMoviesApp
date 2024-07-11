import React from "react";
import TVSeries from "../tvseriesCard/";
import Grid from "@mui/material/Grid";
import { BaseTVSeriesListProps } from "../../types/interfaces";

const TVSeriesList: React.FC<BaseTVSeriesListProps> = ({tvseries}) => {
  let tvseriesCards = tvseries.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVSeries key={m.id} tvseries={m}/>
    </Grid>
  ));
  return tvseriesCards;
}

  export default TVSeriesList;