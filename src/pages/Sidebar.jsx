import React, { useState, useEffect } from 'react'
import OpenSidebar from '../components/OpenSidebar'
import ClosedSidebar from '../components/ClosedSidebar'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const closeSidebarOnOutsideClick = (event) => {
            if (isOpen && !event.target.closest('.menu')) {
                setIsOpen(false);
            }
        };
        document.body.addEventListener('click', closeSidebarOnOutsideClick);
        return () => {
            document.body.removeEventListener('click', closeSidebarOnOutsideClick);
        };
    }, [isOpen]);
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