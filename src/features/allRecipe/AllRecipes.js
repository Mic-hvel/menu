import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredAllRecipes } from './allRecipesSlice'
import { addFavoriteRecipes } from '../favoriteRecipe/favoriteRecipeSlice'
import Spinner from '../../components/Spinner'
import Recipe from '../../components/Recipe'
import FavoriteButton from '../../components/FavoriteButton'

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

const AllRecipes = () => {

  const allRecipes = useSelector(selectFilteredAllRecipes)
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.allRecipes)


  function handleAddFavoriteRecipe(recipe) {
    dispatch(addFavoriteRecipes(recipe))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipes={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => handleAddFavoriteRecipe(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}

export default AllRecipes