

import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
// import { AuthContext } from '../providers/AuthProvider'

const UpdateBook = () => {
  const navigate = useNavigate()
  const book = useLoaderData()
  const {
    _id,
    image,
    name,
    authorName,
    category,
    rating,
    
  } = book || {}
  

  const handleFormSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;
  
    const bookData = { image, name, authorName, category, rating };
  
    try {
      const token = localStorage.getItem('token'); 
      const { data } = await axios.put(
        `https://library-management-system-server-cyan.vercel.app/books/${_id}`,
        bookData,
        {
          withCredentials: true, 
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      console.log(data);
      toast.success('Book Updated Successfully!');
      navigate('/all-books');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Book
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='image'>
                Book Image
              </label>
              <input
                id='image'
                name='image'
                defaultValue={image}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='name'>
                Book Name
              </label>
              <input
                id='name'
                type='text'
                name='name'
                
                defaultValue={name}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='authorName'>
              Author Name
              </label>
              <input
                id='authorName'
                type='text'
                name='authorName'
                
                defaultValue={authorName}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
           

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                defaultValue={category}
                className='border p-2 rounded-md'
              >
                <option value='The Art of Music'>The Art of Music</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='Science & Math'>Science & Math</option>
                <option value='Hobbies & Craft'>Hobbies & Craft</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='rating'>
                Rating
              </label>
              <input
                id='rating'
                defaultValue={rating}
                name='rating'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

          
          </div>
          
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#FF3811] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#FF3811]'>
            Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateBook
