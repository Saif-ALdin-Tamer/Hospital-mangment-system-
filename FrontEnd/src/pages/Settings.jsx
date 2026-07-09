import { useState } from 'react';
import { Bell, Lock, Globe, Database, Moon, Shield } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('security');

  const getTabStyle = (tabId) => ({
    justifyContent: 'flex-start',
    background: activeTab === tabId ? 'var(--accent-teal-light)' : 'transparent',
    color: activeTab === tabId ? 'var(--accent-teal)' : 'var(--text-secondary)'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Settings & Preferences</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage system configurations and your account preferences</p>
      </div>

      <div className="dashboard-grid">
        <div className="card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem' }}>
          <button className="btn" style={getTabStyle('security')} onClick={() => setActiveTab('security')}>
            <Shield size={18} style={{ marginRight: '0.75rem' }}/> Account Security
          </button>
          <button className="btn" style={getTabStyle('notifications')} onClick={() => setActiveTab('notifications')}>
            <Bell size={18} style={{ marginRight: '0.75rem' }}/> Notifications
          </button>
          <button className="btn" style={getTabStyle('language')} onClick={() => setActiveTab('language')}>
            <Globe size={18} style={{ marginRight: '0.75rem' }}/> Language & Region
          </button>
          <button className="btn" style={getTabStyle('appearance')} onClick={() => setActiveTab('appearance')}>
            <Moon size={18} style={{ marginRight: '0.75rem' }}/> Appearance
          </button>
          <button className="btn" style={getTabStyle('system')} onClick={() => setActiveTab('system')}>
            <Database size={18} style={{ marginRight: '0.75rem' }}/> System Status
          </button>
        </div>

        <div className="card" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {activeTab === 'security' && (
            <>
              <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: 0 }}>
                <span className="card-title">Account Security</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Current Password</label>
                  <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginTop: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>New Password</label>
                  <input type="password" placeholder="Enter new password" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginTop: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Confirm New Password</label>
                  <input type="password" placeholder="Confirm new password" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginTop: '0.5rem' }} />
                </div>
                <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }} onClick={() => alert('Password updated successfully!')}>Update Password</button>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Two-Factor Authentication</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Add an extra layer of security to your account.</p>
                <button className="btn" style={{ border: '1px solid var(--border-color)' }} onClick={() => alert('Redirecting to 2FA setup...')}>Enable 2FA</button>
              </div>
            </>
          )}

          {activeTab === 'notifications' && (
            <>
              <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: 0 }}>
                <span className="card-title">Notification Preferences</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>Email Notifications</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Receive daily summaries and alerts via email</div>
                  </div>
                  <input type="checkbox" defaultChecked style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>SMS Alerts</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Receive urgent alerts via SMS</div>
                  </div>
                  <input type="checkbox" defaultChecked style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>Browser Push</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Enable desktop notifications while app is open</div>
                  </div>
                  <input type="checkbox" style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Save Preferences</button>
              </div>
            </>
          )}

          {activeTab === 'language' && (
            <>
              <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: 0 }}>
                <span className="card-title">Language & Region</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Display Language</label>
                  <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginTop: '0.5rem', background: 'var(--bg-card)' }}>
                    <option>English (US)</option>
                    <option>Spanish (ES)</option>
                    <option>French (FR)</option>
                    <option>Arabic (AR)</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Timezone</label>
                  <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginTop: '0.5rem', background: 'var(--bg-card)' }}>
                    <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                    <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                    <option>(GMT+00:00) London</option>
                    <option>(GMT+03:00) Riyadh</option>
                  </select>
                </div>
                <button className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Update Region</button>
              </div>
            </>
          )}

          {activeTab === 'appearance' && (
            <>
              <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: 0 }}>
                <span className="card-title">Appearance Settings</span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '150px', border: '2px solid var(--accent-teal)', borderRadius: '8px', padding: '1rem', textAlign: 'center', cursor: 'pointer', background: 'var(--accent-teal-light)', color: 'var(--accent-teal)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Light Mode</div>
                  <div style={{ fontSize: '0.75rem' }}>Default clean interface</div>
                </div>
                <div style={{ flex: 1, minWidth: '150px', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', textAlign: 'center', cursor: 'pointer', background: 'var(--bg-main)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Dark Mode</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Easy on the eyes</div>
                </div>
                <div style={{ flex: 1, minWidth: '150px', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', textAlign: 'center', cursor: 'pointer', background: 'var(--bg-main)' }}>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>System Auto</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Matches your OS</div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'system' && (
            <>
              <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: 0 }}>
                <span className="card-title">System Status & Details</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 500 }}>Main Server</span>
                  <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%' }}></span> Online</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 500 }}>Database Cluster</span>
                  <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%' }}></span> Online</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 500 }}>Payment Gateway (Stripe)</span>
                  <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%' }}></span> Online</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 500 }}>Last System Backup</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Today, 03:00 AM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 500 }}>App Version</span>
                  <span style={{ color: 'var(--text-secondary)' }}>v2.4.1-stable</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
