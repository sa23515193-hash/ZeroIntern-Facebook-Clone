# FriendSpace — Facebook Clone (ZeroIntern Project 5)

A responsive social-networking project with a React-style, GitHub Pages-friendly static frontend and an optional Express backend.

## Features
- Feed with post creation, reactions, comments, sharing and feed ranking
- Profile panel, friend requests and connection suggestions
- Notifications panel and privacy controls (Public / Friends / Only me)
- Search, stories, responsive navigation, dark/light theme
- Browser demo persists posts and reactions in `localStorage`
- Optional Express API with REST endpoints and Socket.IO event foundation
- Backend source lives in this same repository; GitHub Pages publishes only the frontend

## Important deployment note
**GitHub Pages hosts static frontend files only. It cannot execute Node.js/Express, PostgreSQL, Redis, or Socket.IO.**
The frontend therefore runs in demo mode using browser `localStorage` when no API is configured. To use the backend, run it locally or deploy it to a Node.js hosting service and configure `frontend/config.js` with the API URL. Do not put database passwords or secrets in frontend files.

## Run the frontend locally
Open `frontend/index.html` in a browser, or use VS Code Live Server. No build step required.

## Run the backend locally
Requirements: Node.js 18+.
```bash
cd backend
npm install
npm run dev
```
API health check: `http://localhost:5000/api/health`

The starter backend uses an in-memory store so it runs immediately. PostgreSQL and Redis are represented in the architecture notes and can be added for persistent production deployment. Do not claim this in-memory starter is production-scale.

## GitHub Pages deployment
1. Upload the entire `ZeroIntern_Facebook_Clone` folder contents to one GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under Build and deployment choose **Deploy from a branch**, branch `main`, folder `/frontend`.
4. Save. Your published URL will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

If GitHub Pages does not offer `/frontend` as a folder option, use GitHub Actions or move/copy the contents of `frontend` to the repository root. This project includes a workflow under `.github/workflows/pages.yml` to publish `frontend/` automatically.

## API endpoints
- `GET /api/health`
- `GET /api/posts`
- `POST /api/posts`
- `POST /api/posts/:id/reactions`
- `POST /api/posts/:id/comments`
- `GET /api/notifications`
- `GET /api/friends`
- `POST /api/friends/:id/requests`

## Feed ranking and privacy tradeoffs
The demo ranking combines recency, reaction count and comment count. This is intentionally transparent and simple; a production ranking system would incorporate relationship strength, explicit user preferences, integrity signals, diversity and freshness while auditing for feedback loops. Privacy filtering is applied before returning visible posts in the API starter. The in-memory backend is a learning scaffold, not a secure production social network.

## Project structure
```text
.
├── frontend/             # Static responsive app published on GitHub Pages
├── backend/              # Optional Node.js + Express + Socket.IO API
└── .github/workflows/    # GitHub Pages deployment workflow
```
