import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavoriteRecipes, selectFilteredFavoriteRecipes } from './favoriteRecipeSlice'
import Spinner from '../../components/Spinner'
import Recipe from '../../components/Recipe'
import FavoriteButton from '../../components/FavoriteButton'

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

const FavoriteRecipes = () => {

  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.allRecipes);

  function handleRemoveFavoriteRecipe(recipe) {
    dispatch(removeFavoriteRecipes(recipe))
  }
  
  if(isLoading) {
    return <Spinner />
  }

  return (
    <div className='recipe-container'>
      {favoriteRecipes.map((recipe) => (
        <Recipe recipes={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => handleRemoveFavoriteRecipe(recipe)}
            icon={unfavoriteIconUrl}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}

export default FavoriteRecipes