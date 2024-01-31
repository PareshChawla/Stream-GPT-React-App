import React from 'react'
import GptSearch from './GptSearch'
import GptMovieSuggestion from './GptMovieSuggestion'
import SearchFooter from './SearchFooter';

const GPT = () => {
  return (
    <div className='absolute w-full'>
        <GptSearch />
        <GptMovieSuggestion />
        <SearchFooter />
    </div>
  )
}

export default GPT