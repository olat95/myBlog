import React, { useState } from 'react'
import {
  Container,
  RegisterButton,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterTitle,
  LogButton,
  LogLink,
  RegisterError,
} from './RegisterElement'
// import axios from 'axios'
import { axiosInstance } from '../../config'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)

    try {
      const response = await axiosInstance.post('/auth/register', {
        username,
        email,
        password,
      })
      response.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Container>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterLabel>Username</RegisterLabel>
        <RegisterInput
          type='text'
          placeholder='Enter your username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <RegisterLabel>Email</RegisterLabel>
        <RegisterInput
          type='email'
          placeholder='Enter your email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <RegisterLabel>Password</RegisterLabel>
        <RegisterInput
          type='password'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterButton type='submit'>Register</RegisterButton>
      </RegisterForm>
      <LogButton>
        <LogLink to='/login'>Login</LogLink>
      </LogButton>
      {error && <RegisterError>Something went wrong!!</RegisterError>}
    </Container>
  )
}

export default Register
