import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({movie, listType}) => {
    // console.log("object", movie);
  return (
    <div className='bg-black'>
        <h1 className='text-white text-xl p-3'>{listType}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex px-2'>
                {movie?.map((mov)=>(<MovieCards key={mov.id} posterPath={mov.poster_path}/>))}
            </div>
        </div>
    </div>
  )
}

export default MovieList
