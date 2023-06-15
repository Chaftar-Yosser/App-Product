import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    initialState: [],
    name: 'productsSlice',
    // reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            return action.payload;
        })
    }
})
// export const {} = productsSlice.actions;
export default productsSlice.reducer;