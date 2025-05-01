// utils/api.js
import axios from 'axios';

// 1) Read the base URL from your .env.local
//    e.g. NEXT_PUBLIC_API_BASE_URL=https://api.mybackend.com
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

// 2) Create an Axios instance with that base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // uncomment if you need to send cookies
});
// Default export if you need raw axios calls:
export default api;