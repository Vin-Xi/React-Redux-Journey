import { createSlice } from '@reduxjs/toolkit';
import {getMessages} from '../../static-data';
import _ from 'lodash'


const initialState={
    ListMessages:getMessages(10)
}

export const messageSlice=createSlice({

    name:'messages',
    initialState,
    reducers:{
        send_message:(state,action)=>{
            const {typing,activeUser} = action.payload
            console.log(typing,activeUser)
            const allusermsgs=state.ListMessages[activeUser]
            const number = +_.keys(allusermsgs).pop()+1;
            console.log(allusermsgs)
            console.log(number)
            state.ListMessages={
                ...state,
                [activeUser]:{
                    ...allusermsgs,
                
                [number]:{
                    number,
                    text:typing,
                    is_user_msg:true
                }
            }
            
        }
        }
    },



})

export const {send_message} = messageSlice.actions

export default messageSlice.reducer