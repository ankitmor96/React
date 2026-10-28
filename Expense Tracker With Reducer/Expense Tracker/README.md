# React + Vite


# 💰 Expense Tracker — React Application

## 📌 Project Overview

The **Expense Tracker** is a web application developed using React.js that helps users record, manage, and view their expenses in one place.

The main purpose of this project is to understand React component architecture, state management using the Context API, and communication between components.

Instead of managing expense data separately in multiple components, this project uses **React Context API** to share expense-related data and functions across the application.

## 🎯 Project Objectives

- Build an interactive expense management application using React.
- Learn how to create reusable React components.
- Understand state management using React Context API.
- Implement expense data handling through shared state.
- Practice organizing a React project into separate folders and files.

## ✨ Features

- **Add Expenses:** Enter expense details through the Add Expense form.
- **Expense List:** Display the expenses added by the user.
- **Centralized State Management:** Share expense data using React Context API.
- **Reusable Components:** Separate the form and expense list into individual components.
- **Dynamic UI Updates:** Update the displayed expense list when the shared expense state changes.
- **React + Vite:** Use Vite for a fast development environment.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Build the user interface |
| JavaScript (JSX) | Application logic and UI components |
| React Context API | Share expense state and related functions |
| CSS | Style the application |
| Vite | Development server and build tool |
| npm | Install and manage dependencies |

## 📂 Project Structure

```text
Expense Tracker/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── Context/
│   │   └── ExpenseContext.jsx
│   ├── components/
│   │   ├── AddExpense.jsx
│   │   └── ExpenseList.jsx
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
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

## ⚙️ Project Explanation

### 1. `main.jsx` — Application Entry Point

The `main.jsx` file is the starting point of the React application.

It renders the main application component and provides the application structure required to display the UI in the browser.

### 2. `App.jsx` — Main Application Component

The `App.jsx` file acts as the main component of the application.

It organizes the expense-related components and defines how they appear in the application interface.

### 3. `ExpenseContext.jsx` — Centralized State Management

The `ExpenseContext.jsx` file manages shared expense-related state through React Context API.

**Why use Context API?**

Without Context API, we may need to pass expense data and functions through multiple component props. This is known as prop drilling.

Context API allows components that need the shared data to access it through the context provider and `useContext`.

This helps keep the application organized and makes sharing state between components easier.

### 4. `AddExpense.jsx` — Add Expense Component

The `AddExpense.jsx` file contains the component responsible for accepting expense information from the user.

Its role is to collect the relevant input and use the available expense-management function to add an expense to the shared state.

### 5. `ExpenseList.jsx` — Display Expenses

The `ExpenseList.jsx` file is responsible for displaying expense information.

It accesses the expense data and renders the list. When the shared state changes, React can update the relevant UI automatically.

### 6. `App.css` and `index.css` — Styling

These files contain the CSS used to style the application's components and overall interface.

### 7. `vite.config.js` — Vite Configuration

This file contains the configuration for the Vite development and build tooling.

## 🔄 How the Application Works

The application's basic data flow is:

```text
          User
            |
            v
      AddExpense.jsx
            |
            v
   Expense Context Function
            |
            v
     Shared Expense State
            |
            v
      ExpenseList.jsx
            |
            v
     Updated Expense UI
```

**Step-by-step flow:**

1. The user enters expense information in the Add Expense component.
2. The component calls the expense-management function provided by the context.
3. The shared expense state is updated.
4. The Expense List component reads the updated state.
5. React renders the updated expense list.

This flow demonstrates how multiple components can work with shared application state without manually passing the same data through every component.

## 🧠 What I Learned

Through this project, I practiced:

- Creating functional components in React.
- Using JSX to build user interfaces.
- Managing shared state with React Context API.
- Using `useContext` to access context values.
- Organizing code into components and context files.
- Understanding data flow between components.
- Managing project dependencies with npm.
- Running a React application using Vite.

## 🚀 Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/ankitmor96/Expense_Tracker.git
```

### Step 2: Open the Project Folder

```bash
cd Expense_Tracker
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application in your browser.

## 🏗️ Build for Production

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 🔮 Future Improvements

Potential improvements for future versions include:

- Edit and delete expenses.
- Categorize expenses.
- Display total expenses and category-wise summaries.
- Filter expenses by date or category.
- Save expense records using local storage or a backend database.
- Add charts to visualize spending patterns.

These are possible future enhancements and may not be implemented in the current version.

## 👨‍💻 Author

**Ankit Mor**

GitHub: [@ankitmor96](https://github.com/ankitmor96)

## ⭐ Conclusion

The Expense Tracker project demonstrates the practical use of React components and Context API for managing shared application state. It provides a foundation for understanding how to build structured, interactive React applications and can be extended with additional expense-management features in the future.
