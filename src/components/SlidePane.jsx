import React from 'react'

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
                        <div className='flex justify-between px-8 py-6'>
                            <button className="btn btn-sm bg-[#E6F8F1] border-[#40856A] text-[#40856A]">Completed</button>
                            <button>x</button>
                        </div>
                        <div className="border border-b-2 border-slate-300 w-[600px] mx-8"></div>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SlidePane