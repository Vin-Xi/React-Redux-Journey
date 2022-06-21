import { createSlice } from '@reduxjs/toolkit';



const initialState={
    activeUserId:null
}

export const activeUserSlice=createSlice({

    name:'activeUser',
    initialState,
    reducers:{
        setUserActiveId:(state,action)=>{
            state.activeUserId=action.payload
            console.log(state.activeUserId)
        }
    },



})

export const {setUserActiveId} = activeUserSlice.actions

export default activeUserSlice.reducer