
# 💻 InsydAI Notification System – Frontend

This is the Next.js frontend for the notification system POC. It allows simulating "like" actions and viewing the corresponding notifications.

## 🚀 Setup Instructions

### 1. Clone the repo
```bash
git clone <your-frontend-repo-url>
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure API
Update `services/api.js`:

```js
const API_URL = 'https://<your-backend-url>/api';
```

Or use `localhost` for development:

```js
const API_URL = 'http://localhost:5000/api';
```

### 4. Run the app
```bash
npm run dev
```

## 🌐 Features
- Trigger "like" events
- View notifications pulled from backend
- Simple interface as per POC spec
- **Unread notifications** appear bold with a blue background
- Clicking a notification marks it as **read**
- Notification list refreshes automatically

## 🧱 Tech Stack
- Next.js
- React
- Axios
