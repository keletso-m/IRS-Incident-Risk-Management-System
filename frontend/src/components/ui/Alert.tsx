import React from 'react';

interface AlertProps {
  type: 'error' | 'success';
  message: string;
  visible: boolean;
}

const icons = {
  error: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

export const Alert: React.FC<AlertProps> = ({ type, message, visible }) => {
  if (!visible) return null;
  return (
    <div className={`alert alert-${type}`} role="alert">
      {icons[type]}
      <span>{message}</span>
    </div>
  );
};
