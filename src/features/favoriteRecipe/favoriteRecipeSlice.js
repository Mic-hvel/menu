import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchSlice";

export const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
        addFavoriteRecipes: {
            reducer: (state, action) => {
                state.push(action.payload)
            }
        },
        removeFavoriteRecipes: {
            reducer: (state, action) => {
                return state.filter((recipe) => recipe.name !== action.payload.name)
        }
        }
    }
})

export const {addFavoriteRecipes, removeFavoriteRecipes} = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;


export const selectFilteredFavoriteRecipes = createSelector(
    [selectFavoriteRecipes, selectSearchTerm], 
    (favoriteRecipes, search) => favoriteRecipes.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
)