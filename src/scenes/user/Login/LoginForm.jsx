import { Formik, Form } from "formik";
import FormikField from "../Register/FormikField";
import * as yup from "yup";
import "./login.scss";
import login from '../../../images/login.jpg'
import { useSelector , useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase/firebase";
import { setAuth } from "../../../redux/userReducer";
import { Link , useHistory} from 'react-router-dom';
import {Navigation} from '../../landing-page/navbar/Navigation';
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import loader from '../../../video/loader3.mp4';


const LoginForm = () => {
  const [loading , setLoading] = useState('loader')
  //Check wether is user is logged in or not from state mangment
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Must Contain at least One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });



  const onSubmit = async (values) => { //Login Account function
    try{
      if(!user){
        //If the email is registered and in DB
        await signInWithEmailAndPassword(auth , values.email , values.password)
        dispatch(setAuth(true))
        history.push("/")
      }
    }catch(error){
      //If the email is not registered and not found in DB
      console.log(error.message)
    }
  };
  useEffect(() => {
    setLoading('loader_display')
  }, []);
  return (
    <>
       <div className={loading}>
          <ReactPlayer
            playing={true}
            muted
            loop
            className='react-player mard'
            url={loader}
            width='80%'
            height='80%'
          />
        </div>
    <Navigation/>
 
 
    <section className="login">

      <div className="row align-items-center">
        <div className="col-5 ms-4">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <div className="wrapper fadeInDown">

                  <Form className="form regForm">

                    <div id="formContent">



                      <h2 className="m-4">Login</h2>
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
                      {/* <button  type="submit" class="btn btn-danger btn-rounded">Danger</button> */}

                      <button className="mb-5 mt-3 forms_btn" type="submit">
                        Login
                      </button>
                      <div id="formFooter">
                        <Link className="underlineHover" to="/register">
                          create a new account?
                        </Link>
                      </div>
                    </div>
                  </Form>

                </div>
              );
            }}
          </Formik>
        </div>
        <div className="col-1">

        </div>
        <div className="col-5 ms-5 mt-4">
          <img className="w-100" src={login} alt="Second slide" />
        </div>
      </div>
    </section>
    </>
  );
};
export default LoginForm;
