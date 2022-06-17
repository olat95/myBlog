const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const hostname = 'localhost'
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')

dotenv.config()
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('database connection successful'))
  .catch((err) => {
    console.log(err)
  })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded!!')
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API running...')
  })
}

app.listen(process.env.PORT || port, hostname, () => {
  console.log(`backend is running at server https://${hostname}:${port}`)
})
