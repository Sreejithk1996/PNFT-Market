import React, { useRef, useState } from 'react';
import Google from "../../assets/images/Google.svg";

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
                    <a href="https://accounts.google.com/servicelogin?hl=en-gb" target='blank'> Sign in with Google</a>
                </button>
            </div>
            <div className="flex justify-center items-center gap-1 text-sm leading-6 font-normal">
                <p>Don’t have an account?</p>
                <a href='https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S1443811963:1715803110443750&flowEntry=SignUp&flowName=GlifWebSignIn&TL=ALv_Gf-kp1Tf9Dg_ZmAfpW-OLROU32_phxAZbiC1PByFuSpPAfZnK225Lal4oOdF' target='blank' className="text-sm text-[#5429FF] font-medium hover:cursor-pointer">
                    Sign up
                </a>
            </div>
        </form>
    );
}

export default Form;









