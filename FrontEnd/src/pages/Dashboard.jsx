import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Plus, Settings, Package } from 'lucide-react';
const patientData = [
  { name: '4 Jul', child: 40, adult: 105, elderly: 30 },
  { name: '5 Jul', child: 50, adult: 110, elderly: 40 },
  { name: '6 Jul', child: 60, adult: 90, elderly: 50 },
  { name: '7 Jul', child: 80, adult: 132, elderly: 38 },
  { name: '8 Jul', child: 55, adult: 120, elderly: 45 },
  { name: '9 Jul', child: 45, adult: 95, elderly: 35 },
  { name: '10 Jul', child: 70, adult: 110, elderly: 55 },
  { name: '11 Jul', child: 65, adult: 105, elderly: 40 },
];

const revenueData = [
  { name: '1', income: 1000, expense: 800 },
  { name: '2', income: 1200, expense: 900 },
  { name: '3', income: 1500, expense: 850 },
  { name: '4', income: 1100, expense: 950 },
  { name: '5', income: 3495, expense: 1200 },
  { name: '6', income: 2000, expense: 1000 },
  { name: '7', income: 2400, expense: 1100 },
];

function StatWidget({ title, value, percentage, isPositive, subtitle }) {
  return (
    <div className="card stat-widget">
      <div className="card-header" style={{ marginBottom: 0 }}>
        <span className="stat-header">
          {title}
        </span>
        <MoreHorizontal size={16} color="var(--text-muted)" />
      </div>
      <div className="stat-value-row">
        <span className="stat-value">{value}</span>
        <span className={`stat-badge ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {percentage}
        </span>
      </div>
      <span className="stat-subtitle">{subtitle}</span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-grid">
      
      {/* Top Row Widgets */}
      <div className="responsive-grid-2" style={{ gridColumn: 'span 8', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <StatWidget title="Total Invoice" value="1,287" percentage="+2.34%" isPositive={true} subtitle="38 more than yesterday" />
        <StatWidget title="Total Patients" value="965" percentage="+3.76%" isPositive={true} subtitle="45 more than yesterday" />
        <StatWidget title="Appointments" value="128" percentage="-1.56%" isPositive={false} subtitle="10 less than yesterday" />
        <StatWidget title="Bedroom" value="315" percentage="+1.84%" isPositive={true} subtitle="16 more than yesterday" />
      </div>

      {/* Calendar (Right Side) */}
      <div className="card" style={{ gridColumn: 'span 4', gridRow: 'span 3', padding: '0' }}>
        <div className="calendar-widget">
           <div className="card-header stack-mobile" style={{ gap: '1rem' }}>
             <span className="card-title">July 2028</span>
             <div style={{display: 'flex', gap: '1rem'}}>
               <span style={{cursor:'pointer'}}>&lt;</span>
               <span style={{cursor:'pointer'}}>&gt;</span>
             </div>
           </div>
           <div className="table-responsive">
             <table>
               <thead>
                 <tr>
                   <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td style={{color: 'var(--text-muted)'}}>25</td><td style={{color: 'var(--text-muted)'}}>26</td><td style={{color: 'var(--text-muted)'}}>27</td><td style={{color: 'var(--text-muted)'}}>28</td><td style={{color: 'var(--text-muted)'}}>29</td><td style={{color: 'var(--text-muted)'}}>30</td><td>1</td>
                 </tr>
                 <tr>
                   <td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
                 </tr>
                 <tr>
                   <td>9</td><td>10</td><td>11</td><td className="active">12</td><td>13</td><td>14</td><td>15</td>
                 </tr>
                 <tr>
                   <td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td>
                 </tr>
                 <tr>
                   <td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td>
                 </tr>
               </tbody>
             </table>
           </div>
           
           <div style={{ marginTop: '1.5rem' }}>
             <div className="card-header">
               <span style={{fontSize: '0.875rem', fontWeight: 600}}>Wednesday, 12 July</span>
               <button className="btn btn-primary" style={{padding: '0.25rem', borderRadius: '4px'}}>
                 <Plus size={16} />
               </button>
             </div>
             
             {/* Timeline Schedule placeholder */}
             <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.75rem' }}>
               <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--text-muted)', gap: '1.5rem'}}>
                 <span>08:00</span>
                 <span>09:00</span>
                 <span>10:00</span>
                 <span>11:00</span>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                 <div style={{ background: 'var(--accent-teal-light)', color: 'var(--accent-teal)', padding: '0.75rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-teal)' }}>
                   <div style={{fontWeight: 600, marginBottom: '0.25rem'}}>Morning Staff Meeting</div>
                   <div style={{fontSize: '0.65rem'}}>08:00 AM - 09:00 AM</div>
                 </div>
                 <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '8px' }}>
                   <div style={{fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)'}}>Patient Consultation - General Medicine</div>
                   <div style={{fontSize: '0.65rem', color: 'var(--text-muted)'}}>10:00 AM - 12:00 PM</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Patient Overview Chart */}
      <div className="card" style={{ gridColumn: 'span 4' }}>
        <div className="card-header">
          <div>
            <div className="card-title">Patient Overview</div>
            <div className="stat-subtitle">by Age Stages</div>
          </div>
          <select style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', fontSize: '0.75rem' }}>
            <option>Last 8 Days</option>
          </select>
        </div>
        <div style={{ height: 200, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={patientData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }} barSize={6}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: 'var(--text-muted)'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: 'var(--text-muted)'}} />
              <Tooltip cursor={{fill: 'var(--bg-main)'}} />
              <Bar dataKey="child" fill="var(--text-primary)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="adult" fill="var(--accent-teal)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="elderly" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="card" style={{ gridColumn: 'span 4' }}>
        <div className="card-header">
          <div className="card-title">Revenue</div>
          <div style={{ display: 'flex', gap: '0.25rem', background: 'var(--bg-main)', padding: '0.25rem', borderRadius: '4px' }}>
             <button style={{ border: 'none', background: 'var(--text-primary)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>Week</button>
             <button style={{ border: 'none', background: 'transparent', color: 'var(--text-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>Month</button>
          </div>
        </div>
        <div style={{ height: 200, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--text-primary)" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="var(--text-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
              <XAxis dataKey="name" hide />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: 'var(--text-muted)'}} />
              <Tooltip />
              <Area type="monotone" dataKey="income" stroke="var(--text-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
              <Area type="monotone" dataKey="expense" stroke="var(--accent-primary)" strokeWidth={2} fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Patient Overview (Pie Chart placeholder) */}
      <div className="card" style={{ gridColumn: 'span 3' }}>
         <div className="card-header">
            <div>
              <div className="card-title">Patient Overview</div>
              <div className="stat-subtitle">by Departments</div>
            </div>
            <MoreHorizontal size={16} color="var(--text-muted)" />
         </div>
         <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Simple CSS placeholder for a donut chart */}
            <div style={{ width: 140, height: 140, borderRadius: '50%', background: `conic-gradient(var(--text-primary) 0% 35%, var(--accent-teal) 35% 63%, var(--accent-primary) 63% 83%, var(--border-color) 83% 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{fontSize: '0.65rem', color: 'var(--text-muted)'}}>Overall</span>
                 <span style={{fontSize: '1.25rem', fontWeight: 700}}>1,890</span>
                 <span style={{fontSize: '0.65rem', color: 'var(--accent-primary)'}}>This Week</span>
               </div>
            </div>
         </div>
         <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
               <span><span style={{color: 'var(--text-primary)'}}>●</span> Emergency Medicine</span>
               <span>35%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
               <span><span style={{color: 'var(--accent-teal)'}}>●</span> General Medicine</span>
               <span>28%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
               <span><span style={{color: 'var(--accent-primary)'}}>●</span> Internal Medicine</span>
               <span>20%</span>
            </div>
         </div>
      </div>

      {/* Doctors' Schedule */}
      <div className="card" style={{ gridColumn: 'span 3' }}>
        <div className="card-header">
          <div className="card-title">Doctors' Schedule</div>
          <MoreHorizontal size={16} color="var(--text-muted)" />
        </div>
        <div className="list-item">
          <div className="list-item-content">
            <img className="list-item-avatar" src="https://i.pravatar.cc/150?img=32" alt="Doc" />
            <div>
              <div className="list-item-text-primary">Dr. Petra Winsburry</div>
              <div className="list-item-text-secondary">General Medicine</div>
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <span className="badge badge-outline-blue">Available</span>
            <div style={{fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem'}}>09:00 AM - 11:45 PM</div>
          </div>
        </div>
        <div className="list-item">
          <div className="list-item-content">
            <img className="list-item-avatar" src="https://i.pravatar.cc/150?img=47" alt="Doc" />
            <div>
              <div className="list-item-text-primary">Dr. Ameena Karim</div>
              <div className="list-item-text-secondary">Orthopedics</div>
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <span className="badge badge-outline-red">Unavailable</span>
            <div style={{fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem'}}>-</div>
          </div>
        </div>
        <div className="list-item">
          <div className="list-item-content">
            <img className="list-item-avatar" src="https://i.pravatar.cc/150?img=12" alt="Doc" />
            <div>
              <div className="list-item-text-primary">Dr. Olivia Martinez</div>
              <div className="list-item-text-secondary">Cardiology</div>
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <span className="badge badge-outline-blue">Available</span>
            <div style={{fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem'}}>10:00 AM - 04:00 PM</div>
          </div>
        </div>
      </div>

      {/* Report */}
      <div className="card" style={{ gridColumn: 'span 2' }}>
        <div className="card-header">
          <div className="card-title">Report</div>
          <MoreHorizontal size={16} color="var(--text-muted)" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ background: 'var(--accent-teal-light)', color: 'var(--accent-teal)', padding: '0.5rem', borderRadius: '8px' }}>
              <Plus size={16} />
            </div>
            <div style={{ flex: 1, fontSize: '0.75rem', fontWeight: 600 }}>Room Cleaning Needed</div>
            <ArrowUpRight size={14} color="var(--text-muted)" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ background: 'var(--accent-primary-light)', color: 'var(--accent-primary)', padding: '0.5rem', borderRadius: '8px' }}>
              <Settings size={16} />
            </div>
            <div style={{ flex: 1, fontSize: '0.75rem', fontWeight: 600 }}>Equipment Maintenance</div>
            <ArrowUpRight size={14} color="var(--text-muted)" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ background: 'var(--success-light)', color: 'var(--success)', padding: '0.5rem', borderRadius: '8px' }}>
              <Package size={16} />
            </div>
            <div style={{ flex: 1, fontSize: '0.75rem', fontWeight: 600 }}>Medication Restock</div>
            <ArrowUpRight size={14} color="var(--text-muted)" />
          </div>
        </div>
      </div>

    </div>
  );
}
