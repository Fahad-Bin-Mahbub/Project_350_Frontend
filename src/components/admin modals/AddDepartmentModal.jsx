import React from 'react'

function AddDepartmentModal() {
    return (
        <div>
            <div className='bg-base-100 w-[632px] h-[632px] rounded-3xl'>
                <div className='flex justify-center p-11'>
                    <h1 className='text-3xl font-semibold text-[#0A2463]'>Add department</h1>
                </div>
                <div className='flex justify-center'>
                    <form>
                        {/* Department */}
                        <div className='flex flex-col gap-y-1.5 pb-8'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Department
                            </label>
                            <input type="text" placeholder="Department" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>
                        {/* Department Head */}
                        <div className='flex flex-col gap-y-1.5 pb-8'>
                            <label className='text-sm text-[#0A2463] font-medium'>
                                Department Head
                            </label>
                            <input type="text" placeholder="Department Head" className="input input-bordered w-[365px] h-11 rounded-sm" />
                        </div>
                        <div className="modal-action">
                            <form method="dialog" className='flex gap-2'>
                                <button className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2">Cancel</button>
                                <input type="submit" value="Add department" className="btn w-40 h-8 rounded-2xl bg-[#0A2463] text-white" />
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDepartmentModal