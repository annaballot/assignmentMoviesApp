export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
    mustWatch?: boolean;
  }

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }


  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
      id: number;
      name: string;
    }[];
  }

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }

  export type FilterOption = "title" | "genre" | "original_language";

  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }

  export interface Review{
    id: string;
    content: string
    author: string
  }


  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }

  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

  export interface BaseTVSeriesProps {
    name: string;
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    vote_count: number;
    genre_ids?: number[];
    origin_country?: string[];
    first_air_date?: string;
    number_of_seasons: number;
    number_of_episodes: number;
    vote_average: number;
  }

  export interface BaseTVSeriesListProps {
    tvseries: BaseTVSeriesProps[];
  }


  export interface DiscoverTVSeries {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseTVSeriesProps[];
  }

  



  export interface BaseTVSeriesListProps {
    tvseries: BaseTVSeriesProps[];
  }

  export interface TVSeriesListPageTemplateProps extends BaseTVSeriesListProps {
    name: string;
  }



  export interface TVSeriesDetailsProps extends BaseTVSeriesProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
      id: number;
      name: string;
    }[];
  }

  

  export interface TVSeriesImage {
    file_path: string;
    aspect_ratio?: number; 
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }


