import { useState, useEffect } from 'react';
import NotificationList from '../components/NotificationList';
import { likePost, fetchNotifications } from '../services/api';

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const fromUser = 'userA';
  const toUser = 'userB';

  const handleLike = async () => {
    await likePost(fromUser, toUser);
    const updated = await fetchNotifications(toUser);
    setNotifications(updated);
  };

  useEffect(() => {
    fetchNotifications(toUser).then(setNotifications);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>InsydAI - Notification POC</h1>
      <button onClick={handleLike}>Simulate Like</button>
      <NotificationList notifications={notifications} />
    </div>
  );
}
