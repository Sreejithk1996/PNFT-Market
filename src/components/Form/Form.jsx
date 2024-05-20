import React, { useRef, useState } from 'react';
import cross from "../../assets/images/X Icon.svg"
import hide from "../../assets/images/Hide Icon.svg"


function Form({ setIsLoggedIn }) {
    const [error, setError] = useState(null);
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();

        if (!enteredEmail || !enteredPassword) {
            setError("Email and password are required.");
            return;
        }

        if (!validateEmail(enteredEmail)) {
            setError("Invalid email format.");
            return;
        }

        if (enteredEmail === "sreejith@gmail.com" && enteredPassword === "metrictree") {
            localStorage.setItem("isLoggedIn", true);
            setIsLoggedIn(true);
            setError(null);
        } else {
            setError("Invalid email or password.");
        }
    };


    return (
        <form className="flex flex-col gap-[50px] w-[400px] h-[517px]" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center w-full gap-2">
                <p className="text-[20px] font-semibold text-[#344054] sm:text-4xl md:text-4xl leading-5">Sign In</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className="form-control flex flex-col gap-2 relative">
                    <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="email">Email</label>
                    <input name="email" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2 " type="text" placeholder="debra.holt@example.com" ref={emailRef} />
                    <img className='w-[20px] absolute right-2 top-[55%]' src={cross} alt="" />
                </div>
                <div className="form-control flex flex-col gap-2 relative">
                    <label className="text-sm text-[#344054] font-semibold leading-5" htmlFor="password">Password</label>
                    <input name="password" className="border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2" type="password" placeholder="••••••••" ref={passwordRef} />
                    <img className='w-[20px] absolute right-2 top-[55%]' src={hide} alt="" />
                </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <button type="submit" className="text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[44px] bg-[#5429FF] w-[400px] hover:bg-[#492bbd]">Sign in</button>
            </div>
        </form>
    );
}

export default Form;









