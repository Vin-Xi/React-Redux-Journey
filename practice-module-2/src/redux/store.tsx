import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/postsReducer'
import albumsReducer from './reducers/albumsReducer'
const store = configureStore({
    reducer:{
        posts:postsReducer,
        albums:albumsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store