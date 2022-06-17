import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  flex: 3;
  height: 60%;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SidebarTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: 1px solid #57606f;
  border-bottom: 1px solid #57606f;
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`
export const SidebarImg = styled.img`
  margin-top: 15px;
  width: 80%;
  border-radius: 50%;
`
export const SidebarDesc = styled.p`
  padding: 30px;
  text-align: justify;
`
export const SidebarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  margin-left: 50px;
`
export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const SidebarListItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`
export const SidebarSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`
// export const Container = styled.div``
