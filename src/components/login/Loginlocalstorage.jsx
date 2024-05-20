import React, { useState, useEffect } from "react";
import Main from "../../assets/images/DRIP_20.svg";
import titlelogo from "../../assets/images/Logo-title.png";
import Todo from "../todo/ToDo";
import Form from "../Form/Form";

function LoginLocalStorage() {
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
                <div className="grid grid-cols-2 grid-rows-1 gap-6 h-dvh p-9 sm:p-0 sm:grid-cols-1 md:gap-8">
                    <div>
                        <div className="flex flex-col justify-center items-center gap-10 h-full relative">
                            <div className="absolute left-0 top-0 sm:relative md:relative ">
                                <div className="flex items-center gap-3 block sm:hidden md:hidden">
                                    <img src={titlelogo} alt="" />
                                    <p className="font-semibold text-lg leading-5 ">DoDo</p>
                                </div>
                                <div className="flex hidden sm:flex sm:flex-col sm:gap-3 md:flex md:flex-col md:gap-3">
                                    <img src={titlelogo} alt="" />
                                    <p className="font-semibold text-lg leading-5 ">DoDo</p>
                                </div>
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

