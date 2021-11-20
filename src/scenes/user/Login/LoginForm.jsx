import { Formik, Form } from "formik";
import FormikField from "../Register/FormikField";
import * as yup from "yup";
import "./login.scss";
import ReactPlayer from 'react-player';
import video from '../../../video/login.mp4';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import login from '../../../images/login.jpg'
import { useSelector , useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase/firebase";
import { setAuth } from "../../../redux/userReducer";

const LoginForm = () => {

  //Check wether is user is logged in or not from state mangment
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

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
      }
    }catch(error){
      //If the email is not registered and not found in DB
      console.log(error.message)
    }
  };

  return (
    <section>

      <div className="row">
        <div className="col-5 mt-4 ms-4">

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
                        <a className="underlineHover" href="#">
                          create a new account?
                        </a>
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
        {/* <div className='player-wrapper col-6'>
      
                    <ReactPlayer
                        playing={true}
                        muted
                        loop
                        className='react-player'
                        url={video}
                        width='80%'
                        height='80%'
                    />
                </div> */}
      </div>
    </section>

  );
};
export default LoginForm;
