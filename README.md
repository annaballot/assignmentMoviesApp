# MoviesApp - Anna Ballot

This assignment is an extension of the Movies app developed in the labs, which demonsstrates my knowledge and 
understanding of the React framework and ecosystem.

Below I will list out all additional features that I have added in addition to what was covered in the labs.

## UI - New views/pages (3+).
- I added a 'My Fantasy Movie' page which has a form to enter the details of the your fantasy movie, and when submitted it will display it back
- Added a 'Discover TV Series' page, along with a TV Series Details page which can be accessed by clicking on the 'More info' button on the TV Series list
- I added a 'Similar Movies' page, so when you click on the 'Similar Movies' button on any of the movies cards in the 'Disover Movies' page, it will bring 
  you to a page showing all of the movies that are similar (using a parameterised URL, and the 'Similar Movies' TMDB endpoint) 

## Routing - New routes.
- Parameterised URL used for TV Series Details
- Parameretised URL used for 'Similar Movies' page
- ????Data hyperlinking????

## Data Model.
- Added TV series as an additional data entity type
- Implemented Server state Caching everywhere where there is data called from a TMDB endpoint.

## Functionality.
- Additional filtering and/or sorting criteria.
- My fantasy movie Implemented which includes a feature to add your own fantast movie, and when submitted, it displays it on the page. 
  This also gets a full list of genres from the TMDB endpoint to allow the user to select a valid genre
