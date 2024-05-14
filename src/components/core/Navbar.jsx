import { useState } from "react"
import Sidebar from "./Sidebar";
import { faHome, faDharmachakra, faCog, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);
    const [sidebarClosed, setSidebarClosed] = useState(true);

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome,
        },
        {
            name: "Wheel",
            path: "/wheel",
            icon: faDharmachakra,
        },
        {
            name: "Watch List",
            path: "/watch-list",
            icon: faStar,
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog,
        },
    ]

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">Movie Blog</Link>
                <div className="nav-links">
                    {links.map((link) => (
                        <Link key={link.name} to={link.path} className={location.pathname === link.path ? 'active' : ''}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => sidebarClosed && openSidebar()} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar links={links} close={closeSidebar} />}
        </>
    )

    function openSidebar() {
        setShowSidebar(true);
        setSidebarClosed(false);
    }
    
    function closeSidebar() {
        setShowSidebar(false);
        setTimeout(() => {
            setSidebarClosed(true);
        }, 400)
    }
}