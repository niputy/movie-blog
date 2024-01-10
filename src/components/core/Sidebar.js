import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import React, { useRef, useEffect } from "react";

export default function Sidebar({ links, close }) {
    const ref = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              close();
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [close, ref]);

    return (
        <div className="sidebar" ref={ref}>
            {links.map((link) => (
                <Link key={link.name} onClick={close}
                className={`sidebar-link ${location.pathname === link.path && 'active'}`}
                to={link.path}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    )
}