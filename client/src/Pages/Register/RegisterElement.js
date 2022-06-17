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
    url('https://wallpaperaccess.com/full/477393.jpg');
  background-size: cover;
  font-family: 'Josefin Sans', sans-serif;
`
export const RegisterTitle = styled.span`
  font-size: 50px;
`
export const RegisterForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const RegisterLabel = styled.label`
  margin: 10px 0;
`
export const RegisterInput = styled.input`
  padding: 10px;
  background-color: #fff;
  width: 250px;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`
export const RegisterButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  padding: 15px;
  background-color: #12cbc4;
  color: #fff;
  border-radius: 10px;
  font-family: 'Varela', sans-serif;
  font-size: 15px;
  border: none;
`
export const LogButton = styled.button`
  position: absolute;
  top: 120px;
  right: 20px;
  cursor: pointer;
  font-family: 'Varela', sans-serif;
  font-size: 15px;
  margin-top: 20px;
  padding: 15px;
  background-color: #ee5253;
  color: #fff;
  border-radius: 10px;
  border: none;
`
export const LogLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const RegisterError = styled.p`
  color: red;
  margin-top: 15px;
`
