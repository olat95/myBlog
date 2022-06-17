import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

export const Container = styled.div`
  width: 375px;
  margin: 0 25px 40px 25px;
`
export const PostImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PostCategories = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  color: #12cbc4;
  line-height: 20px;
  margin: 20px;
  cursor: pointer;
`
export const PostCategory = styled.span`
  padding-right: 10px;
`
export const PostLink = styled(LinkRoute)`
  text-decoration: none;
  color: inherit;
`
export const PostTitle = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  text-align: justify;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`
export const PostDate = styled.span`
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`
export const PostDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
export const PostDesc = styled.p`
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  text-align: justify;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
`
