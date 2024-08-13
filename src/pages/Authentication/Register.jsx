// import { Link, useLocation, useNavigate } from "react-router-dom";
// import bgImg from "../../assets/images/register.jpg";
// import logo from "../../assets/images/logo2.png";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import toast from "react-hot-toast";
// import axios from "axios";

// import 'react-toastify/dist/ReactToastify.css';
// import { GoEyeClosed } from "react-icons/go";
// import { IoEyeOutline } from "react-icons/io5";
// import { ToastContainer } from "react-toastify";
// const Registration = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state || "/";
//   const { signInWithGoogle, createUser, updateUserProfile, user, setUser } =
//     useContext(AuthContext);

//     const [toastMessage, setToastMessage] = useState("");
//     const [showPassword, setShowPassword] = useState(false);

//         // Password validation
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//         if (!passwordRegex.test(password)) {
//           toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
//           return;
//         }
    

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const pass = form.password.value;
//     console.log({ email, pass, name, photo });
//     try {
//       //2. User Registration
//       const result = await createUser(email, pass);

//       await updateUserProfile(name, photo);
//       // Optimistic UI Update
//       setUser({ ...result?.user, photoURL: photo, displayName: name });
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/jwt`,
//         {
//           email: result?.user?.email,
//         },
//         { withCredentials: true }
//       );
//       console.log(data);
//       navigate(from, { replace: true });
//       toast.success("Signup Successful");
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
//     }
//   };

//   // Google Signin
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithGoogle();
//       console.log(result.user);
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/jwt`,
//         {
//           email: result?.user?.email,
//         },
//         { withCredentials: true }
//       );
//       console.log(data);
//       toast.success("Signin Successful");
//       navigate(from, { replace: true });
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
//     }
//   };

    


//   return (
//     <ToastContainer />
//     <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
//       <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
//         <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
//           <div className="flex justify-center mx-auto">
//             <img className="w-44 h-28" src={logo} alt="" />
//           </div>

//           <p className="mt-3 text-xl text-center text-gray-600 ">
//             Get Your Free Account Now.
//           </p>
//           <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50">
//             <div
//               onClick={handleGoogleSignIn}
//               className="flex cursor-pointer items-center justify-center  transition-colors duration-300 transform  rounded-lg   hover:bg-gray-50 "
//             >
//               <div className="px-4 py-2">
//                 <svg className="w-6 h-6" viewBox="0 0 40 40">
//                   <path
//                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                     fill="#FFC107"
//                   />
//                   <path
//                     d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
//                     fill="#FF3D00"
//                   />
//                   <path
//                     d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
//                     fill="#4CAF50"
//                   />
//                   <path
//                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                     fill="#1976D2"
//                   />
//                 </svg>
//               </div>

//               {/* <span className='w-5/6 px-4 py-3 font-bold text-center'>
//               Sign in with Google
//             </span> */}
//             </div>
//             <div
//               onClick={handleGoogleSignIn}
//               className="flex cursor-pointer items-center justify-center  transition-colors duration-300 transform  rounded-lg   hover:bg-gray-50 "
//             >
//               <div className="px-4 py-2">
//                 <img className=" h-8 w-10" src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg" alt="" />
               
//               </div>

          
//             </div>
//           </div>

//           <div className="flex items-center justify-between mt-4">
//             <span className="w-1/5 border-b  lg:w-1/4"></span>

//             <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
//               or Registration with email
//             </div>

//             <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
//           </div>
//           <form onSubmit={handleSignUp}>
//             <div className="mt-4">
//               <label
//                 className="block mb-2 text-sm font-medium text-gray-600 "
//                 htmlFor="name"
//               >
//                 Username
//               </label>
//               <input
//                 id="name"
//                 autoComplete="name"
//                 name="name"
//                 className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
//                 type="text"
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 className="block mb-2 text-sm font-medium text-gray-600 "
//                 htmlFor="photo"
//               >
//                 Photo URL
//               </label>
//               <input
//                 id="photo"
//                 autoComplete="photo"
//                 name="photo"
//                 className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
//                 type="text"
//               />
//             </div>
//             <div className="mt-4">
//               <label
//                 className="block mb-2 text-sm font-medium text-gray-600 "
//                 htmlFor="LoggingEmailAddress"
//               >
//                 Email Address
//               </label>
//               <input
//                 id="LoggingEmailAddress"
//                 autoComplete="email"
//                 name="email"
//                 className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
//                 type="email"
//               />
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="input input-bordered w-full pr-10"
//                     {...register("password", { required: true })}
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-0 top-0 mt-3 mr-3 text-gray-500 focus:outline-none"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <IoEyeOutline className="h-6 w-6" /> : <GoEyeClosed className="h-6 w-6" />}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>
//             {/* <div className="mt-4">
//               <div className="flex justify-between">
//                 <label
//                   className="block mb-2 text-sm font-medium text-gray-600 "
//                   htmlFor="loggingPassword"
//                 >
//                   Password
//                 </label>
//               </div>

//               <input
//                 id="loggingPassword"
//                 autoComplete="current-password"
//                 name="password"
//                 className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
//                 type="password"
//               />
//             </div> */}
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           <div className="flex items-center justify-between mt-4">
//             <span className="w-1/5 border-b  md:w-1/4"></span>

//             <Link
//               to="/login"
//               className="text-xs text-gray-500 uppercase  hover:underline"
//             >
//               or sign in
//             </Link>

//             <span className="w-1/5 border-b  md:w-1/4"></span>
//           </div>
//         </div>
//         <div
//           className="hidden bg-cover bg-center lg:block w-[500px] h-[500px] mt-28 rounded"
//           style={{
//             backgroundImage: `url(${bgImg})`,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/images/register.jpg";
import logo from "../../assets/images/logo2.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';
import { GoEyeClosed } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const { signInWithGoogle, createUser, updateUserProfile, user, setUser } =
    useContext(AuthContext);

  // const [toastMessage, setToastMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value; // Extract the password value

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return;
    }

    console.log({ email, password, name, photo });

    try {
      // User Registration
      const result = await createUser(email, password);

      await updateUserProfile(name, photo);
      // Optimistic UI Update
      setUser({ ...result?.user, photoURL: photo, displayName: name });
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-44 h-28" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 ">
              Get Your Free Account Now.
            </p>
            <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50">
              <div
                onClick={handleGoogleSignIn}
                className="flex cursor-pointer items-center justify-center  transition-colors duration-300 transform  rounded-lg hover:bg-gray-50 "
              >
                <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="flex cursor-pointer items-center justify-center  transition-colors duration-300 transform  rounded-lg hover:bg-gray-50 "
              >
                <div className="px-4 py-2">
                  <img
                    className="h-8 w-10"
                    src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or Registration with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  id="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  id="photo"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  placeholder="Your Photo URL"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
                  type="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    required
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl absolute right-3 top-3 cursor-pointer"
                  >
                    {showPassword ? <IoEyeOutline /> : <GoEyeClosed />}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-center text-gray-500">
              Already have an account?{" "}
              <Link to="/login">
                <button className="text-xs text-gray-500 underline hover:text-gray-700">
                  Login
                </button>
              </Link>
            </p>
          </div>

          <div
            className="hidden lg:block lg:w-1/2"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
