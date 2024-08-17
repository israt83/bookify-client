

import { useEffect, useState } from "react";
import axios from "axios";
import BookCards from "../components/BookCards";
import TableView from "../components/TableView";
import { HiOutlineViewList } from "react-icons/hi";
import { BsGrid } from "react-icons/bs";

const AllBooks = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [find, setFind] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const [view, setView] = useState("card"); // 'card' or 'table'

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `http://localhost:5000/all-books?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      );
      setBooks(data);
    };
    getData();
  }, [currentPage, filter, find, itemsPerPage, search, sort]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `http://localhost:5000/books-count?filter=${filter}&search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filter, search, find]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  // Handle pagination button
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleReset = () => {
    setFilter("");
    setFind("");
    setSort("");
    setSearch("");
    setSearchText("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex items-center">
            <button
              onClick={() => setView("card")}
              className={`p-2 rounded-lg ${
                view === "card"
                  ? "bg-[#FF3811] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <BsGrid />
            </button>
            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-lg ml-2 ${
                view === "table"
                  ? "bg-[#FF3811] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <HiOutlineViewList />
            </button>
          </div>

          <button
            onClick={() => {
              setFind(find === "quantity>0" ? "" : "quantity>0");
              setCurrentPage(1);
            }}
            className={`btn border p-4 rounded-lg ${
              find === "quantity>0"
                ? "bg-[#FF3811] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Show available books
          </button>

          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                placeholder="Enter Book Name"
                aria-label="Enter Book Name"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
              value={sort}
              name="sort"
              id="sort"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Rating</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className="btn">
            Reset
          </button>
        </div>

        <div>
          {view === "card" ? (
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 justify-center ">
              {books.length > 0 ? (
                books.map((book) => <BookCards key={book._id} book={book} />)
              ) : (
                <p>No books found</p>
              )}
            </div>
          ) : (
            <div className="mt-8 xl:mt-16">
              <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 "
                            >
                              <div className="flex items-center gap-x-3">
                                <span>Book Image</span>
                              </div>
                            </th>

                            <th
                              scope="col"
                              className="py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                            >
                              <span>Book Name</span>
                            </th>

                            <th
                              scope="col"
                              className="px-2 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                            >
                              <button className="flex items-center gap-x-2">
                                <span> Author Name</span>
                              </button>
                            </th>

                            <th
                              scope="col"
                              className="py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                            >
                              Rating
                            </th>

                            <th className="py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500">
                              Edit
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {books.length > 0 ? (
                            books.map((book) => (
                              <TableView key={book._id} book={book} />
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center py-4">
                                No books found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>



      {/* Pagination Section */}
      <div className="flex justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF3811]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#FF3811] text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#FF3811] hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#FF3811] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
