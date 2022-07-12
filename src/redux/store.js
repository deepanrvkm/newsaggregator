import { configureStore } from '@reduxjs/toolkit'
import wheatherDataReducer from './wheatherDataSlice'
import newsDataReducer from './newsDataSlice'

const store = configureStore({
  reducer: {
    wheather: wheatherDataReducer,
    news: newsDataReducer
  }
})

export default store;