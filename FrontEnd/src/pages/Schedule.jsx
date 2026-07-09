import { Clock, Calendar as CalendarIcon, User } from 'lucide-react';

const scheduleData = [
  { time: '08:00 AM - 09:00 AM', task: 'Morning Staff Meeting', doctor: 'All Staff', type: 'meeting' },
  { time: '09:00 AM - 11:30 AM', task: 'Patient Consultations', doctor: 'Dr. Petra Winsburry', type: 'consultation' },
  { time: '10:00 AM - 02:00 PM', task: 'Heart Bypass Surgery', doctor: 'Dr. Olivia Martinez', type: 'surgery' },
  { time: '01:00 PM - 03:00 PM', task: 'Orthopedic Evaluations', doctor: 'Dr. Ameena Karim', type: 'consultation' },
  { time: '03:30 PM - 05:00 PM', task: 'Department Review', doctor: 'Dr. James Smith', type: 'meeting' },
];

export default function Schedule() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Doctors' Schedule</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>View daily schedule, surgeries, and meetings</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <CalendarIcon size={20} color="var(--accent-primary)" /> Today: 12 July 2028
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          {scheduleData.map((sched, idx) => (
            <div key={idx} style={{ 
              display: 'flex', gap: '1.5rem', padding: '1rem', borderRadius: '12px',
              background: sched.type === 'meeting' ? 'var(--accent-teal-light)' : sched.type === 'surgery' ? 'var(--danger-light)' : 'var(--bg-main)'
            }}>
              <div style={{ width: '150px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                <Clock size={16} /> {sched.time}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1.125rem', fontWeight: 600, color: sched.type === 'meeting' ? 'var(--accent-teal)' : sched.type === 'surgery' ? 'var(--danger)' : 'var(--text-primary)' }}>
                  {sched.task}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  <User size={14} /> {sched.doctor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
