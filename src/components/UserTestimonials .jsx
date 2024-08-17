import { FcRating } from "react-icons/fc";
import { CgArrowRight } from "react-icons/cg";
import { CgArrowLeft } from "react-icons/cg";

const UserTestimonials = () => {
  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-250px)]">
        <div className="text-center">
          <h1 className="text-xl font-bold text-[#FF3811] py-2 capitalize  dark:text-white">
            Testimonial
          </h1>
          <h1 className="text-2xl font-bold text-black capitalize lg:text-3xl dark:text-white">
            What Says library user
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <div id="slide1" className="carousel-item relative w-full">
          
          <div className="absolute left-5 right-5 px-9 mt-36 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle ">
            <CgArrowLeft />
            </a>
            <a href="#slide2" className="btn btn-circle ">
            <CgArrowRight />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:flex lg:gap-4  lg:px-36">
          <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center  md:justify-start">
              {/* <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"> */}
              <img
                className="object-cover w-16 h-16 border-2 border-[#FF3811] rounded-full dark:border-[#FF3811]"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                alt=""
              />
              <div className="grid grid-rows-2">
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 px-4">
                  Awlad Hossain
                </h1>
                <p className="uppercase mt-2  font-semibold text-[#737373] dark:text-white md:mt-0 px-4">
                  Student
                </p>
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <div className="flex justify-start mt-4">
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
            </div>
          </div>
          <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center  md:justify-start">
              {/* <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"> */}
              <img
                className="object-cover w-16 h-16 border-2 border-[#FF3811] rounded-full dark:border-[#FF3811]"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt=""
              />
              <div className="grid grid-rows-2">
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 px-4">
                  Khatab Wedaa
                </h1>
                <p className="uppercase mt-2  font-semibold text-[#737373] dark:text-white md:mt-0 px-4">
                  Student
                </p>
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <div className="flex justify-start mt-4">
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
              <p className="">
                <FcRating />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="rounded-full bg-[#F3F3F3] w-10 h-10 justify-end ml-[1050px]">
          <p className="px-2 py-3">
            <CgArrowRight />
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default UserTestimonials;
