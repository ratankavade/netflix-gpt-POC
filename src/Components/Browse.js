import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import TrailerVideoContainer from './TrailerVideoContainer';

const Browse = () => {
  

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <TrailerVideoContainer />
    </div>
  )
}

export default Browse
