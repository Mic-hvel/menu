
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadRecipe } from './features/allRecipe/allRecipesSlice';
import AllRecipes from './features/allRecipe/AllRecipes';
import FavoriteRecipes from './features/favoriteRecipe/FavoriteRecipes';
import Search from './features/searchTerm/Search';
import './server'



function App() {

  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(loadRecipe());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadRecipe());
  };



  return (
    <div id="app">
      <header>
        <Search />
      </header>
      <main id="recipes-wrapper">
        {hasError ? (
          <div id="error-wrapper">
            <h1>
              Oh no! There was a mess in the kitchen and we couldn't get the
              recipes.
            </h1>
            <button onClick={onTryAgainHandler}>Try again</button>
          </div>
        ) : (
          <>
            <section id="favorite-recipes" className="recipes-section">
              <h2 className="header">Favorites</h2>
              <FavoriteRecipes />
            </section>
            <section className="recipes-section">
              <h2 className="header">Recipes</h2>
              <AllRecipes />
            </section>
          </>
        )}
      </main>
    </div>
  );
}



export default App;
