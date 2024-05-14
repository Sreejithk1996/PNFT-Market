// import React, {useRef} from "react";
// import Logo from "../../assets/images/Logo.svg";
// import Main from "../../assets/images/DRIP_20.svg";
// import Google from "../../assets/images/Google.svg";
// import X from "../../assets/images/X Icon.svg";
// import Logo2 from "../../assets/images/Logo-2.svg";
// import Home from "./Home";


// function Loginlocalstorage() {
//   const email = useRef()
//   const password = useRef()
//   const getEmail=localStorage.getItem("emailData")
//   const getPassword=localStorage.getItem("passwordData")
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     if(email.current.value=="sreejith@gmail.com" && password.current.value=="password")
//     localStorage.setItem("emailData","sreejith@gmail.com")
//     localStorage.setItem("passwordData","password")
//   }
//   //  console.log(email.current.value);
//   return (
//     <>

//     <div className="grid grid-cols-2 grid-rows-1 gap-6 h-dvh p-7 sm:p-0 sm:grid-cols-1 ">
//       <div>
//         <div className="flex flex-col justify-center items-center gap-10 h-full relative">
//           <div className="absolute left-0 top-0 sm:relative md:relative">
//             <img className="block sm:hidden md:hidden" src={Logo} alt="" />
//             <img className="hidden sm:block md:block" src={Logo2} alt="" />
//           </div>
//             {
//                getEmail&&getPassword?<Home/>:
//             <form className="flex flex-col gap-5 w-[360px] h-[517px]" onSubmit={handleSubmit}>
//               <div className="flex flex-col w-[360px] gap-2">
//                 <p className=" text-5xl font-bold text-[#344054] sm:text-4xl md:text-4xl">NFT Access</p>
//                 <p className="text-[#667085]">Please fill your detail to access your account.</p>
//               </div>
//               <div className="form-control flex flex-col gap-2">
//                 <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="email">Email</label>
//                 <input name="email" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="text" placeholder="debra.holt@example.com" ref={email}/>
//               </div>
//               <div className=" form-control flex flex-col gap-2">
//                 <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="password">Password</label>
//                 <input name="password" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="password" placeholder="••••••••" ref={password}/>
//               </div>
//               <div className="flex justify-between">
//                 <div className="flex gap-1">
//                   <input type="checkbox" id="myCheckbox" />
//                   <label className="text-sm text-[#344054] font-semibold" htmlFor="myCheckbox">Remember me</label>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#5429FF] font-semibold hover:cursor-pointer">Forgot Password?</p>
//                 </div>
//               </div>
//               <div>
//                 <button type="submit" className="text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[44px] bg-[#5429FF] w-[360px] hover:bg-[#492bbd]">Sign in</button>
//               </div>
//               <div>
//                 <button className="flex justify-center items-center gap-2 text-base text-[#344054] border-[1px] border-[#D0D5DD] font-medium leading-5 rounded-lg h-[44px] w-[360px] hover:bg-[#5429FF] hover:text-[#FFFF]">
//                   <img src={Google} alt="" />
//                   Sign in with Google
//                 </button>
//               </div>
//               <div className="flex justify-center items-center gap-1 text-sm leading-6 font-normal">
//                 <p>Don’t have an account?</p>
//                 <p className="text-sm text-[#5429FF] font-medium hover:cursor-pointer">
//                   Sign up
//                 </p>
//               </div>
//             </form>
//             }
//         </div>
//       </div>
//       <div className="login-section-2 block sm:hidden">
//         <img className="bg-[#CBCCE8] rounded-[40px] h-full  w-full  " src={Main} alt=""/>
//       </div>
//     </div>

//     </>
//   );
// }

// export default Loginlocalstorage;




