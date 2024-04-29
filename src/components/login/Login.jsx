import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Main from '../../assets/images/DRIP_20.svg'
import Google from '../../assets/images/Google.svg'
import X from '../../assets/images/X Icon.svg'

function Login() {
  return (
    <div className='grid grid-cols-2 grid-rows-1 h-dvh p-5'>
        <div >
            <div className='flex flex-col justify-center items-center gap-10 h-full relative'>
                <div className='absolute left-0 top-0'>
                    <img   src={Logo} alt="" />
                </div>
                <form className='flex flex-col gap-5 w-[360px] h-[517px]'>
                    <div className='flex flex-col w-[360px]'>
                        <p className=' text-5xl font-bold text-[#344054]'>NFT Access</p>
                        <p className='text-[#667085]'>Please fill your detail to access your account.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm text-[#344054] font-semibold leading-5' htmlFor="email">Email</label>
                        <input className='border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2' type="text" placeholder='debra.holt@example.com'/>
                        {/* <img className='w-[24px] translate-x-8 ' src={X} alt="" /> */}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-sm text-[#344054] font-semibold leading-5' htmlFor="password">Password</label>
                        <input className='border-[1px] border-[#D0D5DD] rounded-lg h-[44px] p-2 focus:border-[#5429FF] outline-none border-2' type="password" placeholder='••••••••' />
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-1'>
                            <input type="checkbox" id="myCheckbox"/>
                            <label className='text-sm text-[#344054] font-semibold' for="myCheckbox">Remember me</label>
                        </div>
                        <div >
                            <p className='text-sm text-[#5429FF] font-semibold hover:cursor-pointer'>Forgot Password?</p>
                        </div>
                    </div>

                    <div>
                        <button className='text-base text-[#FFFFFF] font-small leading-5 rounded-lg h-[44px] bg-[#5429FF] w-[360px]'>Sign in</button>
                    </div>

                    <div>
                        <button className='flex justify-center items-center gap-2 text-base text-[#344054] border-[1px] border-[#D0D5DD] font-medium leading-5 rounded-lg h-[44px] w-[360px]'><img src={Google} alt="" />Sign in with Google</button>
                    </div>

                    <div className='flex justify-center items-center gap-1 text-sm leading-6 font-normal'>
                        <p>Don’t have an account?</p>
                        <p className='text-sm text-[#5429FF] font-medium hover:cursor-pointer'>Sign up</p>
                    </div>
                </form>
            </div>
        </div>
        <div className='login-section-2'>
            <img className='bg-[#CBCCE8] rounded-[40px] h-full  w-full' src={Main} alt="" />
        </div> 
    </div>
  )
}

export default Login


