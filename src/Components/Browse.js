import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import TrailerVideoContainer from './TrailerVideoContainer';
import MoviesListContainer from './MoviesListContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptContainer from './GptContainer';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showSearch = useSelector(store => store.gpt.showSearchBox);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showSearch ? <GptContainer /> : 
      <>
      <TrailerVideoContainer />
      <MoviesListContainer />
      </>}
    </div>
  )
}

export default Browse
