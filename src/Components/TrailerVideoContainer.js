import React from 'react';
import TrailerInformation from './TrailerInformation';
import { useSelector } from 'react-redux';
import TrailerVideo from './TrailerVideo';

const TrailerVideoContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // return from here if movies is null to avoid console error
    if(!movies) return;

    const playingMovie = movies[0];
    // console.log("playingMovie", playingMovie);
    const {id, key, title, overview} = playingMovie;


    return (
        <div>
            <TrailerInformation title={title} overview={overview}/>
            <TrailerVideo id={id} key={key}/>
        </div>
    )
}

export default TrailerVideoContainer
