import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { BaseTVSeriesProps } from "../../types/interfaces"; 
import { Link } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import { TVSeriesContext } from "../../contexts/tvSeriesContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  // avatar2: {
  //   backgroundColor: "rgb(0, 0, 255)",
  // },
};

// interface TVSeriesListProps {
//   tvseries:ListedTVSeries,
//   action: (m: ListedTVSeries) => React.ReactNode;
// }

interface TVSeriesCardProps {
  tvseries: BaseTVSeriesProps;
  // action: (m: BaseTVSeriesProps) => React.ReactNode;
}

const TVSeriesCard: React.FC<TVSeriesCardProps> = ({tvseries}) => {


 



  return (
    <Card sx={styles.card}>
      
      <CardHeader

        title={
          <Typography variant="h5" component="p">
            {tvseries.name}{" "}
          </Typography>
        }
      />

      <CardMedia
        sx={styles.media}
        image={
          tvseries.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvseries.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            { <Typography variant="h6" component="p">
              <TravelExploreIcon fontSize="small" />
              {tvseries.original_language}
            </Typography> }
          </Grid>
         
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvseries.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/tvseries/${tvseries.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>

    </Card>
  );
}

export default TVSeriesCard;