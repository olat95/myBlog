import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
`
export const NavLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavCenter = styled.div`
  flex: 6;
`
export const NavRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`
export const NavbarListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const NavbarRImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
