import React from 'react'

function AddTaskModal() {
    return (
        <div>
            <div className='bg-base-100 w-[632px] h-[700px] rounded-3xl'>
                <div className='flex justify-center p-11'>
                    <h1 className='text-3xl font-semibold text-[#0A2463]'>Add task</h1>
                </div>
                <div className='flex justify-center'>
                    <form>
                        {/* Course Code */}
                        <div className='flex flex-col gap-y-1 pb-4'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Course Code
                            </label>
                            <input type="text" placeholder="Course Code" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>
                        {/* Assignee */}
                        <div className='flex flex-col gap-y-1 pb-4'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Assignee
                            </label>
                            <input type="text" placeholder="Assignee" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>
                        {/* Email */}
                        <div className='flex flex-col gap-y-1 pb-4'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Email
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>

                        {/* Department */}
                        <div className='flex flex-col gap-y-1 pb-4'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Department
                            </label>
                            <input type="text" placeholder="Department" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>
                        {/* Role */}
                        <div className='flex flex-col gap-y-1 pb-4'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Role
                            </label>
                            <input type="text" placeholder="Role" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>
                        <div className="modal-action">
                            <form method="dialog" className='flex gap-2'>
                                <button className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2">Cancel</button>
                                <input type="submit" value="Add task" className="btn w-40 h-8 rounded-2xl bg-[#0A2463] text-white" />
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal