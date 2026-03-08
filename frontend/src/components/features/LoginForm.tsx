import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';
import type { LoginPayload } from '../../types/auth.types';

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const LoginForm: React.FC = () => {
  const { login, isLoading, error, clearError } = useAuth();
  const [showPwd, setShowPwd] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>();

  const onSubmit = async (data: LoginPayload) => {
    setSubmitError('');
    clearError();
    try {
      await login(data);
    } catch (err) {
      setSubmitError((err as Error).message || 'Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <Alert type="error" message={submitError || error || ''} visible={!!(submitError || error)} />

      <Input
        id="login-email"
        label="Work Email"
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
        icon={<MailIcon />}
        error={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
        })}
      />

      <Input
        id="login-password"
        label="Password"
        type={showPwd ? 'text' : 'password'}
        placeholder="••••••••"
        autoComplete="current-password"
        icon={<LockIcon />}
        error={errors.password?.message}
        suffix={
          <button type="button" className="pwd-toggle" onClick={() => setShowPwd(p => !p)} tabIndex={-1}>
            {showPwd ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        }
        {...register('password', { required: 'Password is required' })}
      />

      <div className="form-meta">
        <label className="checkbox-label">
          <input type="checkbox" {...register('rememberMe')} /> Remember me
        </label>
        <a href="/forgot-password" className="forgot-link">Forgot password?</a>
      </div>

      <Button type="submit" loading={isLoading}>Sign In</Button>
    </form>
  );
};
