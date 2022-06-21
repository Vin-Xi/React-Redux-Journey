import { Typography } from '@mui/material'
import {FC} from 'react'
import '../../../styles/albums.scss'

type propType={
    key:number,
    title:string,
    url:string,

}

const Album:FC<propType>=({title,url})=>{
    return(

         <div className='albums'>
            <img src={url} alt="random"/>
            <Typography>{title}</Typography>                
        </div>

)
}

export default Album