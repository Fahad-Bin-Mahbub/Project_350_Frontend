import React from 'react'
import { Icons } from "../assets/icons";

const SlidePane = () => {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[680px] min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className='flex justify-between px-8 py-3'>
                            <button className="btn btn-sm bg-[#E6F8F1] border-[#40856A] text-[#40856A]">Completed</button>
                            <button>
                                x
                            </button>
                        </div>
                        <div className="border border-slate-300 w-full"></div>
                        <form action="" className='flex flex-col gap-12 pt-16 pl-12'>
                            <div>
                                <input type="text" placeholder="Course Title" className="input input-ghost w-full text-4xl font-medium" />
                            </div>
                            <div className='space-x-[120px]'>
                                <label className='w-20 font-bold'>Assignee</label>
                                <img src={Icons.icon_account} alt="" />
                                <input type="text" placeholder="No Assignee" className="input input-ghost w-full max-w-xs" />
                            </div>
                            <div className='space-x-[120px]'>
                                <label className='w-20 font-bold'>Due Date</label>
                                <input type="text" placeholder="No Due Date" className="input input-ghost w-full max-w-xs mt-1" />
                            </div>
                            <div className='space-x-[150px]'>
                                <label className='w-20 font-bold'>Exam</label>
                                <input type="text" placeholder="Semester" className="input input-ghost w-full max-w-xs" />
                            </div>
                            <div className='space-x-[162px]'>
                                <label className='w-20 font-bold'>Part</label>
                                <input type="text" placeholder="Part A/B" className="input input-ghost w-full max-w-xs" />
                            </div>
                        </form>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default SlidePane