import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login(){
const formik=useFormik({
    initialValues:{
        email:'',
        password:'',
    },onSubmit:LoginUser,
     validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    }),
})
async function LoginUser(){
    const {data}=await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values);
    console.log(data);
}
    return(
        <>
         <div className="border border-1 container mt-5 "> 
            <div className="d-flex justify-content-center  align-items-center mt-5">

                <h2 className="text-primary p-3  ">Login User</h2>
            </div>
             
        <form className="d-flex justify-content-center   " onSubmit={formik.handleSubmit}>
    <div className="w-50 p-3">
         <div className="form-floating mb-3">
    <input type="email" className="form-control" id="emailID" placeholder="anan@gmail.com" name="email" value={formik.email} onChange={formik.email}   onBlur={formik.handleBlur}/>
    <label htmlFor="emailID">email</label>
     {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : null}
  </div>
  
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={formik.password} onChange={formik.handleChange}   onBlur={formik.handleBlur}/>
    <label htmlFor="floatingPassword">Password</label>
      {formik.touched.password && formik.errors.password ? (
                <div className="alert alert-danger">{formik.errors.password}</div>
              ) : null}
  </div>
  <div className="d-flex justify-content-center mt-3">
<button type="submit" className="btn btn-primary">Login</button>

  </div>
</div>


        </form>
        </div>
        </>
    )
}

export default Login