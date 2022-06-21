import {FC} from 'react'
import '../../../styles/posts.scss'
import Typography from '@mui/material/Typography';

type propType = {
    key:number,
    title:string,
    body:string
}

const Post:FC<propType>=({title,body})=>{
    return(
        <>
        <div className='posts'>
                <Typography className='post-title' variant="h6" component='div' gutterBottom>{title}</Typography>
            
                <Typography className='post-body' variant="body1" component='div'>{body}</Typography>
        
        </div>
        </>
    )
}


export default Post