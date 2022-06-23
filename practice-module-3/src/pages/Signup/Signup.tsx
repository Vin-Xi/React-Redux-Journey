import { FormikErrors, useFormik } from "formik";
import InputForm from "../../components/InputForm";
import './Signup.scss';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { SignupSchema } from "./validator";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const labels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password"
}

interface IValueProps{
  firstName:string,
  lastName:string,
  email:string,
  password:string
}

const Signup = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => console.log(values),
  });

  type K<T> = keyof FormikErrors<T>
  
  return (
    <div>
    <Typography variant="h4" align="center" mb={3}>Sign Up Form!</Typography>
      <form onSubmit={formik.handleSubmit} className='form'>
        
        {Object.keys(initialValues).map((key) => {

            const error=formik.errors[key as K<IValueProps>]
            const label = labels[key as keyof IValueProps]
            
            return(    
                <InputForm
                    key={key}
                    name={key}
                    placeholder={`Enter ${label}`}
                    handleChange={formik.handleChange}
                    label={label}
                    error={error}
                  />
        )}
    )}
        <Button type="submit" variant="contained" size="medium" className="mButton">Submit</Button>
      </form>
    </div>
  );
};

export default Signup;
