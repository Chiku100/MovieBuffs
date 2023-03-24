import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {value,setValue}=useGlobalContext();
  return <form className='search-form' >
  <h2>Welcome. <br />
  Discover your next favorite movie or show with Movie Buffs
  </h2>
  <input  placeholder="search for a movie..." type="text" className='form-input' onChange={(e)=>setValue(e.target.value)}/>
  </form>
}

export default SearchForm
