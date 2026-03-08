import type { AuthResponse, LoginPayload, RegisterPayload } from '../types/auth.types';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

async function request<T>(endpoint: string, options: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message ?? 'Something went wrong');
  }

  return data as T;
}

export const authService = {
  login: (payload: LoginPayload): Promise<AuthResponse> =>
    request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  register: (payload: RegisterPayload): Promise<AuthResponse> =>
    request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  logout: (): Promise<void> =>
    request<void>('/auth/logout', { method: 'POST' }),
};
