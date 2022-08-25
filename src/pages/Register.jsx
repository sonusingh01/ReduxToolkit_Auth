import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";


const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
  .required('Invalid.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmpassword: Yup.string()
  .required('Invalid.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  const { name, email, password, confirmpassword} = formData

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
         navigate("/login")
    }

    // dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  

  const onSubmit = (e) => {
    if (password !== confirmpassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
        confirmpassword
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
  
    return <Spinner />
    
  }

  return (
    < div  style={{backgroundColor:" #f2f2f2 "}}>
      <section className='heading' >
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <Formik
         onSubmit={onSubmit}
          initialValues = {{
              name: '',
              email: '',
              password: '',
              confirmpassword: '',
          }}  validationSchema={registerSchema}>
            {({ errors, touched }) => (
              <Form onChange={onChange}>
              <div className='form-group'>
                <Field
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  placeholder='Enter your name'
                />
                {errors.name && touched.name ? (
                  <div style={{color:"red"}}>{errors.name}</div>
                ) : null}
              </div>
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
              </div>
              {errors.password && touched.password ? (
                  <div style={{color:"red"}}>{errors.password}</div>
                ) : null}
              <div className='form-group'>
                <Field
                  type='password'
                  className='form-control'
                  id='cpassword'
                  name='confirmpassword'
                  value={confirmpassword}
                  placeholder='Confirm password'
                 
                />
              </div>
              {errors.confirmpassword && touched.confirmpassword ? (
                  <div style={{color:"red"}}>{errors.confirmpassword}</div>
                ) : null}
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

export default Register
