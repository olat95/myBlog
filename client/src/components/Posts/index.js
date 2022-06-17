import React from 'react'
import Post from '../Post'
import { Container } from './PostsElement'

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts ? (
        posts.map((item, index) => <Post key={index} post={item} />)
      ) : (
        <>404</>
      )}
    </Container>
  )
}

export default Posts
