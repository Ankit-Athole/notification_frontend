import { markAsRead } from '../services/api';

export default function NotificationList({ notifications }) {
  const handleClick = async (id) => {
    await markAsRead(id);
    // Optional: refresh list from parent
    window.location.reload(); // Or trigger refetch via props
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Notifications:</h3>
      <ul>
        {notifications.map((n, i) => (
          <li
            key={i}
            onClick={() => handleClick(n._id)}
            style={{
              fontWeight: n.read ? 'normal' : 'bold',
              cursor: 'pointer',
              backgroundColor: n.read ? '#f8f8f8' : '#e2f3ff',
              padding: '8px',
              marginBottom: '6px',
              borderRadius: '6px',
            }}
          >
            {n.message} — {new Date(n.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
