export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  phone?: string;
  address?: string;
  created_at: string;
  updated_at: string;
}

export interface Room {
  id: number;
  name: string;
  type: string;
  description: string;
  capacity: number;
  base_price: number;
  images: string[];
  amenities: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: number;
  user_id: number;
  room_id: number;
  check_in_date: string;
  check_out_date: string;
  guests_count: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  reservation_code: string;
  special_requests?: string;
  room?: Room;
  user?: User;
  payments?: Payment[];
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: number;
  reservation_id: number;
  payment_method: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  amount: number;
  payment_reference?: string;
  payment_data?: any;
  created_at: string;
  updated_at: string;
}

export interface RoomAvailability {
  id: number;
  room_id: number;
  date: string;
  is_available: boolean;
  price?: number;
}

export interface AuthResponse {
  user: User;
  token: string;
  message: string;
}

export interface BookingSearchParams {
  check_in_date: string;
  check_out_date: string;
  guests_count: number;
}

export interface BookingFormData {
  room_id: number;
  check_in_date: string;
  check_out_date: string;
  guests_count: number;
  special_requests?: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
}