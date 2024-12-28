import logo from '../assets/ajayLogo.png';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="mb-14 flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="Logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

          <a href="https://www.linkedin.com/in/ajay-p-ak17" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /></a>

          <a href="https://github.com/AjayKumar-AK1761" target="_blank" rel="noopener noreferrer">
          <FaGithub /></a>

          <a href="https://x.com/AjayKumarAK1761?t=PlAtMOtUyuMlWrfKHmhSiQ&s=09" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter /></a>

          <a href="https://www.instagram.com/ajay_aj1761/?igsh=MXZ6OHBvYW94cjY0NA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar;
