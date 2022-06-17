import React from 'react'
import jet from '../../images/jet.jpg'
import {
  BigTitle,
  Container,
  HeaderImg,
  HeadTitles,
  SmallTitle,
} from './HeaderElement'

const Header = () => {
  return (
    <Container>
      <HeadTitles>
        <SmallTitle>My Personal</SmallTitle>
        <BigTitle>Blog</BigTitle>
      </HeadTitles>
      <HeaderImg src={jet} alt='' />
    </Container>
  )
}

export default Header
