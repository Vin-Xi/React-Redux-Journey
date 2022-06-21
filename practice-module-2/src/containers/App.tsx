import '../styles/App.scss';
import ResponsiveAppBar from '../components/appBar';
import PostContainer from './PostContainer';
import AlbumContainer from "./AlbumContainer"
import { Routes, Route} from "react-router-dom"

const App = () =>{
  return(
  <>
  
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/posts" element={<PostContainer/>}/>
      <Route path="/albums" element={<AlbumContainer/>}/>
    </Routes>

  

 </>
  )
}

export default App;
