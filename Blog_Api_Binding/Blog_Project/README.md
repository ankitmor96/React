# BlogVerse - Admin Dashboard & Blog Management System

A modern, responsive, and clean Blog Management System built with **React**, **React Router v7**, and **Context API** for centralized state management. This admin panel provides end-to-end CRUD operations for blogs with secure JWT-based authentication and media uploads via Cloudinary.

---

## 🚀 Key Features

- **Admin Authentication**: Secure login flow using JWT tokens stored in `localStorage` with automatic session recovery on page reload.
- **Route Protection**: Fully secured routes via `ProtectedRoute` guard ensuring unauthorized visitors are redirected to `/login`.
- **Global State Management (Context API)**: Single source of truth (`BlogContext`) managing authentication state, current user profile, blogs array, and asynchronous API calls.
- **Full CRUD Support**:
  - **Read**: Dynamic table view of all blogs displaying serial number, cover image thumbnail, title, category, publication status badge, and action buttons.
  - **Create**: Comprehensive blog creation form with automatic URL slug generator derived from title, text excerpt, category, tags, and cover image file upload.
  - **Update**: Pre-filled update form that loads existing blog details and keeps previous cover images intact unless replaced.
  - **Delete**: One-click deletion with browser confirmation prompt and instant list re-fetching.
- **Minimalistic & Clean UI**: Handcrafted, lightweight CSS without heavy UI frameworks, delivering high performance and a clean, human-designed aesthetic.

---

## 📁 Project Directory Structure

```
Blog_Project/
├── .env                       # Environment configuration for backend API base URL
├── package.json               # Project dependencies and npm scripts
├── index.html                 # HTML application template
├── README.md                  # Project documentation
├── src/
│   ├── main.jsx               # React DOM entry point
│   ├── App.jsx                # Router definition (React Router v7)
│   ├── index.css              # Custom styling (layouts, buttons, tables, badges)
│   ├── api/
│   │   └── blogAxios.js       # Axios instance and API call functions
│   ├── context/
│   │   └── BlogContext.jsx    # React Context Provider managing global state
│   ├── components/
│   │   ├── Navbars.jsx        # Navigation bar with user status and logout action
│   │   ├── LoginPage.jsx      # Admin login form with error alerts
│   │   ├── BlogPage.jsx       # Blog list table with edit/delete triggers
│   │   └── BlogForm.jsx       # Unified Add / Edit Blog form component
│   └── Routes/
│       ├── MainLayout.jsx     # Master layout wrapping header and router Outlet
│       └── ProtectedRoute.jsx # Route guard component checking authentication
```

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: [React 19](https://react.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18 or higher recommended).

### 1. Clone or Navigate to the Project

```bash
cd "C:\Users\ANKIT MOR\OneDrive\Desktop\ANKIT\React\Blog_Api_Binding\Blog_Project"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create or update the `.env` file in the root directory:

```env
VITE_DATABASE_URL=https://blogverse-backend-project-3.onrender.com
```

> **Note**: For local backend testing, switch the variable to `http://localhost:5000`.

### 4. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173/login
```

### 5. Production Build

To create an optimized production build:

```bash
npm run build
```

---

## 🔌 API Endpoints Reference

The application interfaces with the following backend REST API endpoints:

| Endpoint | Method | Header | Description |
|---|---|---|---|
| `/users/login` | `POST` | Public | Authenticates admin credentials and returns JWT token |
| `/users/me` | `POST` | `Bearer <token>` | Fetches authenticated user's profile details |
| `/blogs` | `GET` | `Bearer <token>` | Retrieves list of all blogs with pagination and filtering |
| `/blogs/:id` | `GET` | `Bearer <token>` | Fetches single blog details by MongoDB ObjectId |
| `/blogs` | `POST` | `Bearer <token>`, `multipart/form-data` | Creates new blog post with cover image upload |
| `/blogs/:id` | `PATCH` | `Bearer <token>`, `multipart/form-data` | Updates existing blog data and/or cover image |
| `/blogs/:id` | `DELETE` | `Bearer <token>` | Deletes blog by ID and removes media from Cloudinary |

---

## 📝 Form Fields & Validation

When adding or updating a blog, the following fields are processed:

- **Title** *(Required)*: Blog title (3 to 100 characters).
- **Slug** *(Required)*: Unique URL-friendly slug (auto-generated from title, editable).
- **Excerpt** *(Required)*: Short summary description (10 to 300 characters).
- **Content** *(Required)*: Full markdown/text body of the blog post.
- **Category** *(Required)*: Target category tag (e.g., `Technology`, `Lifestyle`).
- **Tags**: Comma-separated search keywords.
- **Status**: Publication state (`draft` or `published`).
- **Cover Image** *(Required on creation)*: Image file (`jpg`, `jpeg`, `png`, `webp`) stored on Cloudinary.
