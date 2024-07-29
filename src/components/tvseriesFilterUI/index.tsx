import React, { useState } from "react";
import FilterCard from "../filterTVSeriesCard";
import SortCard from "../sortTVSeriesCard";
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

export const languageFilter = (tvseries: BaseTVSeriesProps, value: string): boolean => {
    return tvseries.original_language.toLowerCase().search(value.toLowerCase()) !== -1;
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
    languageFilter: string;
    onSort: (sortOption: string) => void;
}

const TVSeriesFilterUI: React.FC<TVSeriesFilterUIProps> = ({ onFilterValuesChange, nameFilter, genreFilter, languageFilter, onSort }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [sortOption, setSortOption] = useState<string>("none");

    const handleSortChange = (sortOption: string) => {
        onSort(sortOption);
        setSortOption(sortOption); 
      };

    return (
        <>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter and Sort
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
                    languageFilter={languageFilter}
                />
                <SortCard 
                    sortOption={sortOption} 
                    onSort={handleSortChange} 
                />
            </Drawer>
        </>
    );
};

export default TVSeriesFilterUI;