import React from "react";
import { useContext, useEffect } from 'react';
import { MyContext } from '../../Component/Layout';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import DashboardBox from "./Component/DashboardBox";
import { FaCircleUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { useState } from "react";
import { Button } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HistoryIcon from '@mui/icons-material/History';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Chart } from "react-google-charts";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});


function Dashboard() {
    const context = useContext(MyContext);
    useEffect(() => {
        context.setShowHeaderSidebar(true);
        context.setIsOpenSidebar(true);
    })

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [CatBy, setCatBy] = useState('');
    const [BrandBy, setBrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const data = [
        ['Year', 'Sales', 'Expenses'],
        ['2021', 660, 1120],
        ['2022', 1030, 540],
        ['2023', 1000, 400],
        ['2024', 1170, 460],
    ];

    const options = {
        'backgroundColor': 'transparent',
        'chartArea': { 'width': '100%', 'height': '100%' }
    };
    return (
        <>

            <div className='right-content '>
                <div className='container-fluid h-100'>
                    <div className='row h-100'>
                        <div className='col-xl-12 '>
                            <div className='card shadow'>
                                <h5 className='heading'>Ecommerce</h5>
                                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs_">
                                    <StyledBreadcrumb
                                        component="a"
                                        href="#"
                                        label="Home"
                                        icon={<HomeIcon fontSize="small" />}
                                    />
                                    <StyledBreadcrumb component="a" href="#" label="Dashboard" />
                                    <StyledBreadcrumb
                                        style={{ 'color': '#0858f7' }}
                                        label="Ecommerce"
                                    />
                                </Breadcrumbs>
                            </div>
                        </div>
                    </div >

                    <div className='row dashboardBoxWrapperRow mt-4'>
                        <div className='col-xl-8'>
                            <div className='dashboardBoxWrapper d-flex'>
                                <DashboardBox backgroundColor={['#1da256', '#48d483']} icon={<FaCircleUser />} color={['#27bf68', '#1a9f53']} Grow={true} />
                                <DashboardBox backgroundColor={['#c012e2', '#eb64fe']} icon={<MdShoppingCart />} color={['#de2fff', '#be0ee1']} Grow={false} />
                                <DashboardBox backgroundColor={['#2c78e5', '#60aff5']} icon={<FaShoppingBag />} color={['#4094f1', '#2b77e5']} Grow={false} />
                                <DashboardBox backgroundColor={['#e1950e', '#f3cd29']} icon={<GiStarsStack />} color={['#edb213', '#e1940e']} Grow={true} />
                            </div>
                        </div>

                        <div className='col-xl-4'>
                            <div className='Box'>
                                <div className="d-flex align-items-center ">
                                    <h4 className="text-white">Total Sales</h4>
                                    <Button className="ms-auto toggleIcon" onClick={handleClick}><BsThreeDots /></Button>
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
                                <div className="sale-card-amount d-flex align-items-center mb-1">
                                    <h3 className="text-white fw-bold mb-0">$3,787,681.00</h3>
                                    <span className="ms-1">40.63% <TrendingUpIcon /></span>
                                </div>
                                <span className="sales-card-compaire">$3,578.90 in last month</span>
                                <Chart
                                    className="mt-4"
                                    chartType="PieChart"
                                    data={data}
                                    options={options}
                                    width={"100%"}
                                    height={"200px"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mc-card shadow p-3 border-0">
                        <h4 className="hd mb-4">Best Selling Products</h4>

                        <div className='row cardFilters'>
                            <div className="col-md-3">
                                <h4>SHOW BY</h4>
                                <Select
                                    value={showBy}
                                    onChange={(e) => setShowBy(e.target.value)}
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>12 Row</em>
                                    </MenuItem>
                                    <MenuItem>12 Row</MenuItem>
                                    <MenuItem>24 Row</MenuItem>
                                    <MenuItem>36 Row</MenuItem>
                                </Select>
                            </div>
                            <div className="col-md-3">
                                <h4>CATEGORY BY</h4>
                                <Select
                                    value={CatBy}
                                    onChange={(e) => setCatBy(e.target.value)}
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>12 Row</em>
                                    </MenuItem>
                                    <MenuItem>24 Row</MenuItem>
                                    <MenuItem>36 Row</MenuItem>
                                </Select>
                            </div>
                            <div className="col-md-3">
                                <h4>BRAND BY</h4>
                                <Select
                                    value={BrandBy}
                                    onChange={(e) => setBrandBy(e.target.value)}
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>12 Row</em>
                                    </MenuItem>
                                    <MenuItem>12 Row</MenuItem>
                                    <MenuItem>24 Row</MenuItem>
                                    <MenuItem>36 Row</MenuItem>
                                </Select>
                            </div>
                            <div className="col-md-3">
                                <h4>SEARCH BY</h4>
                                <Select
                                    value={searchBy}
                                    onChange={(e) => setSearchBy(e.target.value)}
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>12 Row</em>
                                    </MenuItem>
                                    <MenuItem>12 Row</MenuItem>
                                    <MenuItem>24 Row</MenuItem>
                                    <MenuItem>36 Row</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Dashboard;


