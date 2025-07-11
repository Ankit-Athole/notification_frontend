import axios from 'axios';

const API_URL = 'notificationbackend-production.up.railway.app'; // Replace with your deployed backend URL

export const likePost = async (fromUser, toUser) => {
  await axios.post(`${API_URL}/like`, { fromUser, toUser });
};

export const fetchNotifications = async (userId) => {
  const res = await axios.get(`${API_URL}/notifications/${userId}`);
  return res.data;
};

export const markAsRead = async (notificationId) => {
  await axios.patch(`${API_URL}/notifications/${notificationId}/read`);
};
