import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdDashboard, MdLock } from "react-icons/md";
import { FaAngleRight, FaAngleDown, FaPix } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";

const menuItems = [

    {
        title: "Dashboard",
        icon: <MdDashboard />,
        submenu: [
            { title: "Ecommerce", path: "/ecommerce" },
            { title: "Analytics", path: "/analytics" },
        ],
    },
    {
        title: "Authentication",
        icon: <MdLock />,
        submenu: [
            { title: "Login", path: "/login" },
            { title: "Registration", path: "/register" },
        ],
    },
    {
        title: "Products",
        icon: <FaPix />,
        submenu: [
            { title: "Product List", path: "/product/list" },
            { title: "Product View", path: "/product/view" },
            { title: "Product Upload", path: "/product/upload" },
        ],
    },
    {
        title: "Category",
        icon: <TbCategoryPlus />,
        submenu: [
            { title: "Category List", path: "/category/list" },
            { title: "Add Category", path: "/category/add" },
        ],
    },
    {
        title: "Orders",
        icon: <TbCategoryPlus />,
        // No submenu for Orders
    },
    {
        title: "Messages",
        icon: <TbCategoryPlus />,
        // No submenu for Messages
    },
    {
        title: "Notifications",
        icon: <TbCategoryPlus />,
        // No submenu for Notifications
    },
    {
        title: "Settings",
        icon: <TbCategoryPlus />,
        // No submenu for Settings
    },
];

function Sidebar() {
    const [openSubmenu, setOpenSubmenu] = useState({});

    const toggleSubmenu = (index) => {
        setOpenSubmenu((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const closeSubmenu = () => {
        setOpenSubmenu(!openSubmenu);
    };

    const handleLogout = () => {
        // Implement logout functionality here
        console.log("User  logged out");
    };

    return (
        <div className="scroll">
            <div className='sidebar'>
                <div className="sidebar-menu w-100">
                    <h5 className="sidebar-menu-title">Main Pages</h5>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Button
                                    className='sidebar-menu-btn'
                                    onClick={() => toggleSubmenu(index)}
                                    aria-expanded={openSubmenu[index]}
                                    aria-label={`Toggle ${item.title} submenu`}
                                >
                                    <span className="icon">{item.icon}</span>
                                    <span className="title">{item.title}</span>
                                    <span className="arrow">
                                        {openSubmenu[index] ? <FaAngleDown /> : <FaAngleRight />}
                                    </span>
                                </Button>
                                {item.submenu && Array.isArray(item.submenu) && (
                                    <ul className={`submenu ${openSubmenu[index] ? 'open' : ''}`}>
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li className="submenuItem" key={subIndex}>
                                                <Link to={subItem.path} onClick={closeSubmenu}>{subItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar-logout text-center mt-5">
                    <Button className="logoutBtn shadow" onClick={handleLogout}>
                        <MdLock /> Logout
                    </Button>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;