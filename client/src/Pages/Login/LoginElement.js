import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url('https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg');
  background-size: cover;
  font-family: 'Josefin Sans', sans-serif;
`
export const LoginTitle = styled.span`
  font-size: 50px;
`
export const LoginForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const LoginLabel = styled.label`
  margin: 10px 0;
`
export const LoginInput = styled.input`
  padding: 10px;
  background-color: #fff;
  border: none;
  width: 250px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`
export const LoginButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  padding: 15px;
  background-color: #12cbc4;
  color: #fff;
  border-radius: 10px;
  font-family: 'Varela', sans-serif;
  font-size: 15px;
  border: none;

  &:disabled {
    cursor: not-allowed;
    background-color: #81ecec;
  }
`
export const RegButton = styled.button`
  position: absolute;
  top: 120px;
  right: 20px;
  cursor: pointer;
  margin-top: 20px;
  padding: 15px;
  font-family: 'Varela', sans-serif;
  font-size: 15px;
  background-color: #ee5253;
  color: #fff;
  border-radius: 10px;
  border: none;
`
export const RegLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
