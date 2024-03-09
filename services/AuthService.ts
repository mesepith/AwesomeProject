// services/AuthService.ts
import axios from 'axios';
import { setToken } from '../utils/TokenService';
import { API_BASE_URL } from '../config/config'; // Import the base URL from the config

export const register = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials);

  if (response.data.token) {
    await setToken(response.data.token); // Use setToken to save the JWT
  }
  
  return response.data;
};
