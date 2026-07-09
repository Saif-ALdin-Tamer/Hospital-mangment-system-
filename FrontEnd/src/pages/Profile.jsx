import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Profile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>My Profile</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage your personal information and credentials</p>
      </div>

      <div className="dashboard-grid">
        <div className="card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
          <div className="avatar" style={{ width: 120, height: 120 }}>
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Alfredo Westervelt" />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>Alfredo Westervelt</div>
            <div style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 500, marginTop: '0.25rem' }}>Hospital Administrator</div>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => alert('Opening Edit Profile dialog...')}>Edit Profile</button>
        </div>

        {/* Details Card */}
        <div className="card" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: 0 }}>
            <span className="card-title">Personal Information</span>
          </div>
          
          <div className="responsive-grid-2">
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Full Name</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <User size={16} color="var(--text-secondary)" />
                <span style={{ fontWeight: 500 }}>Alfredo Westervelt</span>
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Email Address</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <Mail size={16} color="var(--text-secondary)" />
                <span style={{ fontWeight: 500 }}>alfredo.admin@wellnest.com</span>
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Phone Number</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <Phone size={16} color="var(--text-secondary)" />
                <span style={{ fontWeight: 500 }}>+1 (555) 123-4567</span>
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Role & Permissions</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <Shield size={16} color="var(--success)" />
                <span style={{ fontWeight: 500, color: 'var(--success)' }}>Super Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
