import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';
import { usePasswordStrength } from '../../hooks/usePasswordStrength';
import type { RegisterPayload } from '../../types/auth.types';
import type { UserRole } from '../../types/auth.types';

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
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
const RoleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

type RegisterFormData = RegisterPayload & { confirmPassword: string };

const ROLES: { value: UserRole; label: string }[] = [
  { value: 'engineer', label: 'Engineer' },
  { value: 'security_analyst', label: 'Security Analyst' },
  { value: 'auditor', label: 'Auditor' },
  { value: 'admin', label: 'Admin' },
];

export const RegisterForm: React.FC = () => {
  const { register: registerUser, isLoading, error, clearError } = useAuth();
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const watchedPwd = watch('password', '');
  const strength = usePasswordStrength(watchedPwd);

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

  const onSubmit = async (data: RegisterFormData) => {
    setSubmitError('');
    clearError();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...payload } = data;
    try {
      await registerUser(payload);
    } catch (err) {
      setSubmitError((err as Error).message || 'Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <Alert type="error" message={submitError || error || ''} visible={!!(submitError || error)} />

      <div className="form-row">
        <Input
          id="reg-firstname"
          label="First Name"
          type="text"
          placeholder="Keletso"
          autoComplete="given-name"
          icon={<UserIcon />}
          error={errors.firstName?.message}
          {...register('firstName', { required: 'First name is required' })}
        />
        <Input
          id="reg-lastname"
          label="Last Name"
          type="text"
          placeholder="Monyamane"
          autoComplete="family-name"
          icon={<UserIcon />}
          error={errors.lastName?.message}
          {...register('lastName', { required: 'Last name is required' })}
        />
      </div>

      <Input
        id="reg-email"
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

      <div className="field">
        <label htmlFor="reg-role">Your Role</label>
        <div className="input-wrap select-wrap">
          <span className="input-icon"><RoleIcon /></span>
          <select id="reg-role" className={errors.role ? 'error' : ''} {...register('role', { required: 'Please select a role' })}>
            <option value="">Select a role...</option>
            {ROLES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
        {errors.role && <span className="field-error">{errors.role.message}</span>}
      </div>

      <div className="field">
        <Input
          id="reg-password"
          label="Password"
          type={showPwd ? 'text' : 'password'}
          placeholder="Min. 8 characters"
          autoComplete="new-password"
          icon={<LockIcon />}
          error={errors.password?.message}
          suffix={
            <button type="button" className="pwd-toggle" onClick={() => setShowPwd(p => !p)} tabIndex={-1}>
              {showPwd ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
          {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum 8 characters' } })}
        />
        {watchedPwd && (
          <div className="pwd-strength">
            <div className="strength-bar">
              <div className="strength-fill" style={{ width: strength.percent, background: strength.color }} />
            </div>
            <span className="strength-label" style={{ color: strength.color }}>{strength.level}</span>
          </div>
        )}
      </div>

      <Input
        id="reg-confirm"
        label="Confirm Password"
        type={showConfirm ? 'text' : 'password'}
        placeholder="Re-enter password"
        autoComplete="new-password"
        icon={<LockIcon />}
        error={errors.confirmPassword?.message}
        suffix={
          <button type="button" className="pwd-toggle" onClick={() => setShowConfirm(p => !p)} tabIndex={-1}>
            {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        }
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: val => val === watchedPwd || 'Passwords do not match',
        })}
      />

      <Button type="submit" loading={isLoading}>Create Account</Button>

      <p className="terms">
        By creating an account you agree to our{' '}
        <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
};
