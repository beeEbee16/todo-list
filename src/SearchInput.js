import React from 'react'

const SearchInput = ({ search, setSearch}) => {
  return (
    <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">search</label>
        <input 
            type='text'
            id='search'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchInput
