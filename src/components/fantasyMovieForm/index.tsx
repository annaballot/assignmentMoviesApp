import React, { useContext, useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import { fantasyMovie } from "../../types/interfaces";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const fantasyMovieForm: React.FC<fantasyMovie> = () => {
    const defaultValues = {
        defaultValues: {
          title: "",
          overview: "",
          mainGenre: "",
          budget: 0,
        }
      };
    
      const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm<fantasyMovie>(defaultValues);
    
      const navigate = useNavigate();
      const context = useContext(MoviesContext);
      const [rating, setRating] = useState(3);
      const [open, setOpen] = useState(false);  //NEW
    
    
      const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRating(Number(event.target.value));
      };

      const handleSnackClose = () => {
        setOpen(false);
        navigate("/movies/fantasy");
      };
    
      const onSubmit: SubmitHandler<fantasyMovie> = (fantasyMovie) => {
        fantasyMovie.movieId = movie.id;
        fantasyMovie.rating = rating;
        context.addfantasyMovie(movie, fantasyMovie);
        setOpen(true); 
      };
    
      return (
        <Box component="div" sx={styles.root}>
          <Typography component="h2" variant="h3">
            Write a fantasyMovie
          </Typography>
          <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
         onClose={handleSnackClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for submitting a fantasyMovie
          </Typography>
        </Alert>
      </Snackbar>
          <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="author"
              control={control}
              rules={{ required: "Name is required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="author"
                  label="Author's name"
                  autoFocus
                />
              )}
            />
            {errors.author && (
              <Typography variant="h6" component="p">
                {errors.author.message}
              </Typography>
            )}
            <Controller
              name="content"
              control={control}
              rules={{
                required: "fantasyMovie cannot be empty.",
                minLength: { value: 10, message: "fantasyMovie is too short" },
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
                  label="fantasyMovie text"
                  id="fantasyMovie"
                  multiline
                  minRows={10}
                />
              )}
            />
            {errors.content && (
              <Typography variant="h6" component="p">
                {errors.content.message}
              </Typography>
            )}
    
            <Controller
              control={control}
              name="rating"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="select-rating"
                  select
                  variant="outlined"
                  label="Rating Select"
                  value={rating}
                  onChange={handleRatingChange}
                  helperText="Don't forget your rating"
                >
                  {ratings.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
    
            <Box >
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
                    author: "",
                    content: "",
                  });
                }}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      );
    };
    

export default fantasyMovieForm;