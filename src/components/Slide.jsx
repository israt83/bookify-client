import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <p className='text-6xl font-bold text-white my-5'>Book Haven</p>
          <p className=' text-white lg:text-2xl'>
          Embark on a Literary Adventure Like Never Before! Dive into <br /> a World of Imagination and Knowledge
          </p>
          <br />
          <Link
            to='/'
            className=' '
          >
            <button className="btn btn-outline text-white border-t-cyan-50 text-xl"><span className=''>Start Exploring</span></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
