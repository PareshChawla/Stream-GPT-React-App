import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-48 mr-5'>
        <img className='rounded-lg' src={IMG_CDN_URL + posterPath} alt="movie-card" />
    </div>
  )
}

export default MovieCards;