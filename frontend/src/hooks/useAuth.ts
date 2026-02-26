import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import type { LoginPayload, RegisterPayload } from '../types/auth.types';

export function useAuth() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, error, login, register, logout, clearError } =
    useAuthStore();

  const handleLogin = useCallback(
    async (payload: LoginPayload) => {
      await login(payload);
      navigate('/dashboard');
    },
    [login, navigate]
  );

  const handleRegister = useCallback(
    async (payload: RegisterPayload) => {
      await register(payload);
      navigate('/dashboard');
    },
    [register, navigate]
  );

  const handleLogout = useCallback(() => {
    logout();
    navigate('/auth');
  }, [logout, navigate]);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    clearError,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
}