import React, { useRef, useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import Main from "../../assets/images/DRIP_20.svg";
import Google from "../../assets/images/Google.svg";
import Logo2 from "../../assets/images/Logo-2.svg";
import Todo from "../todo/ToDo"

function LoginLocalStorage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredEmail === "sreejith@gmail.com" && enteredPassword === "password") {
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
      <div className="grid grid-cols-2 grid-rows-1 gap-6 h-dvh p-7 sm:p-0 sm:grid-cols-1">
        <div>
          <div className="flex flex-col justify-center items-center gap-10 h-full relative">
            <div className="absolute left-0 top-0 sm:relative md:relative">
              <img className="block sm:hidden md:hidden" src={Logo} alt="" />
              <img className="hidden sm:block md:block" src={Logo2} alt="" />
            </div>
            
              <form className="flex flex-col gap-5 w-[360px] h-[517px]" onSubmit={handleSubmit}>
                <div className="flex flex-col w-[360px] gap-2">
                  <p className="text-5xl font-bold text-[#344054] sm:text-4xl md:text-4xl">NFT Access</p>
                  <p className="text-[#667085]">Please fill your detail to access your account.</p>
                </div>
                <div className="form-control flex flex-col gap-2">
                  <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="email">Email</label>
                  <input name="email" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="text" placeholder="debra.holt@example.com" ref={emailRef} />
                </div>
                <div className="form-control flex flex-col gap-2">
                  <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="password">Password</label>
                  <input name="password" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="password" placeholder="••••••••" ref={passwordRef} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <input type="checkbox" id="myCheckbox" />
                    <label className="text-sm text-[#344054] font-semibold" htmlFor="myCheckbox">Remember me</label>
                  </div>
                  <div>
                    <p className="text-sm text-[#5429FF] font-semibold hover:cursor-pointer">Forgot Password?</p>
                  </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <button type="submit" className="text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[44px] bg-[#5429FF] w-[360px] hover:bg-[#492bbd]">Sign in</button>
                </div>
                <div>
                  <button className="flex justify-center items-center gap-2 text-base text-[#344054] border-[1px] border-[#D0D5DD] font-medium leading-5 rounded-lg h-[44px] w-[360px] hover:bg-[#5429FF] hover:text-[#FFFF]">
                    <img src={Google} alt="" />
                    Sign in with Google
                  </button>
                </div>
                <div className="flex justify-center items-center gap-1 text-sm leading-6 font-normal">
                  <p>Don’t have an account?</p>
                  <p className="text-sm text-[#5429FF] font-medium hover:cursor-pointer">
                    Sign up
                  </p>
                </div>
              </form>
           
          </div>
        </div>
        <div className="login-section-2 block sm:hidden">
          <img className="bg-[#CBCCE8] rounded-[40px] h-full  w-full  " src={Main} alt="" />
        </div>
      </div>
    ) : (
      <Todo onLogout={handleLogout} />
    )}
    </>
  );
}

export default LoginLocalStorage;


// import React, { useRef } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
// import Logo from "../../assets/images/Logo.svg";
// import Main from "../../assets/images/DRIP_20.svg";
// import Google from "../../assets/images/Google.svg";
// import Logo2 from "../../assets/images/Logo-2.svg";
// import Home from "./Home";

// function LoginForm() {
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const enteredEmail = emailRef.current.value;
//     const enteredPassword = passwordRef.current.value;

//     if (enteredEmail === "sreejith@gmail.com" && enteredPassword === "password") {
//       localStorage.setItem("isLoggedIn", true);
//       navigate("/home"); // Navigate to the home page
//     }
//   };

//   return (
//     <form className="flex flex-col gap-5 w-[360px] h-[517px]" onSubmit={handleSubmit}>
//       <div className="flex flex-col w-[360px] gap-2">
//         <p className="text-5xl font-bold text-[#344054] sm:text-4xl md:text-4xl">NFT Access</p>
//         <p className="text-[#667085]">Please fill your detail to access your account.</p>
//       </div>
//       <div className="form-control flex flex-col gap-2">
//         <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="email">Email</label>
//         <input name="email" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="text" placeholder="debra.holt@example.com" ref={emailRef} />
//       </div>
//       <div className="form-control flex flex-col gap-2">
//         <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="password">Password</label>
//         <input name="password" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="password" placeholder="••••••••" ref={passwordRef} />
//       </div>
//       <div className="flex justify-between">
//         <div className="flex gap-1">
//           <input type="checkbox" id="myCheckbox" />
//           <label className="text-sm text-[#344054] font-semibold" htmlFor="myCheckbox">Remember me</label>
//         </div>
//         <div>
//           <p className="text-sm text-[#5429FF] font-semibold hover:cursor-pointer">Forgot Password?</p>
//         </div>
//       </div>
//       <div>
//         <button type="submit" className="text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[44px] bg-[#5429FF] w-[360px] hover:bg-[#492bbd]">Sign in</button>
//       </div>
//       <div>
//         <button className="flex justify-center items-center gap-2 text-base text-[#344054] border-[1px] border-[#D0D5DD] font-medium leading-5 rounded-lg h-[44px] w-[360px] hover:bg-[#5429FF] hover:text-[#FFFF]">
//           <img src={Google} alt="" />
//           Sign in with Google
//         </button>
//       </div>
//       <div className="flex justify-center items-center gap-1 text-sm leading-6 font-normal">
//         <p>Don’t have an account?</p>
//         <Link to="/signup" className="text-sm text-[#5429FF] font-medium hover:cursor-pointer">
//           Sign up
//         </Link>
//       </div>
//     </form>
//   );
// }

// function LoginLocalStorage() {
//   return (
//     <Router>
//       <div className="grid grid-cols-2 grid-rows-1 gap-6 h-dvh p-7 sm:p-0 sm:grid-cols-1">
//         <div>
//           <div className="flex flex-col justify-center items-center gap-10 h-full relative">
//             <div className="absolute left-0 top-0 sm:relative md:relative">
//               <img className="block sm:hidden md:hidden" src={Logo} alt="" />
//               <img className="hidden sm:block md:block" src={Logo2} alt="" />
//             </div>
//             <Routes>
//               <Route path="/home" element={<Home />} />
//               <Route path="/" element={<LoginForm />} />
//             </Routes>
//           </div>
//         </div>
//         <div className="login-section-2 block sm:hidden">
//           <img className="bg-[#CBCCE8] rounded-[40px] h-full  w-full  " src={Main} alt="" />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default LoginLocalStorage;













