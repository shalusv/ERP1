import React, { useState, useRef, useEffect } from "react";
import "./ProfileMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-menu" ref={menuRef}>
      <button className="profile-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </button>
      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-info">
            <p>John Doe</p>
            <p>johndoe@example.com</p>
          </div>
          <button className="profile-logout">Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
