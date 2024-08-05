import React, { useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./styles";
import { fantasyMovie, GenreData } from "../../types/interfaces";
import { useQuery } from "react-query";
import { getGenres } from "../../api/tmdb-api";
import Spinner from "../spinner";

let isSubmitted = false;
let myFantasyMovieTitle = "";
let myFantasyMovieOverview = "";
let myFantasyMovieGenre = "";
let myFantasyMovieBudget = 0;

const FantasyMovieDisplay: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<GenreData, Error>(
    "genres",
    getGenres
  );
  const defaultValues = {
    defaultValues: {
      title: "",
      overview: "",
      genre: "",
      budget: 0,
    },
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<fantasyMovie>(defaultValues);

  const [genre, setGenre] = useState("");

  const handleGenreChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  const genres = data?.genres || [];
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const onSubmit: SubmitHandler<fantasyMovie> = (fantasyMovie) => {
    isSubmitted = true;
    fantasyMovie.genre = genre;

    myFantasyMovieTitle = fantasyMovie.title;
    myFantasyMovieOverview = fantasyMovie.overview;
    myFantasyMovieGenre = fantasyMovie.genre;
    myFantasyMovieBudget = fantasyMovie.budget;
  };

  if (isSubmitted) {
    return (
      <div>
        <Typography component="h2" variant="h3">
          My Fantasy Movie
        </Typography>
        <br></br>
        <br></br>

        <Typography variant="h5" component="h3">
          Title
        </Typography>

        <Typography variant="h6" component="p">
          {myFantasyMovieTitle}
        </Typography>
        <br></br>

        <Typography variant="h5" component="h3">
          Overview
        </Typography>

        <Typography variant="h6" component="p">
          {myFantasyMovieOverview}
        </Typography>
        <br></br>

        <Typography variant="h5" component="h3">
          Genre
        </Typography>

        <Typography variant="h6" component="p">
          {myFantasyMovieGenre}
        </Typography>
        <br></br>

        <Typography variant="h5" component="h3">
          Budget
        </Typography>

        <Typography variant="h6" component="p">
          {myFantasyMovieBudget}
        </Typography>
      </div>
    );
  } else {
    return (
      <Box component="div" sx={styles.root}>
        <Typography component="h2" variant="h3">
          Create a Fantasy Movie
        </Typography>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: "40ch" }}
                variant="outlined"
                margin="normal"
                required
                onChange={onChange}
                value={value}
                id="title"
                label="Title of Movie"
                autoFocus
              />
            )}
          />
          {errors.title && (
            <Typography variant="h6" component="p">
              {errors.title.message}
            </Typography>
          )}
          <Controller
            name="overview"
            control={control}
            rules={{
              required: "Overview cannot be empty.",
              minLength: { value: 10, message: "Overview is too short" },
            }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={value}
                onChange={onChange}
                label="overview text"
                id="overview"
                multiline
                minRows={5}
              />
            )}
          />
          {errors.overview && (
            <Typography variant="h6" component="p">
              {errors.overview.message}
            </Typography>
          )}

          <Controller
            control={control}
            name="genre"
            render={({ field }) => (
              <TextField
                {...field}
                id="select-genre"
                select
                variant="outlined"
                label="Genre Select"
                value={genre}
                onChange={handleGenreChange}
                helperText="Don't forget your genre"
              >
                {genres.map((genre) => {
                  return (
                    <MenuItem key={genre.id} value={genre.name}>
                      {genre.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            )}
          />

          <br></br>

          <Controller
            name="budget"
            control={control}
            rules={{ required: "Budget is required" }}
            // defaultValue=0
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: "50ch" }}
                variant="outlined"
                margin="normal"
                required
                onChange={onChange}
                value={value}
                id="budget"
                type="number"
                label="Budget for Movie"
                autoFocus
              />
            )}
          />
          {errors.budget && (
            <Typography variant="h6" component="p">
              {errors.budget.message}
            </Typography>
          )}

          <Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={styles.submit}
            >
              Submit
            </Button>
            <Button
              type="reset"
              variant="contained"
              color="secondary"
              sx={styles.submit}
              onClick={() => {
                reset({
                  title: "",
                  overview: "",
                });
              }}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    );
  }
};

export default FantasyMovieDisplay;
