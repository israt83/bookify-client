import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'

import ErrorPage from '../pages/ErrorPage'

import PrivateRoute from './PrivateRoute'

import UpdateProfile from '../pages/Authentication/UpdateProfile'
import AllBooks from '../pages/AllBooks'

import Details from '../pages/Details'
import AddBook from '../pages/AddBook'
import BorrowedBooks from '../pages/BorrowedBooks'
import UpdateBook from '../pages/UpdateBook'






const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader:()=> fetch(`${import.meta.env.VITE_API_URL}/books`),
        loader:()=> fetch('http://localhost:5000/books')
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: "updateProfile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: '/book/:id',
        element: (
          <PrivateRoute>
           
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: '/add-book',
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/borrowed-books',
        element: (
          <PrivateRoute>
            <BorrowedBooks/>
          </PrivateRoute>
        ),
      },
    
     
      {
        path: '/all-books',
        element: <AllBooks/>,
      },
    ],
  },
])

export default router
