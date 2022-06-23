import { useFormik,FormikErrors } from "formik";
import InputForm from "../../components/InputForm";
import './Signin.scss';
import { SigninSchema } from "./validator";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";


const initialValues = {
  email: "",
  password: "",
};

const labels = {
  email: "Email",
  password: "Password"
}

interface IValueProps{
  email:string,
  password:string
}

const Signin = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SigninSchema,
    onSubmit: (values) => console.log(values),
  });

  type K<T> = keyof FormikErrors<T>
  console.log(formik)
  return (
    <div>
      <Typography variant="h4" mb={3} align="center">Sign In Form!</Typography>
      <form onSubmit={formik.handleSubmit} className='form'>
        
        {Object.keys(initialValues).map((key,i) => {
            console.log(key)
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

export default Signin;
