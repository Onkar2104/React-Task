# React Task CRUD App

A student management application built with React, Vite, Tailwind CSS, . The frontend communicates with a FastAPI backend to read, create, update, and delete student records.

## Features

- View student records
- Add new students when logged in
- Update student records when logged in
- Delete student records when logged in
- Display update and delete actions to visitors while requiring login before changes
- Register and log in through the backend API
- Show the logged-in user's name in the navbar
- Logout and clear the local session
- Navigate between Home, About, and Login pages
- Responsive interface styled with Tailwind CSS

## Technology stack

- React
- Vite
- Tailwind CSS
- FastAPI backend

## Clone the repository

```bash
git clone https://github.com/Onkar2104/React-Task.git
cd React-Task
```

The FastAPI backend is maintained in a separate repository:

[Backend repository](https://github.com/Onkar2104/FastAPI-Task)

Clone it in a separate directory when setting up the backend:

```bash
git clone https://github.com/Onkar2104/FastAPI-Task.git
cd FastAPI-Task
```

## Frontend installation

The React application is inside the `crud-app` directory:

```bash
cd crud-app
npm install
```

## Configure the API URL

Create a `.env` file in the `crud-app` directory:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Update the URL if the FastAPI backend runs on another host or port. Restart the Vite server whenever the `.env` file changes.

## Backend setup

Use the [FastAPI backend repository](https://github.com/Onkar2104/FastAPI-Task) for the backend source code and backend-specific setup instructions.

The frontend expects a FastAPI server to provide the following endpoints:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/students` | Return all students |
| `POST` | `/students` | Create a student |
| `PUT` | `/students/{id}` | Update a student |
| `DELETE` | `/students/{id}` | Delete a student |
| `POST` | `/register` | Register a user |
| `POST` | `/login` | Authenticate a user |

Start the backend from its project directory using the command configured by that backend. A typical FastAPI development command is:

```bash
uvicorn main:app --reload --port 8000
```

The backend must allow requests from the Vite development server, commonly `http://localhost:5173`, through CORS configuration.

## Run the frontend

From the `crud-app` directory:

```bash
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173
```

Run the backend before opening the Home page if student data should be loaded.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |

## Application usage

1. Open the application and visit the Login page.
2. Use **Sign Up** to register a new account.
3. Log in with the registered email and password.
4. After login, the navbar displays the user's name.
5. Use **Add Student** to create a student record.
6. Use **Update** or **Delete** to manage existing records.
7. Visitors can read student data, but update and delete actions display a login message until the visitor signs in.
8. Select **Logout** to clear the local session.

## Project structure

```text
React-Task/
├── README.md
└── crud-app/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── About.jsx
    │   │   ├── Home.jsx
    │   │   └── Login.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```