import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import store from '../store'


  type postType={
    id:number,
    title:string,
    body:string,
    userId:number
  }
type postState = {
    posts:postType[],
    loading:boolean,
    hasErrors:boolean
}

const initialState:postState = {
    posts:[],
    loading:false,
    hasErrors:false
}

export const postSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{
        load_posts:(state)=>{
            state.loading=true
        },
        
        posts_failure:(state)=>{
            state.hasErrors=true
            state.loading=false
        },

        posts_success:(state,action:PayloadAction<postType[]>)=>{
            state.loading=false
            state.posts=action.payload
            state.hasErrors=false
        },
    },

})

export const fetchData=()=>{
    return async(dispatch:typeof store.dispatch)=>{
        dispatch(load_posts())

        try{
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            dispatch(posts_success(data))

        }catch(e){

            dispatch(posts_failure())
        
        }

    }

}

export const {load_posts,posts_success,posts_failure} = postSlice.actions;

export default postSlice.reducer