/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { FiEdit } from "react-icons/fi";

const TableView = ({ book }) => {
  const { _id, name, authorName, category, rating, image } = book || {};
  return (
    <Link to={`/book/${_id}`}>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200 ">
                  <tr>
                    {/* Image Cell */}
                    <td className="pl-2 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <img
                        src={image}
                        alt={name}
                        className="w-28 h-20 object-cover rounded-md"
                      />
                    </td>

                   <td className="px-4 py-4 text-sm  text-gray-500  whitespace-nowrap">
                        {name}
                      </td> 

                    <td className=" py-4 text-sm text-gray-500  whitespace-nowrap">
                      {authorName}
                    </td>
                    <td className=" py-4 text-[#FF3811] text-sm whitespace-nowrap">
                  
                       
                        {category}
                    
                     
                    
                    </td>
                    <td className="py-4 px-5  text-sm text-gray-500  whitespace-nowrap">
                      {rating}
                    </td>
                    <td className=" py-4 text-sm whitespace-nowrap">
                
                        <Link
                          to={`/update/${book._id}`}
                          className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </Link>
                    
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TableView;
