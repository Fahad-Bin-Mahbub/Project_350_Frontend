import React, { useState } from 'react'
import OpenSidebar from '../components/OpenSidebar'
import ClosedSidebar from '../components/ClosedSidebar'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            {isOpen ? (
                <OpenSidebar toggleSidebar={toggleSidebar} />
            ) : (
                <ClosedSidebar toggleSidebar={toggleSidebar} />
            )}
        </div>
    )
}

export default Sidebar