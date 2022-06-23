import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required!"),
  
    lastName: Yup.string().required("Last Name is required!"),
  
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
      .min(8, "Password is too short - should be atleast 8 characters minimum!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
        "Please use atleast 1 uppercase, 1 lowercase and 1 number!"
      )
      .required("Password is required!"),
  });

