import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  flex: 9;
`
export const SPWrapper = styled.div`
  padding: 20px;
`
export const SPImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  object-fit: cover;
`
export const SPTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: 'Lora', serif;
  font-size: 50px;
  font-weight: 700;
`
export const SPEdit = styled.div`
  float: right;
  font-size: 16px;
`
export const SPInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #12cbc4;
  font-family: 'Varela Round', sans-serif;
`
export const SPAuthor = styled.span``
export const SPLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const SPDate = styled.span``
export const SPDesc = styled.p`
  color: #666;
  font-size: 20px;
  line-height: 25px;
  text-align: justify;

  &::first-letter {
    margin-left: 20px;
    font-size: 50px;
    font-weight: 600;
  }
`
// export const Container = styled.div``
// export const Container = styled.div``
