import { Calendar, Clock, Plus, Search, Filter } from 'lucide-react';

const appointmentsData = [
  { id: 'APT-001', patient: 'Sarah Jenkins', doctor: 'Dr. Petra Winsburry', dept: 'General Medicine', date: '12 Jul 2028', time: '10:00 AM', status: 'Upcoming' },
  { id: 'APT-002', patient: 'Michael Chang', doctor: 'Dr. Ameena Karim', dept: 'Orthopedics', date: '12 Jul 2028', time: '11:30 AM', status: 'In Progress' },
  { id: 'APT-003', patient: 'Emma Watson', doctor: 'Dr. Olivia Martinez', dept: 'Cardiology', date: '13 Jul 2028', time: '09:00 AM', status: 'Upcoming' },
  { id: 'APT-004', patient: 'James Smith', doctor: 'Dr. Petra Winsburry', dept: 'General Medicine', date: '10 Jul 2028', time: '14:00 PM', status: 'Completed' },
];

export default function Appointments() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Appointments</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage and book patient appointments</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} style={{ marginRight: '0.5rem' }} /> Book Appointment
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div className="card-header stack-mobile" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: 0, gap: '1rem' }}>
          <div className="search-bar" style={{ width: '100%', maxWidth: '300px' }}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search appointments..." />
          </div>
          <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
            <Filter size={18} style={{ marginRight: '0.5rem' }} /> Filter
          </button>
        </div>
        
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>ID</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Patient</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Doctor & Dept</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Date & Time</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((apt) => (
                <tr key={apt.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{apt.id}</td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{apt.patient}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{apt.doctor}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{apt.dept}</div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <Calendar size={14} color="var(--text-muted)" /> {apt.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      <Clock size={14} color="var(--text-muted)" /> {apt.time}
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span className={`badge ${
                      apt.status === 'Upcoming' ? 'badge-outline-blue' : 
                      apt.status === 'Completed' ? 'badge-outline-blue' : // would be green ideally
                      'badge-outline-red'
                    }`} style={
                      apt.status === 'Completed' ? { color: 'var(--success)', borderColor: 'var(--success-light)' } : 
                      apt.status === 'In Progress' ? { color: '#f59e0b', borderColor: '#fef3c7' } : {}
                    }>
                      {apt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
