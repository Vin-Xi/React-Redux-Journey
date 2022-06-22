
import {FC,ChangeEventHandler} from 'react';
import TextField from '@mui/material/TextField';


interface iInputProp {
    name:string,
    placeholder?:string,
    label:string,
    handleChange:ChangeEventHandler,
    error:string,
    isError:boolean
}

const InputForm:FC<iInputProp> = ({name,placeholder,handleChange,label,error,isError})=> {
  
    return(
        <div className='input-form'>
            {/* <label htmlFor={name}> {label}: </label> */}
            <TextField
                variant="standard"
                type={name}
                name={name}
                placeholder={placeholder}
                label={label}
                id={name}
                onChange={handleChange}
                autoComplete='off'
            />
            {   isError?
                 <span className="input-error">
                {error}
             </span>:null
            }
        </div>
)}

export default InputForm