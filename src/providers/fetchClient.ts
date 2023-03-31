import axios from 'axios'

// WHEN WORKING WITH AN .env FILE
const __API_URL__ = import.meta.env.VITE_API_URL
const __API_KEY__ = import.meta.env.VITE_API_KEY

const defaultOptions = {
  baseURL: __API_URL__,
  headers: { 'X-Api-Key': __API_KEY__ }
}

const instance = axios.create(defaultOptions)

instance.interceptors.response.use(response => response.data)

export default instance
