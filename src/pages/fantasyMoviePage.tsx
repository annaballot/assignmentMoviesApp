import React from "react";
import PageTemplate from "../components/templateFantasyMoviePage";
import FantasyMovieDisplay from "../components/fantasyMovie";

const FantasyMoviePage: React.FC = () => {
  return (
    <>
      <PageTemplate>
        <FantasyMovieDisplay />
      </PageTemplate>
    </>
  );
};

export default FantasyMoviePage;
