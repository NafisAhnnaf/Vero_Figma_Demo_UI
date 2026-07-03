import axios from 'axios';

class ApiService {
  private api;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        // In a real app, you would get the token from localStorage or your state manager
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle global errors (e.g., 401 Unauthorized)
        if (error.response?.status === 401) {
          console.error('Unauthorized! Please log in again.');
          // Optional: redirect to login or clear state
        }
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config = {}) {
    return this.api.get(url, config);
  }

  post(url: string, data = {}, config = {}) {
    return this.api.post(url, data, config);
  }

  put(url: string, data = {}, config = {}) {
    return this.api.put(url, data, config);
  }

  delete(url: string, config = {}) {
    return this.api.delete(url, config);
  }
}

export const api = new ApiService();
