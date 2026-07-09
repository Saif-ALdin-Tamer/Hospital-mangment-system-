import { CreditCard, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

const invoicesData = [
  { id: 'INV-2028-001', patient: 'Michael Chang', amount: '$450.00', date: '12 Jul 2028', status: 'Paid', method: 'Stripe' },
  { id: 'INV-2028-002', patient: 'Sarah Jenkins', amount: '$120.00', date: '11 Jul 2028', status: 'Pending', method: 'Insurance' },
  { id: 'INV-2028-003', patient: 'Emma Watson', amount: '$85.00', date: '10 Jul 2028', status: 'Paid', method: 'Credit Card' },
];

export default function Payments() {
  const handleStripe = () => {
    toast.loading('Redirecting to Stripe Gateway...', {
      duration: 2000,
    });
    setTimeout(() => {
      toast.success('Stripe Payment Link Sent!');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Payments & Billing</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage invoices, Stripe payments, and Insurance claims</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Payment Gateways */}
        <div className="card" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card-header" style={{ marginBottom: 0 }}>
            <span className="card-title">Payment Gateways</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#635BFF', color: 'white', padding: '0.5rem', borderRadius: '8px' }}>
                <CreditCard size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Stripe Integration</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--success)' }}>Connected Active</div>
              </div>
            </div>
            <button className="btn" style={{ background: 'var(--bg-main)', fontSize: '0.75rem' }}>Manage</button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--accent-teal)', color: 'white', padding: '0.5rem', borderRadius: '8px' }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Health Insurance Portals</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>3 Providers Linked</div>
              </div>
            </div>
            <button className="btn" style={{ background: 'var(--bg-main)', fontSize: '0.75rem' }}>Manage</button>
          </div>
        </div>

        {/* Quick Invoice */}
        <div className="card" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           <div className="card-header" style={{ marginBottom: 0 }}>
            <span className="card-title">Create Quick Invoice</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input type="text" placeholder="Patient Name or ID" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
            <div className="stripe-action-row" style={{ display: 'flex', gap: '0.75rem' }}>
              <input type="text" placeholder="Amount ($)" style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleStripe}>Send via Stripe <ExternalLink size={14} style={{ marginLeft: '0.25rem' }}/></button>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="card" style={{ gridColumn: 'span 12', padding: 0 }}>
          <div className="card-header" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: 0 }}>
            <span className="card-title">Recent Invoices</span>
          </div>
          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Invoice ID</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Patient</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Amount</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Date</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Method</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Status</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoicesData.map((inv) => (
                  <tr key={inv.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{inv.id}</td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{inv.patient}</td>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{inv.amount}</td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{inv.date}</td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{inv.method}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span className={`badge ${inv.status === 'Paid' ? 'badge-outline-blue' : 'badge-outline-red'}`} style={inv.status === 'Paid' ? { color: 'var(--success)', borderColor: 'var(--success-light)' } : { color: '#f59e0b', borderColor: '#fef3c7' }}>
                        {inv.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <button className="icon-btn" style={{ width: 32, height: 32, background: 'var(--bg-main)' }}><Download size={14}/></button>
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
