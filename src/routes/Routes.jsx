import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'

import ErrorPage from '../pages/ErrorPage'

// import UpdateJob from '../pages/UpdateJob'
import PrivateRoute from './PrivateRoute'
// import MyBids from '../pages/MyBids'
import BidRequests from '../pages/BidRequests'

import UpdateProfile from '../pages/Authentication/UpdateProfile'
import AllBooks from '../pages/AllBooks'
// import BookDetails from '../pages/bookDetails'
import Details from '../pages/Details'
import AddBook from '../pages/AddBook'
import BorrowedBooks from '../pages/BorrowedBooks'






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
      // {
      //   path: '/update/:id',
      //   element: (
      //     <PrivateRoute>
      //       <UpdateJob />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     // fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      // },
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
        path: '/my-bids',
        element: (
          <PrivateRoute>
            {/* <MyBids /> */}
          </PrivateRoute>
        ),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests />
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
