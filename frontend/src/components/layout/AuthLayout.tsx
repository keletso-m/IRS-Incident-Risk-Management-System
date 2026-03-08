import React from 'react';

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="auth-root">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="brand-name">TeamOps</span>
        </div>

        <div className="left-content">
          <h1>Incident &amp; Risk<br /><span>Under Control.</span></h1>
          <p>
            A unified platform for engineering teams to detect, report, and resolve
            incidents — with full audit trails and enterprise risk visibility.
          </p>
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat">
              <div className="stat-value">&lt; 2min</div>
              <div className="stat-label">Avg Response</div>
            </div>
            <div className="stat">
              <div className="stat-value">4 Roles</div>
              <div className="stat-label">RBAC Support</div>
            </div>
          </div>
        </div>

        <div className="left-footer">
          <div className="status-pill">
            <div className="status-dot" />
            <span className="status-text">All systems operational</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="auth-container">
          {children}
        </div>
      </div>
    </div>
  );
};
