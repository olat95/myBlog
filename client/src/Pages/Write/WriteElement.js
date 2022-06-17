import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 50px;
`
export const WriteImg = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
`

export const WriteForm = styled.form`
  position: relative;
`
export const WFWrapper = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`
export const WriteLabel = styled.label``
export const WriteInput = styled.input`
  display: none;
`
export const WriteInputt = styled.input`
  font-size: 30px;
  border: none;
  border-bottom: 1px solid #2f3542;
  padding: 20px;
  width: 70vw;

  &::placeholder {
    color: #57606f;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`
export const WriteTA = styled.textarea`
  font-size: 20px;
  width: 70vw;
  height: 100vh;
  font-size: 20px;
  border: none;
  padding: 20px;
  font-family: 'Josefin Sans', sans-serif;

  &::placeholder {
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`
export const WFButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: #fff;
  padding: 15px;
  background-color: #12cbc4;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Varela', sans-serif;
`
