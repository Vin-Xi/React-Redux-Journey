import { RootState } from "../store"

const getPosts=(state:RootState)=>state.posts.posts
const getAlbums=(state:RootState)=>state.albums.albums
export {getPosts ,getAlbums}