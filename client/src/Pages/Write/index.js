import React, { useContext, useState } from 'react'
// import Writedefault from '../../images/write.jpg'
import '../../style/style.css'
import {
  Container,
  WFButton,
  WFWrapper,
  WriteForm,
  WriteImg,
  WriteInput,
  WriteInputt,
  WriteLabel,
  WriteTA,
} from './WriteElement'
// import axios from 'axios'
import { Context } from '../../context/Context'
import { axiosInstance } from '../../config'

const Write = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = { username: user.username, title, desc }
    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append('name', fileName)
      data.append('file', file)
      newPost.photo = fileName

      try {
        await axiosInstance.post('/upload', data)
      } catch (error) {
        console.log(error.message)
      }
    }

    try {
      const response = await axiosInstance.post('/posts', newPost)
      window.location.replace(`/post/${response.data._id}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
      {file && <WriteImg src={URL.createObjectURL(file)} alt='image post' />}
      <WriteForm onSubmit={handleSubmit}>
        <WFWrapper>
          <WriteLabel htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </WriteLabel>
          <WriteInput
            type='file'
            id='fileInput'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <WriteInputt
            type='text'
            placeholder='Title'
            id='fileTitle'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </WFWrapper>
        <WFWrapper>
          <WriteTA
            placeholder='Tell your story ...'
            type='text'
            onChange={(e) => setDesc(e.target.value)}
          ></WriteTA>
        </WFWrapper>
        <WFButton type='submit'>Publish</WFButton>
      </WriteForm>
    </Container>
  )
}

export default Write
