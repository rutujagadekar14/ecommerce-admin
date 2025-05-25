import React, { useState, createContext, useEffect } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from '../../Pages/Products';
import SignUp from "../../Pages/SignUp";
import Login from "../../Pages/Login";
import ProductUpload from '../ProductUpload';
import CategoryAdd from "../../Pages/Products/Component/AddCategory";
import Dashboard from "../../Pages/Dashboard";

const MyContext = createContext();

function Layout() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true);
    const [showHeaderSidebar, setShowHeaderSidebar] = useState(true);

    const values = {
        isOpenSidebar,
        setIsOpenSidebar,
        showHeaderSidebar,
        setShowHeaderSidebar
    };
    
    useEffect(() => {
        const handleMouseWheel = (event) => {
            // Your event handling logic
            console.log('Mouse wheel event detected:', event);
        };

        window.addEventListener('mousewheel', handleMouseWheel, { passive: true });

        return () => {
            window.removeEventListener('mousewheel', handleMouseWheel);
        };
    }, []);

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                {showHeaderSidebar && <Header />}
                <div className="row main">
                    {isOpenSidebar && (
                        < div className={`sidebarWrapper col-2 pe-0 ${isOpenSidebar ? '' : 'collapsed'}`}>
                            {showHeaderSidebar && <Sidebar />}
                        </div>
                    )}
                    <div className={`RightContent ${isOpenSidebar ? "col-10" : 'col-12'}`}>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/ecommerce' element={<Dashboard />} />
                            <Route path='/register' element={<SignUp />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/products' element={<Products />} />
                            <Route path='/product/upload' element={<ProductUpload />} />
                            <Route path='/category/add' element={<CategoryAdd />} />
                        </Routes>
                    </div>
                </div>
            </MyContext.Provider>
        </BrowserRouter >
    );
}

export default Layout;
export { MyContext };

