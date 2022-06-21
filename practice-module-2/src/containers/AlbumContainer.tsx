import { useAppDispatch,useAppSelector } from '../redux/Typedhooks';
import { getAlbums}  from '../redux/selectors/selector'
import { fetchData } from '../redux/reducers/albumsReducer';
import { useEffect } from 'react'
import Album from '../components/common/albums'
const AlbumContainer = () =>{
    const dispatch=useAppDispatch()
  
    type albumType={
        albumId:number,
        id:number,
        title:string,
        url:string,
        thumbnailUrl:string    
    }
    const albums=useAppSelector(getAlbums)
  
    useEffect(()=>{
      dispatch(fetchData())
    },[dispatch])
    console.log(albums)
    return(
    <div className='container'>
        
      {albums.map((album:albumType)=><Album key={album.id} title={album.title} url={album.url}></Album>)}
    </div>  
    )
  }
  
  export default AlbumContainer