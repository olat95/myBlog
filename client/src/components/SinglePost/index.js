import React, { useEffect, useState } from 'react'
import '../../style/style.css'
// import IOB from '../../images/iob.jpg'
import {
  Container,
  SPAuthor,
  SPDate,
  SPDesc,
  SPEdit,
  SPImg,
  SPInfo,
  SPLink,
  SPTitle,
  SPWrapper,
} from './SPElement'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'
import { axiosInstance } from '../../config'

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const response = await axiosInstance.get(`/posts/${path}`)
      setPost(response.data)
    }
    getPost()
  }, [path])
  return (
    <Container>
      <SPWrapper>
        {post.photo && <SPImg src={post.photo} alt='' />}
        <SPTitle>
          {post.title}
          <SPEdit>
            <i class='SPIcon fa-solid fa-pen-to-square'></i>
            <i class='SPIcon fa-solid fa-trash-arrow-up'></i>
          </SPEdit>
        </SPTitle>
        <SPInfo>
          <SPAuthor>
            Author:
            <SPLink to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </SPLink>
          </SPAuthor>
          <SPDate>{new Date(post.createdAt).toDateString()}</SPDate>
        </SPInfo>
        <SPDesc>{post.desc}</SPDesc>
      </SPWrapper>
    </Container>
  )
}

export default SinglePost
