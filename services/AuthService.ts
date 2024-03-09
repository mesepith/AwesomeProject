// services/AuthService.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://172.20.10.9:3001/api'; // Update this with your actual API URL

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);

  if (response.data.token) {
    await AsyncStorage.setItem('userToken', response.data.token);
  }
  
  return response.data;
};
