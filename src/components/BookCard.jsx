/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { _id, name, authorName, category, rating ,image} = book || {};
  return (
    <Link
      to={`/book/${_id}`}
      
    >
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="w-1/3 max-h-full bg-cover">
        <img className='w-full h-36' src={image} alt="" />
      </div>
     
      <div className="w-2/3  px-4">
      {/* <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {category}
        </span> */}
        <p className="rounded-full text-end  text-xs ">{category}</p>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {name}
        </h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        authorName: {authorName}
        </p>

        <div className="flex mt-2 item-center space-x-10">
          <svg
            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          {rating}
        </div>
        <div className="card-actions justify-end">

    </div>
       
      </div>
    </div>
   </Link>
  );
};

export default BookCard;
