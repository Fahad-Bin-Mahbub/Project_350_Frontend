import React from 'react';
import NavBar from './../../components/NavBar';
import Sidebar from '../../components/Sidebar';

const AdminDashboard = () => {
    return (
        <>
            <NavBar />
            <div className="flex">
                <Sidebar />
                {/* className="flex-grow flex flex-col justify-center items-center" */}
                <div className='m-8'>
                    <section className="task-section w-[1130px]">
                        <div className="flex justify-between">
                            <div>
                                <h3 className='text-2xl font-semibold'>Tasks</h3>
                                <h5 className='text-base font-normal'>Here is a list of all task cards</h5>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                                        </svg>
                                        <input type="text" className="grow" placeholder="Search" />
                                    </label>
                                </div>
                                <div>
                                    <button className="btn bg-[#0A2463] text-white w-[160px] rounded-2xl">Add task</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section>Department</section>
                    <section>Teacher</section> */}
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
