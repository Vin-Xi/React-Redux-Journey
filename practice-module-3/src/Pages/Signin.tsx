import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "../components/InputForm";
import '../styles/Signup.scss';

import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

const SigninSchema = Yup.object().shape({
  Email: Yup.string().email().required("Email is required!"),
  Password: Yup.string()
    .min(8, "Password is too short - should be atleast 8 characters minimum!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
      "Please use atleast 1 uppercase, 1 lowercase and 1 number!"
    )
    .required("Password is required!"),
});

const initialValues = {

  Email: "",
  Password: "",
};

const Signin = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SigninSchema,
    onSubmit: (values) => console.log(values),
  });

  const formLabels = [ "Email", "Password"];

  return (
    <div>
      <Typography variant="h4" mb={3} align="center">Sign In Form!</Typography>
      <form onSubmit={formik.handleSubmit} className='form'>
        
        {formLabels.map((label) => {
            const name=label.replace(/ +/g, "")
            const error=eval("formik.errors."+name)
            const isError = error && eval("formik.touched."+name)
            
            return(    
                <InputForm
                    key={name}
                    name={name}
                    placeholder={`Enter ${label}`}
                    handleChange={formik.handleChange}
                    label={label}
                    error={error}
                    isError={isError}
                  />
        )}
    )}

        <Button type="submit" variant="contained" size="medium" className="mButton">Submit</Button>
      </form>
    </div>
  );
};

export default Signin;
