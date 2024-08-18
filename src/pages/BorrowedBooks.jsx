

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
      .get("https://library-management-system-server-cyan.vercel.app/borrowed-books", {
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
      const response = await axios.post("https://library-management-system-server-cyan.vercel.app/return", { bookId, borrowId });
      
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
