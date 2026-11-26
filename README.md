# ChatWave

A full-stack, real-time chat application with Clerk authentication, MongoDB message storage, ImageKit media uploads, and a responsive React interface.

## Features

- Clerk sign-in and sign-up
- Real-time presence and incoming messages with Socket.IO
- Direct conversations and message history
- Image and video sharing
- Searchable users and recent conversations
- Light and dark themes
- Custom theme presets and wallpapers
- Optional keyboard typing sounds
- Responsive desktop and mobile layout
- Docker deployment that serves the frontend and API together

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- HeroUI
- Zustand
- React Router
- Clerk React SDK
- Socket.IO Client

### Backend

- Node.js
- Express
- MongoDB and Mongoose
- Clerk Express SDK
- Socket.IO
- ImageKit
- Multer
- Cron

## Project Structure

```text
chat-app/
├── frontend/          # React client
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       └── store/
├── backend/           # Express API and Socket.IO server
│   └── src/
│       ├── controllers/
│       ├── lib/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── webhooks/
└── Dockerfile         # Combined production image
```

## Prerequisites

- Node.js 22 or later
- npm
- MongoDB
- A [Clerk](https://clerk.com/) application
- An [ImageKit](https://imagekit.io/) account for image and video uploads
- Docker, if using container deployment


## Clerk Setup

1. Create a Clerk application.
2. Configure the publishable and secret keys in the environment files.
3. Add a Clerk webhook endpoint that points to:

   ```text
   http://localhost:3000/api/webhooks/clerk
   ```

4. Subscribe the webhook to `user.created`, `user.updated`, and `user.deleted`.
5. Copy the Clerk webhook signing secret into `CLERK_WEBHOOK_SIGNING_SECRET`.

For a deployed application, replace the local webhook URL with the public backend URL.

## Local Development

Install dependencies and start the backend:

```bash
cd backend
npm install
npm run dev
```

In a second terminal, install dependencies and start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

The frontend expects the API at `http://localhost:3000/api` during development.

## Scripts

### Frontend

```bash
npm run dev      # Start Vite development server
npm run build    # Create a production build
npm run lint     # Run Oxlint
npm run preview  # Preview the production build
```

### Backend

```bash
npm run dev      # Start with Node watch mode
npm run build    # Copy source files into dist/
npm start        # Start the source entry point
```

## Security

- Never commit `.env` files or real secret keys.
- Use separate Clerk and ImageKit credentials for development and production.
- If a secret is exposed, rotate it immediately.
- Restrict `FRONTEND_URL` to trusted origins.
- Verify Clerk webhook signatures before syncing users.

