import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import store from '../store'


  type albumType={
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string    
}
type albumState = {
    albums:albumType[],
    loading:boolean,
    hasErrors:boolean
}

const initialState:albumState = {
    albums:[],
    loading:false,
    hasErrors:false
}

export const albumSlice= createSlice({
    name:'albums',
    initialState,
    reducers:{
        load_albums:(state)=>{
            state.loading=true
        },
        
        albums_failure:(state)=>{
            state.hasErrors=true
            state.loading=false
        },

        albums_success:(state,action:PayloadAction<albumType[]>)=>{
            state.loading=false
            state.albums=action.payload
            state.hasErrors=false
        },
    },

})

export const fetchData=()=>{
    return async(dispatch:typeof store.dispatch)=>{
        dispatch(load_albums())

        try{
            
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            const data = await response.json()
            dispatch(albums_success(data))

        }catch(e){

            dispatch(albums_failure())
        
        }

    }

}

export const {load_albums,albums_success,albums_failure} = albumSlice.actions;

export default albumSlice.reducer