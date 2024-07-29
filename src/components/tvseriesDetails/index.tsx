import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TVSeriesDetailsProps } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const TVSeriesDetails: React.FC<TVSeriesDetailsProps> = (tvseries) => {

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {tvseries.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {tvseries.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
            </Paper>
            { <Paper component="ul" sx={styles.chipSet}>
                <Chip 
                    label={`Number of Episodes: ${tvseries.number_of_episodes}`} 
                />
                <Chip
                    label={`Number of Seasons: ${tvseries.number_of_seasons}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${tvseries.vote_average} (${tvseries.vote_count})`}
                />
                <Chip label={`First Air Date: ${tvseries.first_air_date}`} />
            </Paper> }
        </>
    );
};
export default TVSeriesDetails;