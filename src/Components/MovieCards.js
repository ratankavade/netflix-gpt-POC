import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants/constants'

const MovieCards = ({posterPath}) => {
  return (
      <div className='w-44 p-2'>
        <img src={IMG_CDN_URL + posterPath} alt='movie poster'/>
      </div>
  )
}

export default MovieCards
