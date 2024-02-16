import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import TrailerVideoContainer from './TrailerVideoContainer';
import MoviesListContainer from './MoviesListContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';

const Browse = () => {
  

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <TrailerVideoContainer />
      <MoviesListContainer />
    </div>
  )
}

export default Browse
