import { useMemo } from 'react';

export type StrengthLevel = 'weak' | 'fair' | 'good' | 'strong' | '';

interface PasswordStrength {
  score: number;
  level: StrengthLevel;
  color: string;
  percent: string;
}

export function usePasswordStrength(password: string): PasswordStrength {
  return useMemo(() => {
    if (!password) return { score: 0, level: '', color: 'transparent', percent: '0%' };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const levels: Record<number, Omit<PasswordStrength, 'score'>> = {
      1: { level: 'weak', color: '#DC2626', percent: '25%' },
      2: { level: 'fair', color: '#F59E0B', percent: '50%' },
      3: { level: 'good', color: '#3B82F6', percent: '75%' },
      4: { level: 'strong', color: '#16A34A', percent: '100%' },
    };

    return { score, ...(levels[score] ?? { level: '', color: 'transparent', percent: '0%' }) };
  }, [password]);
}
