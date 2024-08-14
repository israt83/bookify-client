// import { useEffect, useState } from 'react'

// import axios from 'axios'
// import BookCard from '../components/bookCard'

// const AllBooks = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(4)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [count, setCount] = useState(0)
//   const [filter, setFilter] = useState('')
//   const [sort, setSort] = useState('')
//   const [search, setSearch] = useState('')
//   const [searchText, setSearchText] = useState('')
//   const [books, setBooks] = useState([])
//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await axios(
//         `${
//           import.meta.env.VITE_API_URL
//         }/all-books?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
//       )
//       setBooks(data)
//     }
//     getData()
//   }, [currentPage, filter, itemsPerPage, search, sort])
//   useEffect(() => {
//     const getCount = async () => {
//       const { data } = await axios(
//         `${
//           import.meta.env.VITE_API_URL
//         }/books-count?filter=${filter}&search=${search}`
//       )

//       setCount(data.count)
//     }
//     getCount()
//   }, [filter, search])

//   console.log(count)
//   const numberOfPages = Math.ceil(count / itemsPerPage)
//   const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

//   //  handle pagination button
//   const handlePaginationButton = value => {
//     console.log(value)
//     setCurrentPage(value)
//   }
//   const handleReset = () => {
//     setFilter('')
//     setSort('')
//     setSearch('')
//     setSearchText('')
//   }

//   const handleSearch = e => {
//     e.preventDefault()

//     setSearch(searchText)
//   }

//   console.log(search)
//   return (
//     <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
//       <div>
//         <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
//           <div>
//             <select
//               onChange={e => {
//                 setFilter(e.target.value)
//                 setCurrentPage(1)
//               }}
//               value={filter}
//               name='category'
//               id='category'
//               className='border p-4 rounded-lg'
//             >
//               <option value=''>Filter By Category</option>
//               <option value='Arts & Music'>Arts & Music</option>
//               <option value='Entertainment'>Entertainment</option>
//               <option value='Science & Math'>Science & Math</option>
//               <option value='Science & Math'> Hobbies & Craft</option>
//             </select>
//           </div>

//           <form onSubmit={handleSearch}>
//             <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
//               <input
//                 className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
//                 type='text'
//                 onChange={e => setSearchText(e.target.value)}
//                 value={searchText}
//                 name='search'
//                 placeholder='Enter Job Title'
//                 aria-label='Enter Job Title'
//               />

//               <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
//                 Search
//               </button>
//             </div>
//           </form>
//           <div>
//             <select
//               onChange={e => {
//                 setSort(e.target.value)
//                 setCurrentPage(1)
//               }}
//               value={sort}
//               name='sort'
//               id='sort'
//               className='border p-4 rounded-md'
//             >
//               <option value=''>Sort By Rating</option>
//               <option value='dsc'>Descending Order</option>
//               <option value='asc'>Ascending Order</option>
//             </select>
//           </div>
//           <button onClick={handleReset} className='btn'>
//             Reset
//           </button>
//         </div>
//         <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//           {books.map(book => (
//             <BookCard key={book._id} book={book} />
//           ))}
//         </div>
//       </div>

//       {/* Pagination Section */}
//       <div className='flex justify-center mt-12'>
//         {/* Previous Button */}
//         <button
//           disabled={currentPage === 1}
//           onClick={() => handlePaginationButton(currentPage - 1)}
//           className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'
//         >
//           <div className='flex items-center -mx-1'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className='w-6 h-6 mx-1 rtl:-scale-x-100'
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='currentColor'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M7 16l-4-4m0 0l4-4m-4 4h18'
//               />
//             </svg>

//             <span className='mx-1'>previous</span>
//           </div>
//         </button>
//         {/* Numbers */}
//         {pages.map(btnNum => (
//           <button
//             onClick={() => handlePaginationButton(btnNum)}
//             key={btnNum}
//             className={`hidden ${
//               currentPage === btnNum ? 'bg-blue-500 text-white' : ''
//             } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
//           >
//             {btnNum}
//           </button>
//         ))}
//         {/* Next Button */}
//         <button
//           disabled={currentPage === numberOfPages}
//           onClick={() => handlePaginationButton(currentPage + 1)}
//           className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
//         >
//           <div className='flex items-center -mx-1'>
//             <span className='mx-1'>Next</span>

//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className='w-6 h-6 mx-1 rtl:-scale-x-100'
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='currentColor'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M17 8l4 4m0 0l-4 4m4-4H3'
//               />
//             </svg>
//           </div>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default AllBooks

import { useEffect, useState } from "react";
import axios from "axios";
import BookCards from "../components/BookCards";
import TableView from "../components/TableView";
import { HiOutlineViewList } from "react-icons/hi";
import { BsGrid } from "react-icons/bs";

const AllBooks = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `http://localhost:5000/all-books?page=${currentPage}&size=${itemsPerPage}&sort=${sort}&search=${search}`
      );
      setBooks(data);
    };
    getData();
  }, [currentPage, filter, itemsPerPage, search, sort]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `http://localhost:5000/books-count?filter=${filter}&search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleReset = () => {
    setFilter("");
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
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <div className="join grid grid-cols-2">
                <button className="join-item btn btn-outline">
                <BsGrid />
                </button>
                <button className="join-item btn btn-outline"><HiOutlineViewList /></button>
              </div>
            </select>
          </div>

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
        <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {books.length > 0 ? (
            books.map((book) => <BookCards key={book._id} book={book} />)
          ) : (
            <p>No books found</p>
          )}
         
        </div>
        <div>
        {books.length > 0 ? (
            books.map((book) => <TableView key={book._id} book={book} />)
          ) : (
            <p>No books found</p>
          )}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white"
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
            <span className="mx-1">Previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
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
