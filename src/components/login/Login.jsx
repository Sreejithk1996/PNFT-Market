import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Main from '../../assets/images/DRIP_20.svg'

function Login() {
  return (
    <div className='flex  justify-between h-screen mx-[30px] py-[30px]'>
        <div className='login-section-1 w-50%'>
            <img src={Logo} alt="logo" />
            <div className='h-full w-[100%]'>
                <p className='text-5xl font-bold text-[#344054]'>NFT Access</p>
            </div>
        </div>
        <div className='login-section-2 w-[50%] h-[100%]'>
            <img className='bg-[#CBCCE8] rounded-[40px] h-[100%] w-[100%]' src={Main} alt="" />
        </div>
    </div>
  )
}

export default Login
