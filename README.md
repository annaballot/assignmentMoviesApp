# React App Assignment

###### Full Stack Development 2, HDip in Computer Science

__Name:__ Anna Ballot

__Video Demo:__ https://youtu.be/47ae3Guv764

This repository contains an implementation of the Movie Fans Web Application using the React library. 

### Features

+ I added a 'My Fantasy Movie' page which has a form to enter the details of the your fantasy movie, and when submitted it will display it back
+ Added a 'Discover TV Series' page, along with a TV Series Details page which can be accessed by clicking on the 'More info' button on the TV Series list
+ I added a 'Similar Movies' page, so when you click on the 'Similar Movies' button on any of the movies cards in the 'Disover Movies' page, it will bring  you to a page showing all of the movies that are similar (using a parameterised URL, and the 'Similar Movies' TMDB endpoint) 
+ Data hyperlinking on the disover Movies page, for a 'Similar Movies' button which uses a new route and endpoint and parameterised URL to show all similar movies
+ Added additional filtering to the TV series. As well as filtering by Title or Genre, you can also filter by Original language
+ Added the functionality to sort by both popularity and name to TV series
+ Added the functionality to sort by both Release Date and Title to Movies
+ My fantasy movie Implemented which includes a feature to add your own fantast movie, and when submitted, it displays it on the page.  This also gets a full list of genres from the TMDB endpoint to allow the user to select a valid genre
+ Added TV series as an additional data entity type
+ Implemented Server state Caching everywhere where there is data called from a TMDB endpoint.



### Setup requirements.

    npm install

    In VS Code, in the project base folder, create a new file called .env with the following content:
        VITE_TMDB_KEY=.... your API key value ...

### API endpoints

+ Discover list of TV Series- discover/tv
+ TV Series details - tv/{series_id}
+ TV Series Images - tv/${id}/images
+ Movie Similar = /movie/{movie_id}/similar



### Routing

+ /tvseries/discover  - displays list of TV Series
+ /tvseries/:id - shows detailed view of individual TV Series (parameterised)
+ /movies/:id/similar - shows list of similar movies (parameterised from the movie ID on the page that you clicked)
+ /movies/fantasy - Allows user to add a fantasy movie, or display the fantasy movie when already added



### Third Party Components/Integration

+ React Components
+ TMDB API



### Independent learning (If relevant)

+ React Sorting:    https://owlcation.com/stem/creating-a-sortable-list-in-react-js
+ TMDB Endpoints:   https://developer.themoviedb.org/reference/