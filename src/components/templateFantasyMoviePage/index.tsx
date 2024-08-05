import React from "react";  // useState/useEffect redundant 
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { MovieImage, MovieDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateMoviePageProps {
    movie: MovieDetailsProps;
    children: React.ReactElement;
}

const TemplateFantasyMoviePage: React.FC<TemplateMoviePageProps> = ({children}) => {

    return (
        <>

            {<Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={1}>
                  
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>

                
            </Grid> }
        </>
    );
};

export default TemplateFantasyMoviePage;