import axios from 'axios';
import { AuthResponse, User, Room, Reservation, BookingSearchParams, BookingFormData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data: { name: string; email: string; password: string; password_confirmation: string; phone?: string; address?: string }) =>
    api.post<AuthResponse>('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post<AuthResponse>('/auth/login', data),
  
  logout: () =>
    api.post('/auth/logout'),
  
  me: () =>
    api.get<{ user: User }>('/auth/me'),
};

export const roomsAPI = {
  getAll: () =>
    api.get<{ rooms: Room[] }>('/rooms'),
  
  getById: (id: number) =>
    api.get<{ room: Room }>(`/rooms/${id}`),
  
  checkAvailability: (params: BookingSearchParams) =>
    api.get<{ available_rooms: Room[]; check_in_date: string; check_out_date: string; guests_count: number }>('/rooms/check-availability', { params }),
};

export const reservationsAPI = {
  getAll: () =>
    api.get<{ reservations: Reservation[] }>('/reservations'),
  
  getById: (id: number) =>
    api.get<{ reservation: Reservation }>(`/reservations/${id}`),
  
  create: (data: BookingFormData) =>
    api.post<{ reservation: Reservation; message: string }>('/reservations', data),
  
  cancel: (id: number) =>
    api.post<{ message: string }>(`/reservations/${id}/cancel`),
};

export default api;