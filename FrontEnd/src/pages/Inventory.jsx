import { PackagePlus, Search, Filter, AlertTriangle, CheckCircle2 } from 'lucide-react';

const inventoryData = [
  { id: 'INV-501', item: 'Paracetamol 500mg', category: 'Pharmacy', stock: 1500, unit: 'Tablets', status: 'In Stock', location: 'Main Pharmacy' },
  { id: 'INV-502', item: 'Surgical Masks', category: 'Supplies', stock: 120, unit: 'Boxes', status: 'Low Stock', location: 'Store Room A' },
  { id: 'INV-503', item: 'MRI Contrast Agent', category: 'Medical Devices', stock: 45, unit: 'Vials', status: 'In Stock', location: 'Radiology Dept' },
  { id: 'INV-504', item: 'Amoxicillin 250mg', category: 'Pharmacy', stock: 0, unit: 'Bottles', status: 'Out of Stock', location: 'Main Pharmacy' },
  { id: 'INV-505', item: 'Defibrillator Pads', category: 'Supplies', stock: 25, unit: 'Pairs', status: 'In Stock', location: 'Emergency Dept' },
];

export default function Inventory() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Medical Operations & Inventory</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage pharmacy stock, supplies, and internal distribution</p>
        </div>
        <button className="btn btn-primary">
          <PackagePlus size={18} style={{ marginRight: '0.5rem' }} /> Request Supply
        </button>
      </div>

      <div className="dashboard-grid">
         {/* Summary Widgets */}
         <div className="card" style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--success-light)', color: 'var(--success)', borderRadius: '12px' }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Total Items In Stock</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>3,450</div>
            </div>
         </div>
         <div className="card" style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: '#fef3c7', color: '#f59e0b', borderRadius: '12px' }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Low Stock Items</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>24</div>
            </div>
         </div>
         <div className="card" style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--danger-light)', color: 'var(--danger)', borderRadius: '12px' }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Out of Stock</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>5</div>
            </div>
         </div>

         {/* Inventory Table */}
        <div className="card" style={{ gridColumn: 'span 12', padding: '0' }}>
          <div className="card-header stack-mobile" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: 0, gap: '1rem' }}>
            <div className="search-bar" style={{ width: '100%', maxWidth: '300px' }}>
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search inventory..." />
            </div>
            <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
              <Filter size={18} style={{ marginRight: '0.5rem' }} /> Filter
            </button>
          </div>
          
          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Item ID</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Item Name & Category</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Stock Level</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Location</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.id}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{item.item}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.category}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      {item.stock} <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{item.unit}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.location}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span className={`badge ${
                        item.status === 'In Stock' ? 'badge-outline-blue' : 
                        item.status === 'Low Stock' ? 'badge-outline-blue' : 
                        'badge-outline-red'
                      }`} style={
                        item.status === 'In Stock' ? { color: 'var(--success)', borderColor: 'var(--success-light)' } : 
                        item.status === 'Low Stock' ? { color: '#f59e0b', borderColor: '#fef3c7' } : {}
                      }>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
