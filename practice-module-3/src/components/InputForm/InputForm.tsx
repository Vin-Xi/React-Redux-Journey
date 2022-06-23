
import {FC,ChangeEventHandler} from 'react';
import TextField from '@mui/material/TextField';


interface IInputProp {
    name:string,
    placeholder?:string,
    label:string,
    handleChange:ChangeEventHandler,
    error?:string,
}

const InputForm:FC<IInputProp> = ({name,placeholder,handleChange,label,error})=> {
    console.log(error)
    return(
        <div className='input-form'>
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
            <span className="input-error">
                {error}
            </span>
            
        </div>
)}

export default InputForm