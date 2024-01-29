import React from 'react'
import GptSearch from './GptSearch'
import GptMovieSuggestion from './GptMovieSuggestion'
import BrowseFooter from './BrowseFooter';

const GPT = () => {
  return (
    <div className='absolute w-full'>
        <GptSearch />
        <GptMovieSuggestion />
        <BrowseFooter />
    </div>
  )
}

export default GPT