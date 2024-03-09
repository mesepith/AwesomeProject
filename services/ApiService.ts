// services/ApiService.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const securedApiCall = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const response = await axios.get('http://172.20.10.9:3001/api/protected', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
