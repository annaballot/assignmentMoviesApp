import React from "react";
import PageTemplate from "../components/templateFantasyMoviePage";
import FantasyMovieForm from "../components/fantasyMovieForm";
// import { useLocation } from "react-router-dom";
// import { useQuery } from "react-query";
// import { getMovie } from "../api/tmdb-api";
// import Spinner from "../components/spinner";
// import { BaseMovieProps, MovieDetailsProps } from "../types/interfaces";

const AddFantasyPage: React.FC = () => {
    // const location = useLocation()
    // const { fantasyMovieId } = location.state;
    // const { data: fantasyMovie, error, isLoading, isError } = useQuery<MovieDetailsProps, Error>(
    //     ["fantasyMovie", fantasyMovieId],
    //     () => getMovie(fantasyMovieId)
    // );

    // if (isLoading) {
    //     return <Spinner />;
    // }

    // if (isError) {
    //     return <h1>{error.message}</h1>;
    // }



    // return (
    //     <>
    //         {fantasyMovie ? (
    //                 <PageTemplate fantasyMovie={fantasyMovie}>
    //                     <FantasyMovieForm {...fantasyMovie} />
    //                 </PageTemplate>
    //         ) : (
    //             <p>Waiting for fantasy Movie details</p>
    //         )}
    //     </>
    // );


    return (
        <>

            <PageTemplate>
               
                <FantasyMovieForm/>
            </PageTemplate>
          
        </>
    );



};

export default AddFantasyPage;