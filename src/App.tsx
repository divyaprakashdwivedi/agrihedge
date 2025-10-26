import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SimulateTrade from './pages/SimulateTrade';
import PricePrediction from './pages/PricePrediction';
import EContracts from './pages/EContracts';
import LearningCenter from './pages/LearningCenter';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/simulate-trade"
            element={
              <ProtectedRoute>
                <SimulateTrade />
              </ProtectedRoute>
            }
          />
          <Route
            path="/price-prediction"
            element={
              <ProtectedRoute>
                <PricePrediction />
              </ProtectedRoute>
            }
          />
          <Route
  path="/e-contracts"
  element={
    <ProtectedRoute>
      <EContracts />
    </ProtectedRoute>
  }
/>
