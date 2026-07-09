import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Users, 
  Stethoscope, 
  Building2, 
  Clock, 
  CreditCard, 
  Package, 
  MessageSquare,
  Activity
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Appointments', path: '/appointments', icon: CalendarCheck },
  { name: 'Patients', path: '/patients', icon: Users },
  { name: 'Doctors', path: '/doctors', icon: Stethoscope },
  { name: 'Departments', path: '/departments', icon: Building2 },
  { name: "Doctors' Schedule", path: '/schedule', icon: Clock },
  { name: 'Payments', path: '/payments', icon: CreditCard },
  { name: 'Inventory', path: '/inventory', icon: Package },
  { name: 'Messages', path: '/messages', icon: MessageSquare, badge: 2 },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">
          {/* A simple placeholder logo resembling the screenshot's dots */}
          <Activity size={28} color="var(--accent-primary)" />
        </div>
        <span>WellNest</span>
      </div>

      <nav className="nav-menu">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="nav-item-icon" />
              <span style={{ flex: 1 }}>{item.name}</span>
              {item.badge && (
                <span style={{ 
                  backgroundColor: 'var(--danger)', 
                  color: 'white', 
                  fontSize: '0.65rem', 
                  padding: '0.1rem 0.4rem', 
                  borderRadius: '10px' 
                }}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
