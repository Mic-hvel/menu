import { configureStore } from "@reduxjs/toolkit";
import favoriteRecipeSlice from "../features/favoriteRecipe/favoriteRecipeSlice";
import allRecipesSlice from "../features/allRecipe/allRecipesSlice";
import searchSlice from "../features/searchTerm/searchSlice";

export default configureStore({
  reducer: {
    allRecipes: allRecipesSlice,
    favoriteRecipes: favoriteRecipeSlice,
    search: searchSlice
  },
});