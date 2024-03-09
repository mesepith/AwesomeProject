// services/ApiService.ts
import axios from 'axios';
import { getToken } from '../utils/TokenService';
import { API_BASE_URL } from '../config/config'; // Import the base URL from the config

  export const securedApiCall = async () => {
    const token = await getToken();
    const response = await axios.get(`${API_BASE_URL}/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
