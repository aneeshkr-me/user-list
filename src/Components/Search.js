import React from 'react'
import "./Search.css"
const Search = ({ search, setSearch }) => {
  console.log(search);
  return (
    <div className='Search'>
      <input type="text" className='Search__input' placeholder='Search users' value={search} onChange={e => setSearch(e.target.value)} />
    </div>
  )
}

export default Search
