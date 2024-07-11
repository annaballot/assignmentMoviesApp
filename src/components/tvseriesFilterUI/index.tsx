import React, { useState } from "react";
import FilterCard from "../filterTVSeriesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseTVSeriesProps } from "../../types/interfaces";

export const nameFilter = (tvseries: BaseTVSeriesProps, value: string): boolean => {
    return tvseries.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = (tvseries: BaseTVSeriesProps, value: string) => {
    const genreId = Number(value);
    const genreIds = tvseries.genre_ids;
    return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 20,
        right: 2,
    },
};

interface TVSeriesFilterUIProps {
    onFilterValuesChange: (f: string, s: string) => void;
    nameFilter: string;
    genreFilter: string;
}


const TVSeriesFilterUI: React.FC<TVSeriesFilterUIProps> = ({ onFilterValuesChange, nameFilter, genreFilter }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={onFilterValuesChange}
                    titleFilter={nameFilter}
                    genreFilter={genreFilter}
                />
            </Drawer>
        </>
    );
};

export default TVSeriesFilterUI;