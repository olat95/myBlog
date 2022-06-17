import React, { useEffect, useState } from 'react'
import '../../style/style.css'
import {
  Container,
  SidebarDesc,
  SidebarImg,
  SidebarItem,
  SidebarLink,
  SidebarList,
  SidebarListItem,
  SidebarSocial,
  SidebarTitle,
} from './SidebarElement'
import myprofile from '../../images/pelumi edit3.jpg'
// import axios from 'axios'
import { axiosInstance } from '../../config'

const Sidebar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      const response = await axiosInstance.get('/categories')
      setCategories(response.data)
    }
    getCategory()
  }, [])

  return (
    <Container>
      <SidebarItem>
        <SidebarTitle>MY PROFILE</SidebarTitle>
        <SidebarImg src={myprofile} />
        <SidebarDesc>
          I am a fullstack software developer with a strong passion for learning
          new technologies. In the latter years, I will like to transition to
          network security, to be more specific, Ethical hacking. This has been
          my childhood dream and I'll stop at nothing to achieve it. Ready to
          learn and relearn.
        </SidebarDesc>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>CATEGORIES</SidebarTitle>
        <SidebarList>
          {categories.map((cat, index) => (
            <SidebarLink to={`/?cat=${cat.name}`}>
              <SidebarListItem key={index}>{cat.name}</SidebarListItem>
            </SidebarLink>
          ))}
        </SidebarList>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>FOLLOW ME</SidebarTitle>
        <SidebarSocial>
          <i className='topIcon fa-brands fa-facebook-square'></i>
          <i className='topIcon fa-brands fa-twitter-square'></i>
          <i className='topIcon fa-brands fa-linkedin'></i>
          <i className='topIcon fa-brands fa-github-square'></i>
          <i className='topIcon fa-brands fa-instagram-square'></i>
        </SidebarSocial>
      </SidebarItem>
    </Container>
  )
}

export default Sidebar
