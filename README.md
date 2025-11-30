     # BookAway Hub - React Application with Tailwind CSS

This is a React-based web application styled with Tailwind CSS, using React Router for client-side routing and React Helmet Async for managing SEO meta tags dynamically.

---

## Project Overview

This app allows users to:
- Browse and search for bookings
- Create and manage accounts
- View their bookings after login
- Navigate through protected routes (authentication required)
- SEO optimization with dynamic meta tags

---

## Tech Stack

- **React** — UI library
- **Tailwind CSS** — Utility-first CSS framework
- **React Router DOM** — Client-side routing
- **React Helmet Async** — Manage document head for SEO
- **Context API** — For authentication state management

---

## How It Works (Block Diagram)

+------------------------+
| Browser UI |
| (React Components) |
+------------+-----------+
|
v
+------------------------+ <----> +--------------------+
| React Router Routes | Backend API (Node.js, Express)
| - Public Routes | - Auth APIs
| - Protected Routes | - Bookings API
+------------+-----------+
|
v
+------------------------+
| Auth Context Provider |
| - Manages user state |
| - Protects routes |
+------------------------+

Tailwind CSS styles all UI components
React Helmet Async dynamically updates the page <head> tags for SEO

yaml
Copy
Edit

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bookaway-hub.git
   cd bookaway-hub
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn
Start the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
Open your browser at http://localhost:3000

Tailwind CSS Setup Checklist
If Tailwind CSS is not applying styles, verify the following:

tailwind.config.js includes all your source paths in content array:

js
Copy
Edit
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
postcss.config.js has Tailwind CSS and autoprefixer plugins:

js
Copy
Edit
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
Import Tailwind directives in your main CSS (e.g., src/index.css):

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Import this CSS file in your React entry file (src/main.jsx or src/index.jsx):

js
Copy
Edit
import './index.css';
Restart your dev server after changes.

Routing and Authentication
Public routes: /, /login, /signup, /search

Protected routes: /account, /bookings (user must be logged in)

ProtectedRoute component wraps protected pages to restrict access.

Navbar is hidden on /login and /signup pages.

SEO with React Helmet Async
Each page sets its own title, description, and canonical URL for SEO.

Wrapped the app in <HelmetProvider> to manage document head updates.

Troubleshooting Tips
Check browser DevTools Elements tab to see if Tailwind classes are applied.

Make sure React Router and Helmet are wrapped properly.

Verify you passed the correct user ID or authentication context.

Delete node_modules and reinstall dependencies if needed.

Restart development server after config changes.

---

## Deployment

This application can be deployed on various platforms. Below are instructions for popular hosting services.

### Deploy on Vercel (Recommended)

Vercel provides seamless deployment for full-stack applications.

1. **Fork this repository** to your GitHub account

2. **Sign up for Vercel** at [vercel.com](https://vercel.com)

3. **Import your repository** in Vercel dashboard

4. **Configure environment variables** in Vercel project settings:
   - `JWT_SECRET` - Your JWT secret key (generate a secure random string)
   - `NODE_ENV` - Set to `production`

5. **Deploy** - Vercel will automatically build and deploy your app

6. **Access your app** at the provided Vercel URL

### Deploy Backend on Railway

For backend-only deployment:

1. Sign up at [railway.app](https://railway.app)
2. Create a new project from GitHub repository
3. Select the `backend` folder as root directory
4. Add environment variables: `JWT_SECRET`, `PORT`
5. Deploy and get your backend API URL

### Deploy Frontend on Netlify

For frontend-only deployment:

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable for backend API URL
6. Deploy

### Environment Variables

Create a `.env` file in the `backend` directory (see `.env.example`):

```bash
JWT_SECRET=your_secure_jwt_secret_here
PORT=3001
CORS_ORIGIN=https://your-frontend-url.com
```

**Important Security Notes:**
- Never commit `.env` files to Git
- Use strong, random JWT secrets in production
- Update CORS_ORIGIN to your actual frontend URL

### Build Commands

**Frontend:**
```bash
npm install
npm run build
```

**Backend:**
```bash
cd backend
npm install
node index.js
```

### Post-Deployment

After deployment:
1. Test all authentication flows
2. Test booking creation and retrieval
3. Verify API endpoints are accessible
4. Check CORS settings if frontend can't reach backend

---

## Contribution

Feel free to fork and submit PRs. Report issues on GitHub.

## License

MIT License - feel free to use this project for learning or production.

Contribution
Feel free to fork and submit PRs. Report issues on GitHub.
