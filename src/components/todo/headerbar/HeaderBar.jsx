import React from 'react'
import titlelogo from "../../../assets/images/Logo-title.png";
import logouticon from "../../../assets/images/XMLID_2_.svg";
import del from '../../../assets/images/Vector.svg'

function HeaderBar() {

    const handleClick = ()=> {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <div className='flex justify-center items-center gap-2'>
                <img src={titlelogo} alt="" /><p className='font-semibold text-base'>To Do</p>
                <img src={del} alt="" />
            </div>
            <div>
                <button onClick={handleClick}><img src={logouticon} alt="" /></button>
            </div>
        </>
    )
}

export default HeaderBar
