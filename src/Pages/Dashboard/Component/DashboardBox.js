import { useState } from "react";
import { Button } from "@mui/material";
import { HiOutlineDotsVertical } from "react-icons/hi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HistoryIcon from '@mui/icons-material/History';

function DashboardBox(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="dashboardBox" style={{
                backgroundImage: `linear-gradient(to right,${props.backgroundColor?.[0]},${props.backgroundColor?.[1]})`
            }}>
                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className="text-white mb-0">Total Users</h4>
                        <span className="text-white ">277</span>
                    </div>
                    <div className="ms-auto">
                        {
                            props.icon ?
                                <span className="icon" style={{
                                    backgroundImage: `linear-gradient(180deg,${props.color?.[0]},${props.color?.[1]})`
                                }}>
                                    {props.icon ? props.icon : ""}
                                </span>
                                :
                                ""
                        }
                    </div>
                </div>

                {props.Grow === true ?
                    <span className="chart"><TrendingUpIcon /></span>
                    :
                    <span className="chart">< TrendingDownIcon /></span>
                }

                <div className="d-flex align-items-center mt-4">
                    <h6 className="text-white mb-0 mt-0">Last Month</h6>
                    <Button className="ms-auto toggleIcon" onClick={handleClick}><HiOutlineDotsVertical /></Button>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
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
                        <MenuItem onClick={handleClose}>
                            < HistoryIcon /> Last Day
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            < HistoryIcon /> Last Week
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            < HistoryIcon /> Last Month
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            < HistoryIcon /> Last Year
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    )
}
export default DashboardBox;