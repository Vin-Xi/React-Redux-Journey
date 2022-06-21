import { createSlice } from '@reduxjs/toolkit';
import {generateUser} from '../../static-data';



const initialState={ListUser:generateUser()}

export const userSlice=createSlice({

    name:'users',
    initialState,
    reducers:{
    },



})

export const {display} = userSlice.actions

export default userSlice.reducer