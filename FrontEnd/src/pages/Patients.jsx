import { Search, Filter, Plus, UserPlus } from 'lucide-react';

const patientsData = [
  { id: 'PT-1001', name: 'Sarah Jenkins', age: 34, gender: 'Female', bloodGroup: 'A+', phone: '+1 234-567-8901', lastVisit: '10 Jul 2028' },
  { id: 'PT-1002', name: 'Michael Chang', age: 45, gender: 'Male', bloodGroup: 'O+', phone: '+1 234-567-8902', lastVisit: '05 Jul 2028' },
  { id: 'PT-1003', name: 'Emma Watson', age: 28, gender: 'Female', bloodGroup: 'B-', phone: '+1 234-567-8903', lastVisit: '22 Jun 2028' },
  { id: 'PT-1004', name: 'James Smith', age: 62, gender: 'Male', bloodGroup: 'AB+', phone: '+1 234-567-8904', lastVisit: '12 Jul 2028' },
];

export default function Patients() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Patients</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>View and manage patient records</p>
        </div>
        <button className="btn btn-primary">
          <UserPlus size={18} style={{ marginRight: '0.5rem' }} /> Add Patient
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div className="card-header stack-mobile" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: 0, gap: '1rem' }}>
          <div className="search-bar" style={{ width: '100%', maxWidth: '300px' }}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search patients by name or ID..." />
          </div>
          <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
            <Filter size={18} style={{ marginRight: '0.5rem' }} /> Filter
          </button>
        </div>
        
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Patient ID</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Age / Gender</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Blood Group</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Contact</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {patientsData.map((pt) => (
                <tr key={pt.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{pt.id}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div className="avatar" style={{ width: 32, height: 32 }}>
                        <img src={`https://i.pravatar.cc/150?u=${pt.id}`} alt={pt.name} />
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{pt.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {pt.age} yrs / {pt.gender}
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ background: 'var(--danger-light)', color: 'var(--danger)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {pt.bloodGroup}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{pt.phone}</td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{pt.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
