import { useContext, useEffect } from 'react';
import { MyContext } from '../../Component/Layout';
import patternImg from '../../Assest/pattern.webp';
import Logo from '../../Assest/logo.webp';
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { HiMiniShieldCheck } from "react-icons/hi2";

function Login() {

    const context = useContext(MyContext);
    useEffect(() => {
        context.setShowHeaderSidebar(false);
        context.setIsOpenSidebar(false);
    })

    return (
        <>
            <div className='login'>
                <div className='login-banner'>
                    <img src={patternImg} alt='pattern' className='banner-pattern' />
                    <div className='login-info'>
                        <Link to='/'><img src={Logo} alt="logo" className='logo' /></Link>
                        <h4>Login to Hotash</h4>
                        <form>
                            <div className='form-group'>
                                < MdEmail />
                                <input type='email' placeholder='enter your email' />
                            </div>
                            <div className='form-group'>
                                <  MdLock />
                                <input type='password' placeholder='enter your password' />
                            </div>
                            <div className='form-group'>
                                <HiMiniShieldCheck /> <select>
                                    <option>Select Option</option>
                                    <option>Select User Role</option>
                                    <option>Admin</option>
                                    <option>Member</option>
                                    <option>Client</option>
                                    <option>Manager</option>
                                    <option>Vendor</option>
                                </select>
                            </div>
                            <Button className='btn-blue'>SIGN In</Button>
                            <Link to='/forgot-password' className='forgot-password'>FORGOT PASSWORD</Link>
                            <div className='divide'>
                                <span>OR</span>
                            </div>
                            <Button className='btn-skyBlue'><FaTwitter />Continue with Twitter</Button>
                            <Button className='btn-purple'><FaFacebookF />Continue with Facebook</Button>
                        </form>
                        <div className='d-flex align-items-center justify-content-center navigate'>
                            Don't have an account?
                            <Link to='/register'>Register</Link>
                        </div>
                    </div >
                </div>
            </div >
        </>
    )
}

export default Login;