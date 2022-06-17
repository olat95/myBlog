import React from 'react'
import pp from '../../images/pp.png'
import Sidebar from '../../components/Sidebar'
import {
  Container,
  SButton,
  SDeleteTitle,
  SForm,
  SInput,
  SLabel,
  SPInput,
  SPLabel,
  SProfileP,
  SProfilePImg,
  STitle,
  SUpdateTitle,
  SWrapper,
} from './SettingsElement'

const Settings = () => {
  return (
    <Container>
      <SWrapper>
        <STitle>
          <SUpdateTitle>Update Your Account</SUpdateTitle>
          <SDeleteTitle>Delete Account</SDeleteTitle>
        </STitle>
        <SForm>
          <SLabel>Profile Picture</SLabel>
          <SProfileP>
            <SProfilePImg src={pp} alt='' />
            <SPLabel htmlFor='fileInput'>
              <i className='settingsIcon fa-solid fa-user-ninja'></i>
            </SPLabel>
            <SPInput type='file' id='fileInput' />
          </SProfileP>
          <SLabel>Username</SLabel>
          <SInput type='text' placeholder='JohnDoe' />
          <SLabel>Email</SLabel>
          <SInput type='email' placeholder='doey@gmail.com' />
          <SLabel>Password</SLabel>
          <SInput type='password' />
          <SButton>Update</SButton>
        </SForm>
      </SWrapper>
      <Sidebar />
    </Container>
  )
}

export default Settings
