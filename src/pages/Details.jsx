// import  { useState, useEffect } from 'react';
// import { useParams, useNavigate, } from 'react-router-dom';
// import Modal from 'react-modal';
// import axios from 'axios';
// import useAuth from '../hooks/useAuth';

// const Details = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState(null);
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [returnDate, setReturnDate] = useState('');
//     const { user } = useAuth() // User authentication context
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!user) {
//             // Redirect to login if not authenticated

//             navigate('/login');
//             return;
//         }

//         // Fetch book details
//         axios.get(`/http://localhost:5000/books/${id}`)
//             .then(response => setBook(response.data))
//             .catch(err => console.error(err));
//     }, [id, user, navigate]);

//     const {_id, name, authorName, category, rating ,image} = book ||{}

//     const handleBorrow = () => {
//         setModalIsOpen(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post(`/http://localhost:5000/borrow/${id}`, { returnDate, email: user.email, name: user.displayName })
//             .then(() => {
//                 setModalIsOpen(false);
//                 setBook(prev => ({ ...prev, quantity: prev.quantity - 1 }));
//             })
//             .catch(err => console.error(err));
//     };

//     const handleModalClose = () => {
//         setModalIsOpen(false);
//     };

//     if (!book) return <div>Loading...</div>;

//     return (
//         <div>
//             {/* <h1>{book.title}</h1>
//             <img src={book.imageUrl} alt={book.title} />
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>Category:</strong> {book.category}</p>
//             <p><strong>Description:</strong> {book.description}</p>
//             <p><strong>Quantity:</strong> {book.quantity}</p> */}
//         <section className="bg-white dark:bg-gray-900">
//             <div className="container px-6 py-10 mx-auto">

//             <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
//             {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""> */}
//                 <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src='https://m.media-amazon.com/images/I/619P-RqEOUL._SY522_.jpg' alt="" />
//             <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
//                 <p className="text-sm text-blue-500 uppercase">{name}</p>

//                 <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
//                     All the features you want to know
//                 </a>

//                 <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
//                     laudantium quia tempore delect
//                 </p>

//                 <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

//                 <div className="flex items-center mt-6">
//                     {/* <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""> */}

//                     <div className="mx-4">
//                         <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className='card-actions justify-end'>
//         <button className='btn  btn-error ' onClick={handleBorrow} disabled={book.quantity <= 0}>
//                <span className='text-2xl text-white uppercase'> Borrow</span>
//             </button>
//         </div>

//             <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
//                 <h2>Borrow Book</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="returnDate">Return Date:</label>
//                         <input
//                             type="date"
//                             id="returnDate"
//                             value={returnDate}
//                             onChange={(e) => setReturnDate(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//                 <button onClick={handleModalClose}>Close</button>
//             </Modal>
//     </div>
// </section>

//         </div>
//     );
// };

// export default Details;

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import axios from 'axios';
// import useAuth from '../hooks/useAuth';
// // import RatingStars from './RatingStars';

// const Details = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState(null);
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [returnDate, setReturnDate] = useState('');
//     const { user } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }

//         axios.get(`http://localhost:5000/books/${id}`)
//             .then(response => {
//                 setBook(response.data);
//             })
//             .catch(err => console.error('Error fetching book details:', err));
//     }, [id, user, navigate]);

//     const handleBorrow = () => {
//         setModalIsOpen(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post(`http://localhost:5000/borrow/${id}`, { returnDate, email: user.email, name: user.displayName })
//             .then(() => {
//                 setModalIsOpen(false);
//                 setBook(prev => ({ ...prev, quantity: prev.quantity - 1 }));
//             })
//             .catch(err => console.error('Error borrowing book:', err));
//     };

//     const handleModalClose = () => {
//         setModalIsOpen(false);
//     };

//     if (!book) return <div>Loading...</div>;

//     return (
//         <div>
//             <section className="bg-white dark:bg-gray-900">
//                 <div className="container px-6 py-10 mx-auto">
//                     <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
//                         <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={book.image || 'fallback-image-url'} alt={book.name || 'Book Image'} />
//                         <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

//                             {/* <p className="text-sm text-blue-500 uppercase text-end rounded ">{book.category}</p> */}
//                             <div className='card-actions justify-end '>
//                         <button className='rounded-full bg-orange-200  px-4 py-1'>
//                             <span className='text-sm text-slate-600  uppercase'>{book.category}</span>
//                         </button>
//                     </div>
//                             <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
//                                 {book.name}
//                             </h1>
//                             <p>{book.rating}</p>
//                             <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect
//                             </p>

//                             <div className="flex items-center mt-6">
//                                 <div className="mx-4">
//                                     <h1 className="text-sm text-gray-700 dark:text-gray-200">{book.authorName || 'Unknown Author'}</h1>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='card-actions justify-end'>
//                         <button className='btn bg-orange-600' onClick={handleBorrow} disabled={book.quantity <= 0}>
//                             <span className='text-2xl text-white uppercase'>Borrow</span>
//                         </button>
//                     </div>
//                     <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose}>
//                         <h2>Borrow Book</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="returnDate">Return Date:</label>
//                                 <input
//                                     type="date"
//                                     id="returnDate"
//                                     value={returnDate}
//                                     onChange={(e) => setReturnDate(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit">Submit</button>
//                         </form>
//                         <button onClick={handleModalClose}>Close</button>
//                     </Modal>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Details;

// src/components/Details.js

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Modal from "react-modal";
// import axios from "axios";
// import useAuth from "../hooks/useAuth";
// import RatingStars from "./RatingStars ";
// // import ReactDatePicker from "react-datepicker";

// const Details = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [returnDate, setReturnDate] = useState("");
//   const [startDate, setStartDate] = useState(new Date());
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     axios
//       .get(`http://localhost:5000/books/${id}`)
//       .then((response) => {
//         setBook(response.data);
//       })
//       .catch((err) => console.error("Error fetching book details:", err));
//   }, [id, user, navigate]);

//   const handleBorrow = () => {
//     setModalIsOpen(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`http://localhost:5000/borrows/${id}`, {
//         returnDate,
//         email: user.email,
//         name: user.displayName,
//       })
//       .then(() => {
//         setModalIsOpen(false);
//         setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
//       })
//       .catch((err) => console.error("Error borrowing book:", err));
//   };

//   const handleModalClose = () => {
//     setModalIsOpen(false);
//   };

//   if (!book) return <div>Loading...</div>;

//   return (
//     <div>
//       <section className=" dark:bg-gray-900">
//         <div className="container px-6 py-10 mx-auto">
//           <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
//             <img
//               className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 mt-5 lg:h-96"
//               src={book.image || "fallback-image-url"}
//               alt={book.name || "Book Image"}
//             />
//             <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
//               <div className="card-actions justify-end ">
//                 <button className="rounded-full bg-orange-200  px-4 py-1">
//                   <span className="text-sm text-slate-600  uppercase">
//                     {book.category}
//                   </span>
//                 </button>
//               </div>
//               <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
//                 {book.name}
//               </h1>

//               <h1 className="text-[15px] text-orange-400 dark:text-gray-200">
//                 <span className="mr-2 text-slate-950">by</span>
//                 {book.authorName || "Unknown Author"}{" "}
//                 <span className="text-slate-500">(Author)</span>{" "}
//               </h1>

//               <div className="mt-2 flex space-x-2">
//                 <p>{book.rating} </p>
//                 <p className="mt-1">
//                   <RatingStars rating={book.rating} />
//                 </p>
//                 <p className="px-6 text-orange-400">5 ratings</p>
//               </div>
//               <p className="text-lg py-3">Quantity of the book :  {book.quantity}</p>
//               <hr className="my-3" />
//               <p className="mt-5 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//                 {book.description}
//               </p>
//               <hr className="my-3" />
//             </div>
//           </div>
//           <div className="card-actions justify-end">
//             <button
//               className="btn bg-[#FF3811]"
//               onClick={handleBorrow}
//               disabled={book.quantity <= 0}
//             >
//               <span className="text-2xl text-white uppercase">Borrow</span>
//             </button>
//           </div>

//           <Modal className='bg-white shadow-md' isOpen={modalIsOpen} onRequestClose={handleModalClose}>
//             <section className="p-6 w-full   rounded-md  flex-1 md:min-h-[350px]">
//               <h2 className="text-lg font-semibold text-gray-700 capitalize ">
//                 Borrow books
//               </h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//                   <div>
//                     <label className="text-gray-700 " htmlFor="emailAddress">
//                       Name
//                     </label>
//                     <input
//                       id="emailAddress"
//                       type="text"
//                       name="name"
//                       disabled
//                       defaultValue={user?.displayName}
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-gray-700 " htmlFor="emailAddress">
//                       Email Address
//                     </label>
//                     <input
//                       id="emailAddress"
//                       type="email"
//                       name="email"
//                       disabled
//                       defaultValue={user?.email}
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-gray-700 " htmlFor="name">
//                       Book Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       defaultValue={book.name}
//                       type="text"
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2 ">
//                     {/* <label className='text-gray-700'>Return date</label> */}

//                     {/* Date Picker Input Field */}
//                     {/* <ReactDatePicker
//                 className='border p-2 rounded-md'
//                 selected={startDate}
//                 onChange={date => setStartDate(date)} */}
//                     <label htmlFor="returnDate">Return Date:</label>
//                     <input
//                       className="border p-2 rounded-md"
//                       type="date"
//                       id="returnDate"
//                       value={returnDate}
//                       onChange={(e) => setReturnDate(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="flex space-x-96 justify-end mt-6">
//                   <button
//                     onClick={handleModalClose}
//                     type=""
//                     className="mr-[450px] px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </section>
//             {/* <h2>Borrow Book</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="returnDate">Return Date:</label>
//                                 <input
//                                     type="date"
//                                     id="returnDate"
//                                     value={returnDate}
//                                     onChange={(e) => setReturnDate(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit">Submit</button>
//                         </form>
//                         <button onClick={handleModalClose}>Close</button> */}
//           </Modal>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Details;

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Modal from "react-modal";
// import axios from "axios";
// import useAuth from "../hooks/useAuth";
// import RatingStars from "./RatingStars ";

// // Bind modal to your appElement
// Modal.setAppElement("#root");

// const Details = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [returnDate, setReturnDate] = useState("");
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     axios
//       .get(`http://localhost:5000/books/${id}`)
//       .then((response) => {
//         setBook(response.data);
//       })
//       .catch((err) => console.error("Error fetching book details:", err));
//   }, [id, user, navigate]);

//   const handleBorrow = () => {
//     setModalIsOpen(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//     console.log({ returnDate, email: user.email, name: user.displayName  });

//     try {
//       const response = await axios.post(`http://localhost:5000/borrows/${id}`, {
//         returnDate,
//         email: user.email,
//         name: user.displayName,
//       });
//       console.log("Server response:", response);

//       if (response.status === 200) {
//         setModalIsOpen(false);
//         setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
//       }
//     } catch (err) {
//       console.error("Error borrowing book:", err);
//     }
//   };

//   const handleModalClose = () => {
//     setModalIsOpen(false);
//   };

//   if (!book) return <div>Loading...</div>;

//   return (
//     <div>
//       <section className="dark:bg-gray-900">
//         <div className="container px-6 py-10 mx-auto">
//           <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
//             <img
//               className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 mt-5 lg:h-96"
//               src={book.image || "fallback-image-url"}
//               alt={book.name || "Book Image"}
//             />
//             <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
//               <div className="card-actions justify-end ">
//                 <button className="rounded-full bg-orange-200 px-4 py-1">
//                   <span className="text-sm text-slate-600 uppercase">
//                     {book.category}
//                   </span>
//                 </button>
//               </div>
//               <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
//                 {book.name}
//               </h1>
//               <h1 className="text-[15px] text-orange-400 dark:text-gray-200">
//                 <span className="mr-2 text-slate-950">by</span>
//                 {book.authorName || "Unknown Author"}{" "}
//                 <span className="text-slate-500">(Author)</span>{" "}
//               </h1>
//               <div className="mt-2 flex space-x-2">
//                 <p>{book.rating} </p>
//                 <p className="mt-1">
//                   <RatingStars rating={book.rating} />
//                 </p>
//                 <p className="px-6 text-orange-400">5 ratings</p>
//               </div>
//               <p className="text-lg py-3">Quantity of the book : {book.quantity}</p>
//               <hr className="my-3" />
//               <p className="mt-5 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//                 {book.description}
//               </p>
//               <hr className="my-3" />
//             </div>
//           </div>
//           <div className="card-actions justify-end">
//             <button
//               className="btn bg-[#FF3811]"
//               onClick={handleBorrow}
//               disabled={book.quantity <= 0}
//             >
//               <span className="text-2xl text-white uppercase">Borrow</span>
//             </button>
//           </div>

//           <Modal className="bg-white shadow-md" isOpen={modalIsOpen} onRequestClose={handleModalClose}>
//             <section className="p-6 w-full rounded-md flex-1 md:min-h-[350px]">
//               <h2 className="text-lg font-semibold text-gray-700 capitalize">
//                 Borrow books
//               </h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//                   <div>
//                     <label className="text-gray-700" htmlFor="emailAddress">
//                       Name
//                     </label>
//                     <input
//                       id="emailAddress"
//                       type="text"
//                       name="name"
//                       disabled
//                       defaultValue={user?.displayName}
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-gray-700" htmlFor="emailAddress">
//                       Email Address
//                     </label>
//                     <input
//                       id="emailAddress"
//                       type="email"
//                       name="email"
//                       disabled
//                       defaultValue={user?.email}
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-gray-700" htmlFor="name">
//                       Book Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       defaultValue={book.name}
//                       type="text"
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="returnDate">Return Date:</label>
//                     <input
//                       className="border p-2 rounded-md"
//                       type="date"
//                       id="returnDate"
//                       value={returnDate}
//                       onChange={(e) => setReturnDate(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex space-x-96 justify-end mt-6">
//                   <button
//                     type="button"
//                     onClick={handleModalClose}
//                     className="mr-[450px] px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </section>
//           </Modal>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Details;

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Modal from "react-modal";
// import axios from "axios";
// import useAuth from "../hooks/useAuth";
// import RatingStars from "./RatingStars ";
// // import RatingStars from "./RatingStars";

// // Bind modal to your appElement
// Modal.setAppElement("#root");

// const Details = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [returnDate, setReturnDate] = useState("");
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     axios
//       .get(`http://localhost:5000/books/${id}`)
//       .then((response) => {
//         setBook(response.data);
//       })
//       .catch((err) => console.error("Error fetching book details:", err));
//   }, [id, user, navigate]);

//   const handleBorrow = () => {
//     setModalIsOpen(true);
//   };
// const {
//     _id,
//     name,
//     quantity,
//     authorName,
//     category
// } = book || {}
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target
//     const bookId = _id
//     const returnDate = form.returnDate.value
//     const email = user?.email
//     const userName = user?.displayName
//     const authorName = form.authorName.value
//     const category = form.category.value
//     const name = form.name.value

//     const borrowData = {
//         bookId,
//         returnDate,
//         email,
//         userName,
//         authorName,
//         category,
//         name
//     }
//      console.table(borrowData);

//   const handleModalClose = () => {
//     setModalIsOpen(false);
//   };

//   if (!book) return <div>Loading...</div>;

//   return (
//     <div>
//       <section className="dark:bg-gray-900">
//         <div className="container px-6 py-10 mx-auto">
//           <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
//             <img
//               className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 mt-5 lg:h-96"
//               src={book.image || "fallback-image-url"}
//               alt={book.name || "Book Image"}
//             />
//             <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
//               <div className="card-actions justify-end">
//                 <button className="rounded-full bg-orange-200 px-4 py-1">
//                   <span className="text-sm text-slate-600 uppercase">
//                     {book.category}
//                   </span>
//                 </button>
//               </div>
//               <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
//                 {book.name}
//               </h1>
//               <h1 className="text-[15px] text-orange-400 dark:text-gray-200">
//                 <span className="mr-2 text-slate-950">by</span>
//                 {book.authorName || "Unknown Author"}{" "}
//                 <span className="text-slate-500">(Author)</span>{" "}
//               </h1>
//               <div className="mt-2 flex space-x-2">
//                 <p>{book.rating} </p>
//                 <p className="mt-1">
//                   <RatingStars rating={book.rating} />
//                 </p>
//                 <p className="px-6 text-orange-400">5 ratings</p>
//               </div>
//               <p className="text-lg py-3">Quantity of the book: {book.quantity}</p>
//               <hr className="my-3" />
//               <p className="mt-5 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//                 {book.description}
//               </p>
//               <hr className="my-3" />
//             </div>
//           </div>
//           <div className="card-actions justify-end">
//             <button
//               className="btn bg-[#FF3811]"
//               onClick={handleBorrow}
//               disabled={book.quantity <= 0}
//             >
//               <span className="text-2xl text-white uppercase">Borrow</span>
//             </button>
//           </div>

//           <Modal
//             className="bg-white shadow-md"
//             isOpen={modalIsOpen}
//             onRequestClose={handleModalClose}
//           >
//             <section className="p-6 w-full rounded-md flex-1 md:min-h-[350px]">
//               <h2 className="text-lg font-semibold text-gray-700 capitalize">
//                 Borrow books
//               </h2>
//               <form onSubmit={handleFormSubmit}>
//                 <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//                   <div>
//                     <label className="text-gray-700" htmlFor="emailAddress">
//                       Name
//                     </label>
//                     <input
//                       id="emailAddress"
//                       type="text"
//                       name="name"
//                       disabled
//                       defaultValue={user?.displayName}
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-gray-700" htmlFor="emailAddress">
//                       Email Address
//                     </label>
//                     <input
//                       id="emailAddress"
//                       type="email"
//                       name="email"
//                       disabled
//                       defaultValue={user?.email}
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-gray-700" htmlFor="name">
//                       Book Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       defaultValue={book.name}
//                       type="text"
//                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="returnDate">Return Date:</label>
//                     <input
//                       className="border p-2 rounded-md"
//                       type="date"
//                       id="returnDate"
//                       value={returnDate}
//                       onChange={(e) => setReturnDate(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex space-x-96 justify-end mt-6">
//                   <button
//                     type="button"
//                     onClick={handleModalClose}
//                     className="mr-[450px] px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </section>
//           </Modal>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Details;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import RatingStars from "./RatingStars ";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Bind modal to your appElement
// Modal.setAppElement("#root");

const Details = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  const [book, setBook] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((err) => console.error("Error fetching book details:", err));
  }, [id, user, navigate]);

  const handleBorrow = () => {
    setModalIsOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Optimistically update the quantity in the UI
    setBook((prevBook) => ({
      ...prevBook,
      quantity: prevBook.quantity - 1,
    }));
    const borrowData = {
      bookId: book._id,
      startDate,
      returnDate,
      email: user?.email,
      userName: user?.displayName,
      authorName: book.authorName,
      category: book.category,
      name: book.name,
      image: book.image,
      rating: book.rating,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/borrow",
        borrowData
      );
      console.log(data);
      // Refetch the updated book details
      const updatedBook = await axios.get(`http://localhost:5000/books/${id}`);
      setBook(updatedBook.data);

      // Close the modal after successful submission
      setModalIsOpen(false);
    } catch (err) {
      console.log(err);
      // If there's an error, revert the optimistic update
      setBook((prevBook) => ({
        ...prevBook,
        quantity: prevBook.quantity + 1,
      }));
    }
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 mt-5 lg:h-96"
              src={book.image || "fallback-image-url"}
              alt={book.name || "Book Image"}
            />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
              <div className="card-actions justify-end">
                <button className="rounded-full bg-orange-200 px-4 py-1">
                  <span className="text-sm text-slate-600 uppercase">
                    {book.category}
                  </span>
                </button>
              </div>
              <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                {book.name}
              </h1>
              <h1 className="text-[15px] text-orange-400 dark:text-gray-200">
                <span className="mr-2 text-slate-950">by</span>
                {book.authorName || "Unknown Author"}{" "}
                <span className="text-slate-500">(Author)</span>{" "}
              </h1>
              <div className="mt-2 flex space-x-2">
                <p>{book.rating} </p>
                <p className="mt-1">
                  <RatingStars rating={book.rating} />
                </p>
                <p className="px-6 text-orange-400">5 ratings</p>
              </div>
              <p className="text-lg py-3">
                Quantity of the book: {book.quantity}
              </p>
              <hr className="my-3" />
              <p className="mt-5 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {book.description}
              </p>
              <hr className="my-3" />
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn bg-[#FF3811]"
              onClick={handleBorrow}
              disabled={book.quantity <= 0}
            >
              <span className="text-2xl text-white uppercase">Borrow</span>
            </button>
          </div>

          <Modal
            className="bg-white shadow-md"
            isOpen={modalIsOpen}
            onRequestClose={handleModalClose}
          >
            <section className="p-6 w-full rounded-md flex-1 md:min-h-[350px]">
              <h2 className="text-lg font-semibold text-gray-700 capitalize">
                Borrow books
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      disabled
                      defaultValue={user?.displayName}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700" htmlFor="emailAddress">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      name="email"
                      disabled
                      defaultValue={user?.email}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700" htmlFor="bookName">
                      Book Name
                    </label>
                    <input
                      id="bookName"
                      name="bookName"
                      value={book.name}
                      type="text"
                      disabled
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="returnDate">Return Date:</label>
                    <DatePicker
                      className="border p-2 rounded-md"
                      onChange={(date) => setReturnDate(date)}
                      selected={returnDate}
                    />
                    {/* <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                  </div>
                </div>
                <div className="flex space-x-96 justify-end mt-6">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="mr-[450px] px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Details;
