// import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { axiosInstance } from '../../config'
import { Context } from '../../context/Context'
import {
  Container,
  LoginButton,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginTitle,
  RegButton,
  RegLink,
} from './LoginElement'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const response = await axiosInstance.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' })
    }
  }

  return (
    <Container>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel>Username</LoginLabel>
        <LoginInput
          type='text'
          placeholder='Enter your username'
          ref={userRef}
        />
        <LoginLabel>Password</LoginLabel>
        <LoginInput
          type='password'
          placeholder='Enter your password'
          ref={passwordRef}
        />
        <LoginButton>Login</LoginButton>
      </LoginForm>
      <RegButton type='submit' disabled={isFetching}>
        <RegLink to='/register'>Register</RegLink>
      </RegButton>
    </Container>
  )
}

export default Login
