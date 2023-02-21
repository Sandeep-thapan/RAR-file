import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from '../Context';
import { Formik } from 'formik';


const Login = () => {
    const context = useContext(Provider);
    const navigate = useNavigate();

    useEffect(() => {
        if(context.user){
            navigate("/")
        }
    })

const login = (username, password) => {
    const resp = context.login(username, password);

    if(resp == true){
navigate("/");
    }
    else{
        alert("Invalid username password")
    }
}

    return (
        <div>
            Login..
            <Formik
       initialValues={{ username: '', password: '' }}
      
       onSubmit={(values, { setSubmitting }) => {
        login(values.username, values.password);
        setSubmitting(false);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <label>Username</label>
           <input
             type="text"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
           />
           <label>Password</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
        </div>
    );
}

export default Login;
