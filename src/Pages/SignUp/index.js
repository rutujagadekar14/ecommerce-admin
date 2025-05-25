import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Component/Layout';
import patternImg from '../../Assest/pattern.webp';
import Logo from '../../Assest/logo.webp';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


function SignUp() {
    const context = useContext(MyContext);
    useEffect(() => {
        context.setShowHeaderSidebar(false);
        context.setIsOpenSidebar(false);
    })

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(prevChecked => !prevChecked);
    };
    return (
        <>
            <div className='register'>
                <div className='register-banner'>
                    <img src={patternImg} alt='pattern' className='banner-pattern' />
                    <form>
                        <Link to='/'><img src={Logo} alt="logo" className='logo'/></Link>
                        <h4>Register a new account</h4>
                        <div className='form-group '>
                            < FaUserCircle />
                            <input type='text' placeholder='enter your name' />
                        </div>
                        <div className='form-group'>
                            < MdEmail />
                            <input type='email' placeholder='enter your email' />
                        </div>
                        <div className='form-group'>
                            <  MdLock />
                            <input type='password' placeholder='enter your password' />
                        </div>
                        <div className='form-group'>
                            <  HiMiniShieldCheck />
                            <input type='password' placeholder='confirm your password' />
                        </div>
                        <div>
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                I agree to the all Terms & Condiotions
                            </label>
                        </div>
                        <Button className='btn-blue'>SIGN UP</Button>
                        <div className='divide'>
                            <span>OR</span>
                        </div>
                        <Button className='btn-skyBlue'><FaTwitter/>Continue with Twitter</Button>
                        <Button className='btn-purple'><FaFacebookF/>Continue with Facebook</Button>
                        <div className='d-flex align-items-center justify-content-center navigate'>
                            Already have an account?
                            <Link to='/login'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp;