// services/AuthService.ts
import axios from 'axios';

const API_URL = 'http://172.16.5.95:3001/api'; // Update this with your actual API URL

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};