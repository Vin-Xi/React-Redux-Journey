
import { useEffect } from 'react';

import { useAppDispatch,useAppSelector } from '../redux/Typedhooks';
import { getPosts } from '../redux/selectors/selector';
import { fetchData } from '../redux/reducers/postsReducer';
import Post from '../components/common/posts/posts';


const PostContainer= () =>{
  const dispatch=useAppDispatch()

  type postType={
    id:number,
    title:string,
    body:string,
    userId:number
  }
  const posts=useAppSelector(getPosts)

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  return(
  <div className='container'>
    {posts.map((post:postType)=><Post key={post.id} title={post.title} body={post.body}></Post>)}
  </div>  
  )
}

export default PostContainer