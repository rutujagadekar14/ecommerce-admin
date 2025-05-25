import { useState, useContext } from "react";
import Logo from "../../Assest/logo.webp";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MyContext } from '../../Component/Layout';
import SearchBox from "../SearchBox";
import UserImg from "../UserImg";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { BsShieldFillExclamation } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import Divider from '@mui/material/Divider';

function Header() {
    const context = useContext(MyContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotification, setisOpenNotification] = useState(false);

    const openUserAcc = Boolean(anchorEl);
    const openNotification = Boolean(isOpenNotification);

    const handleOpenUserAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUserAccDrop = () => {
        setAnchorEl(null);
    };
    const handelOpenNotificationDrop = () => {
        setisOpenNotification(true);
    };
    const handleCloseNotificationDrop = () => {
        setisOpenNotification(false)
    };


    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid me-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-2">
                            {/* Logo wrapper */}
                            <Link to="/" className="logo-group d-flex align-items-center">
                                <img src={Logo} alt="logo" />
                                <span className="ms-1">hotash</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center ">
                            <Button className="rounded-circle me-3" onClick={() => context.setIsOpenSidebar(!context.isOpenSidebar)}>
                            {context.isOpenSidebar ? <MdMenuOpen /> : <MdMenu />}
                            </Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end">
                            <Button className="rounded-circle me-3">< MdLightMode /></Button>
                            <Button className="rounded-circle me-3">< IoMdCart /></Button>
                            <Button className="rounded-circle me-3">< MdEmail /></Button>
                            <Button className="rounded-circle me-3" onClick={handelOpenNotificationDrop}><IoIosNotifications /></Button>
                            <Menu
                                anchorEl={anchorEl}
                                className="dropdown_list"
                                id="notification"
                                open={openNotification}
                                onClose={handleCloseNotificationDrop}
                                onClick={handleCloseNotificationDrop}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 10,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className="head ps-2 mb-2">
                                    <h4 className="mb-0">Notifications (8)</h4>
                                </div>
                                <Divider className="mb-1" />
                                <div className="scroll">
                                    <MenuItem className="notify mb-1" onClick={handleCloseNotificationDrop}>
                                        <div className=" d-flex align-items-center">
                                            <UserImg />
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b className="me-1">Mahmudul</b>
                                                        added to his favorite list
                                                        <b className="ms-1">Leather Belt Steve Madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mt-1 mb-0">
                                                    few seconds ago!
                                                </p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem className="notify mb-1" onClick={handleCloseNotificationDrop}>
                                        <div className=" d-flex align-items-center">
                                            <UserImg />
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b className="me-1">Mahmudul</b>
                                                        added to his favorite list
                                                        <b className="ms-1">Leather Belt Steve Madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mt-1 mb-0">
                                                    few seconds ago!
                                                </p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem className="notify mb-1" onClick={handleCloseNotificationDrop}>
                                        <div className=" d-flex align-items-center">
                                            <UserImg />
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b className="me-1">Mahmudul</b>
                                                        added to his favorite list
                                                        <b className="ms-1">Leather Belt Steve Madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mt-1 mb-0">
                                                    few seconds ago!
                                                </p>
                                            </div>
                                        </div>

                                    </MenuItem>
                                    <MenuItem className="notify mb-1" onClick={handleCloseNotificationDrop}>
                                        <div className=" d-flex align-items-center">
                                            <UserImg />
                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b className="me-1">Mahmudul</b>
                                                        added to his favorite list
                                                        <b className="ms-1">Leather Belt Steve Madden</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mt-1 mb-0">
                                                    few seconds ago!
                                                </p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>
                                <Button className="btn-blue">VIEW ALL NOTIFICATION</Button>
                            </Menu>

                            <div className="userAccWrapper">
                                <Button className="userAcc d-flex align-items-center" onClick={handleOpenUserAccDrop}>
                                    <UserImg />
                                    <div className="userInfo">
                                        <h3>Miron Mahmudul</h3>
                                        <p>@mironcoder</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openUserAcc}
                                    onClose={handleCloseUserAccDrop}
                                    onClick={handleCloseUserAccDrop}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleCloseUserAccDrop}>
                                        <ListItemIcon>
                                            < FaUserLarge />
                                        </ListItemIcon>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserAccDrop}>
                                        <ListItemIcon>
                                            < BsShieldFillExclamation />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserAccDrop} className="text-danger">
                                        <ListItemIcon>
                                            <Logout fontSize="small" className="text-danger" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div >

            </header >

        </>
    )
}
export default Header;

