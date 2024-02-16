import React from 'react'
import { useSelector } from 'react-redux'
import MovieCards from './MovieCards'
import MovieList from './MovieList';

const MoviesListContainer = () => {
    const movies = useSelector(store => store?.movies);
    // console.log("movies", movies);
  return (
    <div className='-mt-64'>
        <MovieList movie = {movies?.nowPlayingMovies} listType={"Now Playing"} />
        <MovieList movie = {movies?.topRatedMovies} listType={"Top Rated"} />
        <MovieList movie = {movies?.popularMovies} listType={"Polular"} />
        <MovieList movie = {movies?.upcomingMovies} listType={"Upcoming"} />
    </div>
  )
}

export default MoviesListContainer
