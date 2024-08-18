# Library Management System

## Live Site Links:
[Library Management System]()

### Project Overview

This Library Management System is a web-based application designed to efficiently manage a library's book inventory, user borrowing activities, and authentication processes. It provides a seamless interface for librarians to add and manage books, and for users to borrow books and keep track of their borrowed items.

### Key Features

- **Initial Commit**: Set up the project structure and installed necessary dependencies.
- **Navbar Implementation**: Added a responsive navbar with active route highlighting and user authentication state management.
- **Authentication**: Implemented JWT-based authentication to secure routes and protect sensitive operations.
- **Book Management**: Developed functionalities to add, update, and display books, including categories and detailed information.
- **Borrowing System**: Enabled users to borrow books with automated tracking of quantities and return dates.
- **Protected Routes**: Implemented protected routes to restrict access to certain features based on authentication status.
- **Dynamic Views**: Added a feature to toggle between Card View and Table View for displaying books.
- **Home Page Features**: Integrated various sections on the home page to showcase books, categories, and other relevant information.
- **FAQ and About Us**: Added dedicated sections for FAQ and About Us, enhancing user experience and information accessibility.
- **Environment Variables**: Configured sensitive keys using environment variables for enhanced security.

### NPM Packages Used

- **Express.js**: For building the backend API and handling routing.
- **MongoDB**: For managing and storing the library's book inventory and user data.
- **JWT (jsonwebtoken)**: For implementing secure authentication using JSON Web Tokens.
- **Axios**: For making HTTP requests from the frontend to the backend API.
- **Mongoose**: For modeling the application data and interacting with MongoDB.
- **React Router**: For managing navigation and routing within the application.
- **Tailwind CSS**: For styling components using a utility-first CSS framework.
- **DaisyUI**: For additional UI components built on top of Tailwind CSS.
- **React Hook Form**: For managing form state and validation.
- **Tippy.js**: For adding tooltips to enhance user interactions.
- **React Toastify**: For providing notifications and alerts within the application.

### Project Updates

- **Book Details Page**: Developed a protected route for detailed book information, accessible only to logged-in users.
- **Borrowing Modal**: Integrated a modal to handle book borrowing, with auto-populated user information and return date validation.
- **Profile Update Feature**: Enabled logged-in users to securely update their profile information.
- **404 Page**: Added a custom 404 Not Found page for undefined routes.
- **Environment Variables**: Configured MongoDB URI and JWT secret keys using environment variables for enhanced security.


