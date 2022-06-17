import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-family: 'Josefin Sans', sans-serif;
`
export const SWrapper = styled.div`
  flex: 9;
  padding: 20px;
`
export const STitle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`
export const SUpdateTitle = styled.span`
  font-size: 40px;
  margin-bottom: 20px;
  color: #57606f;
`
export const SDeleteTitle = styled.span`
  color: #ee5253;
  font-size: 15px;
  cursor: pointer;
`
export const SForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const SLabel = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
`
export const SProfileP = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`
export const SProfilePImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  margin: 20px;
  border-radius: 20px;
  object-fit: cover;
`
export const SPLabel = styled.label`
  font-size: 20px;
  margin-top: 20px;
`
export const SPInput = styled.input`
  display: none;
`
export const SInput = styled.input`
  color: #747d8c;
  margin: 10px 0;
  height: 30px;
  padding: 20px;
  border: none;
  font-family: 'Varela', sans-serif;
  border-bottom: 1px solid #a4b0be;

  &:focus {
    outline: none;
  }
`
export const SButton = styled.button`
  width: 150px;
  align-self: center;
  border-radius: 10px;
  color: #fff;
  background-color: #12cbc4;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
`
// export const Container = styled.div``
//
