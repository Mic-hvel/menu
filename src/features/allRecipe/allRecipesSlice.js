import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

import { selectSearchTerm} from "../searchTerm/searchSlice";
import { getAllRecipes } from "../../api";

export const loadRecipe = createAsyncThunk(
    'allRecipes/loadRecipe',
    async () => {
        const data = await getAllRecipes()
        return data
    }
)

export const allRecipesSlice = createSlice({
    name: 'allRecipes',
    initialState: {
        recipes: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadRecipe.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loadRecipe.fulfilled, (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.recipes = action.payload;
        })
        builder.addCase(loadRecipe.rejected, (state) => {
            state.isLoading = false;
        })
    },
})

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export default allRecipesSlice.reducer;

export const selectFilteredAllRecipes = createSelector(
    [selectAllRecipes, selectSearchTerm], 
    (allRecipes, search) => allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
)