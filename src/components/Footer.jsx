import logo2 from '../assets/images/logo2.png'
const Footer = () => {
  return (
    <footer className='bg-white shadow-sm'>
      <hr />
      <div className='container px-6 py-8 mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex gap-2 items-center'>
            <img className='w-44 h-32' src={logo2} alt='' />
            
          </div>

          <div className='flex flex-wrap justify-center mt-6 -mx-4'>
            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Home{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              About{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Teams{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Privacy{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Cookies{' '}
            </a>
          </div>
        </div>

        <hr className='my-6 border-gray-200 md:my-10 ' />

        <div className=''>
          <p className='text-sm text-gray-500 text-center'>
            © Copyright 2021. All Rights Reserved.
          </p>

       
        </div>
      </div>
    </footer>
  )
}

export default Footer
