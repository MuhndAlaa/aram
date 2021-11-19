import { Formik, Form } from "formik";
import FormikField from "./FormikField";
import * as yup from "yup";
import './RegisterForm.css';
import ReactPlayer from 'react-player';
import video from '../../../video/register.mp4';
const RegisterForm = () => {
  const initialValues = {
    firstName: '',
    lastName:'',
    userName:'',
    email: "",
    password: "",
    confirmPass:"",
  };
  const onSubmit=(values) =>{
      // setTimeout(() => {
      //      alert(JSON.stringify(values, null, 2));
      //   axios
      //     .post("http://localhost:3001/register", {
      //       username: values.userName,
      //       password: values.password,
      //     })
      //     .then((response) => {
      //       console.log("the respone",response);
      //     });
      //    }, 500)
    console.log(values);
      };     
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
    lastName: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
    userName: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPass: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "it doesn't match your password"),
  });
    return (
      <section>
     
           <div className="row container">
             <div className="col-5">
                  <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                  >{(formik) => {
                return (
                  <div className="wrapper fadeInDown">
                    <Form className="regForm">
                      <div id="formContent">
                        <h2 className="mt-4">Register</h2>
                        <FormikField
                          className="regInput fadeIn"
                          label="First Name"
                          name="firstName"
                          type="text"
                        />
                        <FormikField
                          className="regInput fadeIn"
                          label="Last Name"
                          name="lastName"
                          type="text"
                        />
                        <FormikField
                          className="regInput fadeIn"
                          label="User Name"
                          name="userName"
                          type="text"
                        />
                        <FormikField
                          className="regInput fadeIn"
                          label="Email"
                          name="email"
                          type="email"
                        />
                        <FormikField
                          className="regInput fadeIn"
                          label="Password"
                          name="password"
                          type="password"
                        />
                        <FormikField
                          className="regInput fadeIn"
                          label="Confirm Password"
                          name="confirmPass"
                          type="password"
                        />
                     <button  className="mb-5 mt-3 forms_btn" type="submit">
                          Register
                        </button>
                        <div id="formFooter">
                          <a className="underlineHover" href="#">
                            Already got an account?
                          </a>
                        </div>
                      </div>
                    </Form>
                  </div>
                );}
                }</Formik>
              </div>
             
                   <div className='player-wrapper lefttt col-7'>
   
                    <ReactPlayer
                        playing={true}
                        muted
                        loop
                        className='react-player mard'
                        url={video}
                        width='80%'
                        height='80%'
                    />
             
              </div>
             
              </div>
              </section>
              
 
    
 );
}

export default RegisterForm;