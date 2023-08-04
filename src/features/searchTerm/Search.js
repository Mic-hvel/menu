import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from './searchSlice'

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'

const Search = () => {

  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)

  function handleSearchInput (e) {
    dispatch(setSearchTerm(e.target.value))
  }

  function handleClearSearchInput() {
    dispatch(clearSearchTerm())
  }

  return (
    <div  id="search-container">
        <img id="search-icon" alt="" src={searchIconUrl} />
        <input onChange={handleSearchInput} value={searchTerm} placeholder='Search recipes'/>
        {searchTerm.length > 0 && (
          <button
          type="button"
          id="search-clear-button"
          onClick={handleClearSearchInput}
          >
            <img src={clearIconUrl} alt="" />
          </button>
        )}   
    </div>
  )
}

export default Search;




