import styled from 'styled-components'
import { Link, Form, redirect, useNavigate } from 'react-router-dom'
import { FormRow, SubmitBtn } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useUserContext } from '../context/user_context'

// export const action = async ({ request }) => {
//   const formData = await request.formData()
//   const data = Object.fromEntries(formData)
//   try {
//     await customFetch.post('/auth/login', data)
//     toast.success('Login successful')
//     return redirect('/')
//   } catch (error) {
//     toast.error(error?.response?.data?.msg)
//     return error
//   }
// }
const Login = () => {
  const navigate = useNavigate()

  const { loginUserData } = useUserContext()

  const onSubmit = async (e) => {
    // e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    try {
      await customFetch.post('/auth/login', data)
      loginUserData()

      toast.success('Login successful')
      navigate('/')
    } catch (error) {
      toast.error(error?.response?.data?.msg)
    }
  }

  return (
    <Wrapper>
      <Form method='post' className='form' onSubmit={onSubmit}>
        <h4>login</h4>
        <FormRow type='email' name='email' defaultValue='benjamin@yahoo.com' />
        <FormRow type='password' name='password' defaultValue='benjamin' />
        <SubmitBtn />
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
    // <Wrapper>
    //   <Form method='post' className='form'>
    //     <h4>login</h4>
    //     <FormRow type='email' name='email' />
    //     <FormRow type='password' name='password' />
    //     <SubmitBtn />
    //     <p>
    //       Not a member yet?
    //       <Link to='/register' className='member-btn'>
    //         Register
    //       </Link>
    //     </p>
    //   </Form>
    // </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`
export default Login
