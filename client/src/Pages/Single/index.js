import React from 'react'
import Sidebar from '../../components/Sidebar'
import SinglePost from '../../components/SinglePost'
import { Container } from './SElement'

const Single = () => {
  return (
    <Container>
      <SinglePost />
      <Sidebar />
    </Container>
  )
}

export default Single
