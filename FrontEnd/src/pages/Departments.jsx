import { Activity, Heart, Eye, Bone, Brain, Baby, Stethoscope } from 'lucide-react';

const departmentsData = [
  { id: 'DEP-01', name: 'Emergency Medicine', head: 'Dr. Petra Winsburry', doctors: 12, patients: 124, icon: Activity, color: 'var(--danger)' },
  { id: 'DEP-02', name: 'Cardiology', head: 'Dr. Olivia Martinez', doctors: 8, patients: 86, icon: Heart, color: 'var(--danger)' },
  { id: 'DEP-03', name: 'Orthopedics', head: 'Dr. Ameena Karim', doctors: 10, patients: 95, icon: Bone, color: 'var(--accent-teal)' },
  { id: 'DEP-04', name: 'Neurology', head: 'Dr. James Smith', doctors: 6, patients: 42, icon: Brain, color: 'var(--accent-primary)' },
  { id: 'DEP-05', name: 'Pediatrics', head: 'Dr. Emma Watson', doctors: 14, patients: 150, icon: Baby, color: '#f59e0b' },
  { id: 'DEP-06', name: 'Ophthalmology', head: 'Dr. Michael Chang', doctors: 5, patients: 65, icon: Eye, color: 'var(--accent-primary)' },
];

export default function Departments() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Departments</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>View medical departments and services</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {departmentsData.map((dept) => {
          const Icon = dept.icon;
          return (
            <div key={dept.id} className="card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-main)', color: dept.color, borderRadius: '12px' }}>
                  <Icon size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{dept.name}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Head: {dept.head}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{dept.doctors}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Specialists</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{dept.patients}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Patients</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
