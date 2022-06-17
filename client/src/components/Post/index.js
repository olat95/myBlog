import React from 'react'
// import pic1 from '../../images/pic1.jpg'
import {
  Container,
  PostCategories,
  PostCategory,
  PostDate,
  PostDesc,
  PostDescription,
  PostImg,
  PostInfo,
  PostLink,
  PostTitle,
} from './PostElement'

const Post = ({ post }) => {
  return (
    <Container>
      {post.photo && <PostImg src={post.photo} alt='' />}
      <PostInfo>
        <PostCategories>
          {post.categories.map((cat, index) => (
            <PostCategory key={index}>{cat.name}</PostCategory>
          ))}
        </PostCategories>
        <PostLink to={`/post/${post._id}`}>
          <PostTitle>{post.title}</PostTitle>
        </PostLink>
        <hr />
        <PostDate>{new Date(post.createdAt).toDateString()}</PostDate>
      </PostInfo>
      <PostDescription>
        <PostDesc>{post.desc}</PostDesc>
      </PostDescription>
    </Container>
  )
}

export default Post
