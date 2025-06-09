import axios from 'axios'

// Stub axios instance (not used in fake-data mode)
export const api = axios.create({
  baseURL: '',
  timeout: 10000
})
