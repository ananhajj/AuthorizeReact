import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup";


function Register(){
const formik=useFormik({
    initialValues:{
        userName:'',
        email:'',
        password:'',
        phone:'',
        gender:'',
    },onSubmit:RegisterUser,
    validationSchema: Yup.object({
     userName: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
          phone: Yup.string()
        .matches(/^\d*$/, 'Phone number must contain digits only')
        .nullable(), 
      gender: Yup.string().nullable(), 
    }),
});
async function RegisterUser(){
  const {data}=await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
  console.log(data);
}
console.log(formik.errors);
    return(
        <>
        <div className="border border-1 container mt-5 "> 
            <div className="d-flex justify-content-center  align-items-center mt-5">

                <h2 className="text-primary p-3  ">Register User</h2>
            </div>
             
        <form className="d-flex justify-content-center  mt-3 " onSubmit={formik.handleSubmit}>
    <div className="w-50 p-3">
         <div className="form-floating mb-3">
    <input type="text" className="form-control" id="userNameID" placeholder="ananqrareya" name="userName" value={formik.userName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <label htmlFor="userNameID">userName</label>
      {formik.errors.userName && formik.touched.userName && (
                <div className="alert alert-danger">{formik.errors.userName}</div>
              )}
  </div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="emailID" placeholder="name@example.com" name="email" value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <label htmlFor="emailID">Email address</label>
     {formik.errors.email && formik.touched.email && (
                <div className="alert alert-danger">{formik.errors.email}</div>
              )}
  
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
    <label htmlFor="floatingPassword">Password</label>
        {formik.errors.password && formik.touched.password && (
                <div className="alert alert-danger">{formik.errors.password}</div>
              )}
      
  </div>
      <div className="form-floating mb-3">
    <input type="text" className="form-control" id="phoneID" placeholder="0597--" name="phone" value={formik.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <label htmlFor="phoneID">phoneNumber</label>
      {formik.errors.phone && formik.touched.phone && (
                <div className="alert alert-danger">{formik.errors.phone}</div>
              )}
  </div>
 <select
        className="form-select mb-3"
        aria-label="Select gender"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
      >
        <option value="Male" label="Gender" />
        <option value="Male" label="Male" />
        <option value="Female" label="Female" />
      </select>
        {formik.errors.gender && formik.touched.gender && (
              <div className="alert alert-danger">{formik.errors.gender}</div>
            )}
  
  <div className="d-flex justify-content-center mt-3">
<button type="submit" className="btn btn-primary">Register</button>

  </div>
</div>


        </form>
        </div>
        </>
    )
}
export default Register