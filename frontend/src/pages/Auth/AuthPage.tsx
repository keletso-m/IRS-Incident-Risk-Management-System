import React, { useState } from 'react';
import { AuthLayout } from '../../components/layout/AuthLayout';
import { LoginForm } from '../../components/features/LoginForm';
import { RegisterForm } from '../../components/features/RegisterForm';
import './Auth.css';

type Tab = 'login' | 'register';

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('login');

  return (
    <AuthLayout>
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Sign In
        </button>
        <button
          className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => setActiveTab('register')}
        >
          Create Account
        </button>
      </div>

      {activeTab === 'login' ? (
        <>
          <div className="form-header">
            <h2>Welcome back</h2>
            <p>Sign in to your TeamOps workspace</p>
          </div>
          <LoginForm />
        </>
      ) : (
        <>
          <div className="form-header">
            <h2>Create your account</h2>
            <p>Join your team on TeamOps</p>
          </div>
          <RegisterForm />
        </>
      )}
    </AuthLayout>
  );
};

export default AuthPage;
