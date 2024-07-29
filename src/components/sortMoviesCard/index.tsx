import React from "react"; 
import { SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface SortMovieCardProps {
  onSort: (sortOption: string) => void;
  sortOption: string;
}

const SortMoviesCard: React.FC<SortMovieCardProps> = ({ onSort, sortOption  }) => {

    const handleSorting = (e: SelectChangeEvent) => {
        onSort(e.target.value);
    };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
        <InputLabel id="sort-label">Sort By...</InputLabel>
        <FormControl sx={styles.formControl}>
            
            <Select
              labelId="sort-label"
              id="sorting"
              value={sortOption}
              onChange={handleSorting}
            >
                <MenuItem key="release_date" value="release_date">
                Release Date
                </MenuItem>
                <MenuItem key="title" value="title">
                Title
                </MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default SortMoviesCard;
