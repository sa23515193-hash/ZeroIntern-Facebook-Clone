# Facebook Clone — Social Graph & Feed

A responsive social networking web application inspired by Facebook, developed as part of the **ZeroIntern Advanced Track — Project 5: Facebook Clone: Social Graph & Feed**.

## Project Overview

This project demonstrates the core structure of a social networking platform, with a frontend interface and a separate backend API built using Node.js and Express.

## Features

- Responsive social networking interface
- Social feed and post interactions
- Friend and connection interface
- Browser-based demo data using localStorage
- Separate backend API using Node.js and Express
- Socket.IO starter support
- Organized frontend and backend directories
- GitHub Pages deployment workflow for the frontend

## Technology Stack

**Frontend**
- HTML5
- CSS3
- JavaScript
- Browser localStorage

**Backend**
- Node.js
- Express.js
- Socket.IO

**Deployment**
- GitHub
- GitHub Pages (frontend)

## Project Structure

```text
ZeroIntern-Facebook-Clone/
├── frontend/
│   └── index.html
├── backend/
│   ├── package.json
│   └── README.md
├── .github/
│   └── workflows/
│       └── pages.yml
├── .gitignore
└── README.md
```

## Run the Frontend

1. Open the `frontend` directory.
2. Open `index.html` in your browser.

Alternatively, from the project root in PowerShell:

```powershell
cd frontend
start index.html
```

## Run the Backend

Make sure Node.js and npm are installed.

Open PowerShell in the project root and run:

```powershell
cd backend
npm install
npm run dev
```

If the backend starts successfully, test the health endpoint:

`http://localhost:5000/api/health`

Refer to `backend/README.md` for backend-specific instructions.

## Deployment

The frontend is configured for GitHub Pages through the workflow in `.github/workflows/pages.yml`.

1. Push the project to GitHub.
2. Open the repository's **Settings → Pages**.
3. Select **GitHub Actions** as the deployment source.
4. Check the **Actions** tab for a successful deployment.
5. Open the published Pages URL shown by GitHub.

GitHub Pages hosts the static frontend only. The backend must be deployed separately to a Node.js-compatible hosting service for public API access.

## Important Notes

- The frontend demo uses browser localStorage for its local demo interactions.
- The backend is a separate starter API and is not automatically connected to the frontend in the current setup.
- Backend data is not a persistent production database.
- This project is intended for learning and demonstration; it is not a production-ready social networking service.

## Learning Outcomes

- Building a responsive web interface
- Organizing frontend and backend code
- Creating and testing a Node.js/Express API
- Understanding social feed and connection UI patterns
- Publishing a static website with GitHub Pages

## Author

**Sawaira Ijaz**

Computer Science Undergraduate & Researcher

GitHub: https://github.com/sa23515193-hash

---

Developed for the ZeroIntern Advanced Track — Project 5.
