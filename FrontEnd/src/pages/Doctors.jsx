import { Search, Filter, Mail, Phone, Calendar } from 'lucide-react';

const doctorsData = [
  { id: 'DR-001', name: 'Dr. Petra Winsburry', special: 'General Medicine', exp: '12 Years', rating: 4.8, status: 'Available', patients: 1250 },
  { id: 'DR-002', name: 'Dr. Ameena Karim', special: 'Orthopedics', exp: '8 Years', rating: 4.9, status: 'On Leave', patients: 840 },
  { id: 'DR-003', name: 'Dr. Olivia Martinez', special: 'Cardiology', exp: '15 Years', rating: 4.7, status: 'Available', patients: 2100 },
  { id: 'DR-004', name: 'Dr. Damian Sanchez', special: 'Neurology', exp: '10 Years', rating: 4.6, status: 'In Surgery', patients: 920 },
];

export default function Doctors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Doctors</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage hospital doctors and specialists</p>
        </div>
      </div>

      <div className="card stack-mobile" style={{ padding: '1.5rem', display: 'flex', gap: '1rem' }}>
        <div className="search-bar" style={{ width: '100%', maxWidth: '300px' }}>
          <Search size={18} color="var(--text-muted)" />
          <input type="text" placeholder="Search doctors by name or specialty..." />
        </div>
        <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
          <Filter size={18} style={{ marginRight: '0.5rem' }} /> Filter
        </button>
      </div>

      <div className="dashboard-grid">
        {doctorsData.map((doc) => (
          <div key={doc.id} className="card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <div className="avatar" style={{ width: 80, height: 80, margin: '0 auto' }}>
              <img src={`https://i.pravatar.cc/150?u=${doc.id}`} alt={doc.name} />
            </div>
            <div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{doc.name}</div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 500 }}>{doc.special}</div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <button className="icon-btn" style={{ background: 'var(--bg-main)' }}><Mail size={16} /></button>
              <button className="icon-btn" style={{ background: 'var(--bg-main)' }}><Phone size={16} /></button>
              <button className="icon-btn" style={{ background: 'var(--bg-main)' }}><Calendar size={16} /></button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{doc.exp}</span>
                <span>Experience</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{doc.rating} ★</span>
                <span>Rating</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{doc.patients}</span>
                <span>Patients</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
