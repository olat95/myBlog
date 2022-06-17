import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://immense-scrubland-33957.herokuapp.com/api/',
})
