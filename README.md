# Library Management System

### Project Overview

The Library Management System is a comprehensive web application designed to efficiently manage book inventories, user borrowing activities, and library operations. It provides an intuitive interface for librarians to manage books and user borrowing details, ensuring a seamless experience for both administrators and users.

---


## Live Site Link:
[Library Management System](https://library-managment-system-797c1.web.app)

---

## Server site repo:
[Library Management System](https://github.com/israt83/bookify-server)

---


### Key Features

1. **Book Inventory Management**:
   - Add, update, and delete books with essential details like title, author, category, and ratings.
   - Dynamically manage book quantities, with restrictions to prevent over-borrowing.

2. **User-Friendly Borrowing System**:
   - Borrow books with automated quantity adjustments.
   - Return date validation and tracking.
   - Disabled borrowing functionality for out-of-stock books.

3. **Authentication and Security**:
   - JWT-based secure authentication.
   - Protected routes accessible only to logged-in users.
   - Dynamic user state management for personalized experiences.

4. **Dynamic Book Views**:
   - Toggle between **Card View** and **Table View** to display books flexibly.

5. **Interactive User Interface**:
   - Responsive design with an elegant layout using **Tailwind CSS** and **DaisyUI**.
   - Tooltip integration for enhanced user guidance.

6. **Enhanced User Experience**:
   - Comprehensive FAQ and About Us sections.
   - 404 Not Found page for undefined routes.

7. **Environment-Secure Configuration**:
   - Sensitive keys such as MongoDB URI and JWT secrets managed using environment variables.

---

### Technologies Used

#### **Frontend**
- **React**: For building the user interface.
- **React Router**: For seamless navigation.
- **Tailwind CSS & DaisyUI**: For responsive and modern styling.

#### **Backend**
- **Express.js**: For building a robust API.
- **MongoDB**: As the database for storing library and user data.
- **Mongoose**: For database modeling and interactions.
- **JWT (jsonwebtoken)**: For secure authentication.

#### **Utilities**
- **React Hook Form**: For efficient form management and validation.
- **Axios**: For API communication.
- **Tippy.js**: For intuitive tooltips.
- **React Toastify**: For toast notifications.

---

## Running the Project Locally

1- Clone the cleint site repo repository:
- git clone https://github.com/israt83/bookify-client.git
- cd library-management-client
- npm i

2- Set up Firebase for authentication and paste your own credential in firebase.config file.

3- Clone the server site repo repository:
 - git clone https://github.com/israt83/bookify-server.git
 - set up dependencies : npm i
 - Set up MongoDB
 - Set up MongoDB Atlas or run a local instance.
 - Add your MongoDB connection URI located in index file

- npm run dev in client site  then Open your browser and navigate to http://localhost: port
- if you want run server as well then write this command in terminal  nodemon index.js , and paste the port in browser