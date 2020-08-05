import React from 'react'

const Search = () => {
  return (
    <div>
      <form>
        <div className='search-bar'>
          <input type='search' placeholder='Search Crypto' />
          <input type='submit' value='Seach'/>
        </div>
      </form>
    </div>
  )
}

export default Search
