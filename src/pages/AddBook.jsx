

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const AddBook = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const bookData = {
      image,
      name,
      authorName,
      category,
      quantity,
      description,
      rating,
     
    };
    try {
      const { data } = await axios.post(
        `https://library-management-system-server-cyan.vercel.app/book`,
        bookData ,
        {
          withCredentials: true, 
        }
         
      );
      console.log(data);
      toast.success("Book data added successfully!");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add book data!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          Add a Book
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Book Image</label>
              <input
                id="image"
                type="text"
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Author Name</label>
              <input
                id="authorName"
                name="authorName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
                required
              >
                <option value="Arts & Music">Arts & Music</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Science & Math">Science & Math</option>
                <option value="Hobbies & Craft">Hobbies & Craft</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="quantity">
                Quantity of the book
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700" htmlFor="rating">
                Rating
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                min="1"
                max="5"
                step="0.1"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              name="description"
              id="description"
              required
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
