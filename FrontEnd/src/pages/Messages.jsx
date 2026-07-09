import { useState } from 'react';
import { Mail, MessageSquare, Send, Bell } from 'lucide-react';

const notificationsData = [
  { id: 1, to: 'Sarah Jenkins', type: 'SMS', message: 'Your appointment is confirmed for 12 Jul at 10:00 AM.', time: '10 mins ago', status: 'Sent' },
  { id: 2, to: 'Dr. Petra Winsburry', type: 'Email', message: 'New patient lab results uploaded: PT-1002.', time: '1 hr ago', status: 'Delivered' },
  { id: 3, to: 'Michael Chang', type: 'Email', message: 'Invoice INV-2028-001 has been generated and paid.', time: '2 hrs ago', status: 'Read' },
  { id: 4, to: 'Emma Watson', type: 'SMS', message: 'Reminder: Upcoming appointment tomorrow at 09:00 AM.', time: 'Yesterday', status: 'Sent' },
];

export default function Messages() {
  const [msgType, setMsgType] = useState('SMS');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = () => {
    if (!recipient || !message) return;
    setShowSuccess(true);
    setRecipient('');
    setSubject('');
    setMessage('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Messages & Notifications</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Send SMS/Email updates and track notifications</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Send New Message */}
        <div className="card" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card-header" style={{ marginBottom: 0 }}>
            <span className="card-title">Send Instant Update</span>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className="btn" 
              onClick={() => setMsgType('SMS')}
              style={{ flex: 1, background: msgType === 'SMS' ? 'var(--accent-teal-light)' : 'var(--bg-main)', color: msgType === 'SMS' ? 'var(--accent-teal)' : 'var(--text-secondary)', border: msgType === 'SMS' ? '1px solid var(--accent-teal)' : '1px solid var(--border-color)' }}
            >
              <MessageSquare size={16} style={{ marginRight: '0.5rem' }} /> SMS
            </button>
            <button 
              className="btn" 
              onClick={() => setMsgType('Email')}
              style={{ flex: 1, background: msgType === 'Email' ? 'var(--accent-teal-light)' : 'var(--bg-main)', color: msgType === 'Email' ? 'var(--accent-teal)' : 'var(--text-secondary)', border: msgType === 'Email' ? '1px solid var(--accent-teal)' : '1px solid var(--border-color)' }}
            >
              <Mail size={16} style={{ marginRight: '0.5rem' }} /> Email
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            {showSuccess && (
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--success-light)', color: 'var(--success)', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✓ {msgType} sent successfully!
              </div>
            )}
            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Recipient (Patient or Doctor)</label>
            <input 
              type="text" 
              placeholder={msgType === 'Email' ? "Enter email address..." : "Search name or phone..."} 
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            
            {msgType === 'Email' && (
              <>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '0.25rem' }}>Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter email subject..." 
                  style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </>
            )}

            <label style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '0.25rem' }}>Message</label>
            <textarea 
              placeholder="Type your message here..." 
              rows="4" 
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', resize: 'vertical' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            
            <button className="btn btn-primary" style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }} onClick={handleSend}>
              <Send size={16} style={{ marginRight: '0.5rem' }} /> Send Message
            </button>
          </div>
        </div>

        {/* Notification History */}
        <div className="card" style={{ gridColumn: 'span 7', padding: 0 }}>
           <div className="card-header" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: 0 }}>
            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Bell size={18} /> Recent System Notifications</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {notificationsData.map((notif) => (
              <div key={notif.id} style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
                <div style={{ background: notif.type === 'SMS' ? 'var(--accent-primary-light)' : 'var(--bg-main)', color: notif.type === 'SMS' ? 'var(--accent-primary)' : 'var(--text-secondary)', padding: '0.75rem', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {notif.type === 'SMS' ? <MessageSquare size={18} /> : <Mail size={18} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>To: {notif.to}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{notif.time}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{notif.message}</p>
                  <span className="badge badge-outline-blue" style={{ fontSize: '0.65rem' }}>{notif.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
