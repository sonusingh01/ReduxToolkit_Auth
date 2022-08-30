import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
 
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .required('Invalid.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )


  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
    navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div  style={{backgroundColor:" #f2f2f2 "}}>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and go to Dashboard</p>
      </section>

      <section className='form'>

        <Formik
           initialValues={{
            email: '',
            password:"",
          }}
          validationSchema={SignupSchema}
          onSubmit={onsubmit}
        
        >
        {({ errors, touched, isValidating }) => (
 <Form onSubmit={onSubmit} onChange={onChange}>
 <div className='form-group'>
   <Field
     type='email'
     className='form-control'
     id='email'
     name='email'
     value={email}
     placeholder='Enter your email'
     
   />
    {errors.email && touched.email ? (
             <div style={{color:"red"}}>{errors.email}</div>
           ) : null}
 </div>
 <div className='form-group'>
   <Field
     type='password'
     className='form-control'
     id='password'
     name='password'
     value={password}
     placeholder='Enter password'
    
   />
   {errors.password && touched.password ? (
             <div  style={{color:"red"}}>{errors.password}</div>
           ) : null}
 </div>

 <div className='form-group'>
   <button type='submit' className='btn btn-block'>
     Submit
   </button>
 </div>
</Form>
        )}
       
        </Formik>
      </section>
    </div>
  )
}

export default Login
