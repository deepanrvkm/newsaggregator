import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { newsApiKEY } from '../config/config'

const getNewsData = createAsyncThunk('api/news', async ({ search }) => {
    return await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2022-07-11&sortBy=popularity&apiKey=${newsApiKEY}`)
        .then((res) => {
            return (res.data.articles)
        });
});


const newsDataSlice = createSlice({
    name: 'news',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getNewsData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getNewsData.pending]: (state) => {
            state.loading = true;
        },
        [getNewsData.rejected]: (state) => {
            state.loading = false;
            state.error = "Error occured"
        }
    }

});

export { getNewsData };

export default newsDataSlice.reducer; 