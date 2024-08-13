// import { useState, useEffect } from "react";
// import axios from "axios";
// import useAuth from "../hooks/useAuth";

// const BorrowedBooks = () => {
//   const [borrowedBooks, setBorrowedBooks] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     // Fetch borrowed books for the logged-in user
//     axios
//       .get("http://localhost:5000/borrowed-books", {
//         params: { email: user.email },
//       })
//       .then((response) => {
//         setBorrowedBooks(response.data);
//       })
//       .catch((err) => console.error("Error fetching borrowed books:", err));
//   }, [user.email]);

//   // Handle returning a book
//   const handleReturn = async (bookId, borrowId) => {
//     try {
//       await axios.post("http://localhost:5000/return", { bookId, borrowId });

//       // Remove the returned book from the list
//       setBorrowedBooks((prevBooks) =>
//         prevBooks.filter((book) => book._id !== borrowId)
//       );
//     } catch (err) {
//       console.error("Error returning book:", err);
//     }
//   };

//   return (
//     <div className="container mx-auto grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 my-24 ml-3">
//       {borrowedBooks.map((book) => (
//         <div key={book._id} className="card card-compact bg-base-100 w-96 shadow-xl">
//           <figure>
//             <img className="h-56 w-full" src={book.image} alt={book.name} />
//           </figure>
//           <div className="card-body">
//           <div className="card-actions justify-end">
//                 <button className="rounded-full bg-orange-200 px-4 py-1">
//                   <span className="text-sm text-slate-600 uppercase">
//                     {book.category}
//                   </span>
//                 </button>
//               </div>
//             <h2 className="card-title">{book.name}</h2>

//             <p>Borrowed on: {new Date(book.startDate).toLocaleDateString()}</p>
//             <p>Return by: {new Date(book.returnDate).toLocaleDateString()}</p>
//             <div className="card-actions justify-end">
//               <button
//                 className="btn bg-[#FF3811]"
//                 onClick={() => handleReturn(book.bookId, book._id)}
//               >
//                 <span className="text-white">Return Book</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BorrowedBooks;

// // import { useEffect, useState } from "react";

// // import toast from "react-hot-toast";
// // import useAxiosSecure from "../hooks/useAxiosSecure";
// // import useAuth from "../hooks/useAuth";

// // const BorrowedBooks = () => {
// //   const axiosSecure = useAxiosSecure();
// //   const { user } = useAuth();
// //   const [borrows, setBorrows] = useState([]);

// //   useEffect(() => {
// //     getData();
// //   }, [user]);

// //   const getData = async () => {
// //     const { data } = await axiosSecure(`/borrowed-books/${user?.email}`);
// //     setBorrows(data);
// //   };

// //   const handleReturn = async (id) => {
// //     try {
// //       const { data } = await axiosSecure.delete(`/borrow/${id}`);
// //       console.log(data);
// //       toast.success("Delete Successful");

// //       //refresh ui
// //       getData();
// //     } catch (err) {
// //       console.log(err.message);
// //       toast.error(err.message);
// //     }
// //   };
// //   return (
// //     <div className="container mx-auto grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 my-24 ml-3">
// //       {borrows.map((borrow) => (
// //         <div
// //           key={borrow._id}
// //           className="card card-compact bg-base-100 w-96 shadow-xl"
// //         >
// //           <figure>
// //             <img className="h-56 w-full" src={borrow.image} alt={borrow.name} />
// //           </figure>
// //           <div className="card-body">
// //             <div className="card-actions justify-end">
// //               <button className="rounded-full bg-orange-200 px-4 py-1">
// //                 <span className="text-sm text-slate-600 uppercase">
// //                   {borrow.category}
// //                 </span>
// //               </button>
// //             </div>
// //             <h2 className="card-title">{borrow.name}</h2>

// //             <p>Borrowed on: {new Date(borrow.startDate).toLocaleDateString()}</p>
// //             <p>Return by: {new Date(borrow.returnDate).toLocaleDateString()}</p>
// //             <div className="card-actions justify-end">
// //               <button
// //                 className="btn bg-[#FF3811]"
// //                 onClick={() => handleReturn(borrow._id)}
// //               >
// //                 <span className="text-white">Return Book</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default BorrowedBooks;


import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch borrowed books for the logged-in user
    axios
      .get("http://localhost:5000/borrowed-books", {
        params: { email: user.email },
      })
      .then((response) => {
        setBorrowedBooks(response.data);
      })
      .catch((err) => console.error("Error fetching borrowed books:", err));
  }, [user.email]);

  // Handle returning a book
  const handleReturn = async (bookId, borrowId) => {
    try {
      const response = await axios.post("http://localhost:5000/return", { bookId, borrowId });
      
      if (response.status === 200) {
        // Remove the returned book from the list
        setBorrowedBooks((prevBooks) =>
          prevBooks.filter((book) => book._id !== borrowId)
        );
        toast.success("Book returned successfully!");
      } else {
        toast.error("Failed to return the book.");
      }
    } catch (err) {
      console.error("Error returning book:", err);
      toast.error("Error returning the book. Please try again.");
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-24 ml-3">
      {borrowedBooks.map((book) => (
        <div key={book._id} className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-56 w-full" src={book.image} alt={book.name} />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="rounded-full bg-orange-200 px-4 py-1">
                <span className="text-sm text-slate-600 uppercase">
                  {book.category}
                </span>
              </button>
            </div>
            <h2 className="card-title">{book.name}</h2>
            <p>Borrowed on: {new Date(book.startDate).toLocaleDateString()}</p>
            <p>Return by: {new Date(book.returnDate).toLocaleDateString()}</p>
            <div className="card-actions justify-end">
              <button
                className="btn bg-[#FF3811]"
                onClick={() => handleReturn(book.bookId, book._id)}
              >
                <span className="text-white">Return Book</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;
