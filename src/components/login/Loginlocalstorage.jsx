// import React, { useState } from "react";
// import Logo from "../../assets/images/Logo.svg";
// import Main from "../../assets/images/DRIP_20.svg";
// import Logo2 from "../../assets/images/Logo-2.svg";
// import Todo from "../todo/ToDo";
// import Form from "../Form/Form";

// function LoginLocalStorage() {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogout = () => {
//         localStorage.removeItem("isLoggedIn");
//         setIsLoggedIn(false);
//     };

//     return (
//         <>
//             {!isLoggedIn ? (
//                 <div className="grid grid-cols-2 grid-rows-1 gap-6 h-dvh p-7 sm:p-0 sm:grid-cols-1">
//                     <div>
//                         <div className="flex flex-col justify-center items-center gap-10 h-full relative">
//                             <div className="absolute left-0 top-0 sm:relative md:relative">
//                                 <img className="block sm:hidden md:hidden" src={Logo} alt="" />
//                                 <img className="hidden sm:block md:block" src={Logo2} alt="" />
//                             </div>
//                             <Form setIsLoggedIn={setIsLoggedIn} />
//                         </div>
//                     </div>
//                     <div className="login-section-2 block sm:hidden">
//                         <img className="bg-[#CBCCE8] rounded-[40px] h-full  w-full  " src={Main} alt="" />
//                     </div>
//                 </div>
//             ) : (
//                 <Todo onLogout={handleLogout} />
//             )}
//         </>
//     );
// }

// export default LoginLocalStorage;

import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.svg";
import Main from "../../assets/images/DRIP_20.svg";
import Logo2 from "../../assets/images/Logo-2.svg";
import Todo from "../todo/ToDo";
import Form from "../Form/Form";

function LoginLocalStorage() {
    // Check if the user is logged in when the component mounts
    useEffect(() => {
        const isLoggedInStorage = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(isLoggedInStorage === "true");
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                            <Form setIsLoggedIn={setIsLoggedIn} />
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

