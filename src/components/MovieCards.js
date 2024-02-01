import React from 'react'
import { IMG_CDN_URL1 } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-40 md:w-48 md:mr-5'>
        <img className='rounded-lg w-36 h-56 md:w-48 md:h-72' src={IMG_CDN_URL1 + posterPath} alt="movie-card" />
    </div>
  )
}

export default MovieCards;