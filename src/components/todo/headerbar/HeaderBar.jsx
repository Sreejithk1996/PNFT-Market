import React from 'react'
import titlelogo from "../../../assets/images/Logo-title.png";
import logouticon from "../../../assets/images/XMLID_2_.svg";

function HeaderBar() {

    const handleClick = ()=> {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <div className='flex justify-center items-center gap-2'>
                <img src={titlelogo} alt="" /><p className='font-semibold text-lg'>DoDo</p>
            </div>
            <div className='flex flex-row-reverse items-center gap-3'>
                <button onClick={handleClick}><img className='transition delay-100 hover:rotate-[-90deg] hover:transition delay-100 sm:mx-[20px]' src={logouticon} alt="" /></button>
            </div>
        </>
    )
}

export default HeaderBar
