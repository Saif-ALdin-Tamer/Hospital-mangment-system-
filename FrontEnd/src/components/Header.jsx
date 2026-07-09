import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Settings, Bell, User, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="search-bar">
        <Search size={18} color="var(--text-muted)" />
        <input type="text" placeholder="Search anything" />
      </div>

      <div className="header-actions">
        {/* Settings -> Routes to /settings */}
        <button className="icon-btn" onClick={() => navigate('/settings')}>
          <Settings size={20} />
        </button>
        
        {/* Notifications -> Routes to /messages */}
        <button className="icon-btn" style={{ position: 'relative' }} onClick={() => navigate('/messages')}>
          <Bell size={20} />
          <span style={{
            position: 'absolute',
            top: 8,
            right: 8,
            width: 8,
            height: 8,
            backgroundColor: 'var(--danger)',
            borderRadius: '50%'
          }}></span>
        </button>
        
        {/* Profile Dropdown */}
        <div style={{ position: 'relative' }}>
          <div className="user-profile" onClick={() => setShowProfile(!showProfile)}>
            <div className="avatar">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Alfredo Westervelt" />
            </div>
            <span>Alfredo Westervelt</span>
          </div>
          {showProfile && (
            <div className="dropdown-menu">
              <div className="dropdown-header">Alfredo Westervelt<br/><span style={{fontSize: '0.75rem', color:'var(--text-muted)', fontWeight: 400}}>Hospital Administrator</span></div>
              <button className="dropdown-item" onClick={() => { setShowProfile(false); navigate('/profile'); }}><User size={16}/> My Profile</button>
              <button className="dropdown-item" style={{color: 'var(--danger)'}} onClick={() => toast("Signing out...", {icon: '👋'})}><LogOut size={16}/> Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
