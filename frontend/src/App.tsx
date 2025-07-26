import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './i18n'; // Import i18n configuration

// Layout Components
import MainLayout from './components/Layout/MainLayout';

// Pages
import Home from './pages/Home';
import RoomsList from './pages/Rooms/RoomsList';
import RoomDetail from './pages/Rooms/RoomDetail';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';
import Reservations from './pages/Dashboard/Reservations';
import AdminDashboard from './pages/Admin/AdminDashboard';

// UI Components
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsList />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
