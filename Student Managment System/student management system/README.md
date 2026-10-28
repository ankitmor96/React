# React + Vite

# Student Management System

A React-based web application for managing student records through a simple and user-friendly interface. This project demonstrates practical frontend development concepts, REST API integration, CRUD operations, routing, and form handling.

## Live Demo

**Live Website:** https://student-management-system-blond-seven.vercel.app/

**GitHub Repository:** https://github.com/ankitmor96/Student_Management_System-

## Project Overview

The Student Management System is a practical project developed using React and Vite. It provides an interface for managing student information and communicates with a backend API to perform student-related operations.

The project focuses on component-based development, reusable UI components, API communication, client-side navigation, and handling asynchronous operations.

## Technologies Used

- **React** — Building reusable UI components.
- **Vite** — Frontend development and production build tool.
- **JavaScript (ES6+)** — Application logic.
- **React Router DOM** — Client-side routing and navigation.
- **Axios** — Sending HTTP requests to backend APIs.
- **CSS** — Styling and layout.
- **Bootstrap** — UI styling and responsive components, where used.
- **Git & GitHub** — Version control and source code management.
- **Vercel** — Frontend deployment.

## Features

- View student records.
- Add new student information.
- Edit existing student records.
- Delete student records.
- Connect the frontend with backend APIs using Axios.
- Navigate between pages using React Router.
- Manage form input and component state.
- Display loading and error states.
- Validate required student information, where implemented.
- Responsive user interface.

## Project Structure

```text
student management system/
├── public/
├── src/
│   ├── api/
│   │   └── axios.js
│   ├── assets/
│   ├── components/
│   ├── ui/
│   ├── validation/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/ankitmor96/Student_Management_System-.git
```

### 2. Navigate to the Project Folder

```bash
cd Student_Management_System-
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Backend API

The application requires the appropriate backend API to perform student operations.

If the API URL is configured through an environment variable, create a `.env` file in the project root and configure the variable expected by `src/api/axios.js`.

Example:

```env
VITE_API_URL=your_backend_api_url
```

Replace the example value with your actual backend API URL. The variable name must match the one used in your code.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates the production build. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint checks, if configured. |

## API Integration

The frontend uses Axios to communicate with the backend server.

Depending on the backend implementation, the application can use API endpoints to:

- Retrieve all students.
- Add a student.
- Update student information.
- Delete a student.
- Retrieve a student by ID.

The exact endpoint paths and request formats depend on the connected backend API.

## Deployment

The frontend is deployed using Vercel.

- **Live Application:** https://student-management-system-blond-seven.vercel.app/
- **Source Code:** https://github.com/ankitmor96/Student_Management_System-

## Learning Outcomes

Through this project, the following practical concepts can be explored:

- React components and props.
- State management using React hooks.
- Handling form inputs and events.
- Client-side routing.
- Making API requests using Axios.
- Performing CRUD operations.
- Managing loading states and errors.
- Organizing a React project.
- Building and deploying a frontend application.

## Future Enhancements

- Add student search and filtering.
- Implement pagination.
- Improve form validation and user feedback.
- Enhance responsive design.
- Add authentication and role-based access.
- Improve dashboard and student statistics.

## Author

**Ankit Mor**

GitHub: [@ankitmor96](https://github.com/ankitmor96)

## License

This project was created for practical learning and portfolio purposes. A formal license can be added if required.

