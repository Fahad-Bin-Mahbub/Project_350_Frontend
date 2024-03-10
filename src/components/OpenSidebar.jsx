import React from 'react'

const OpenSidebar = () => {
    return (
        <div>
            {/* rounded-tl-[36px] rounded-bl-[36px] */}
            <ul className="menu bg-blue-950 w-60 min-h-screen rounded-r-[36px] text-white">
                {/* sust logo */}
                <div className="flex justify-center mx-auto">
                    <a>
                        <div className="avatar">
                            <div className="w-20 h-20 rounded-full mt-8">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                    </a>
                </div>
                {/* menu items */}
                <div className='flex flex-col gap-60 mt-12'>
                    {/* upper menu list */}
                    <ul>
                        <li className="bg-white rounded-lg mx-3 text-blue-950">
                            <div className='flex gap-8 text-base font-bold'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Dashboard
                            </div>
                        </li>
                        <li className="mt-4 rounded-lg mx-3">
                            <div className='flex gap-8 text-base'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Account
                            </div>
                        </li>
                    </ul>

                    {/* lower menu list */}
                    <ul>
                        <li className="mt-4 rounded-lg mx-3">
                            <div className='flex gap-8 text-base'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Settings
                            </div>
                        </li>
                        <li className="mt-4 rounded-lg mx-3">
                            <div className='flex gap-8 text-base'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Logout
                            </div>
                        </li>
                    </ul>

                </div>

            </ul>

        </div>
    )
}

export default OpenSidebar