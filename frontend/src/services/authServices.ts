import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data.token;
};

export const signup = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/signup`, { username, password });
  return response.data.token;
};

export const getProjects = async (token: string) => {
  const response = await axios.get('http://localhost:5000/projects', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};