import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: [],
    error: ''
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return axios.get('https://fakestoreapi.com/products')
    .then(response => response.data)
})

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state,action) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state,action) => {
            state.loading = false,
            state.products = [],
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer