import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { wheatherApiKEY } from '../config/config'

const getWheatherData = createAsyncThunk('api/wheather', async ({ lat, long }) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${wheatherApiKEY}`)
        .then((res) => {
            return ({
                city: res.data.city.name,
                temp: res.data.list[0].main.temp,
                info: res.data.list[0].weather[0]
            })
        });
});

const wheatherDataSlice = createSlice({
    name: 'wheather',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getWheatherData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getWheatherData.pending]: (state) => {
            state.loading = true;
        },
        [getWheatherData.rejected]: (state) => {
            state.loading = false;
            state.error = "Error occured"
        }
    }

});

export { getWheatherData };

export default wheatherDataSlice.reducer; 