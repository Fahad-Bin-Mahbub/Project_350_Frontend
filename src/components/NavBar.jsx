import React from 'react'


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 rounded-full">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold">Dashboard</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex justify-center">
                        <li className="mt-2"><a>Link</a></li>
                        <li>
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                        </li>
                        <li>
                            <details>
                                <summary>
                                    <h3 className="mt-2"> Danielle Campbell</h3>
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Dark</a></li>
                                    <li><a>Feedback</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar