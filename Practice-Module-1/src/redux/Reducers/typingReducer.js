import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    typingMessage:""
}
export const typingSlice = createSlice({
    name:"Typing",
    initialState,
    reducers:{
        setTypingMessage:(state,action)=>{
            state.typingMessage=action.payload
        },
        send_message1:(state,)=>{
            console.log("hello")
            state.typingMessage=""
        }
    }
})
export const {setTypingMessage,send_message1} = typingSlice.actions 
export default typingSlice.reducer