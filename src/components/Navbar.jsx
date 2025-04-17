import { useState } from 'react';
import logo from '../assets/logo.png';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBtn() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="py-5 ">
      <div className="container mx-auto px-7">
        <div className="hidden md:flex justify-between items-center">
          <div className="z-50">
            <img src={logo} alt="" />
          </div>

          <ul className="hidden md:flex ml-15 justify-center space-x-7 text-white text-md ">
            <li>
              <a href="#" className="hover:text-primary">
                Browse
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact us
              </a>
            </li>
          </ul>

          <div className="hidden md:flex space-x-5">
            <Icon className="text-white" icon="fa6-brands:facebook" />
            <Icon className="text-white" icon="fa6-brands:instagram" />
            <Icon className="text-white" icon="fa6-brands:twitter" />
          </div>
        </div>

        {/* fixed logo btn */}
        <div className="fixed top-0 left-0 w-full px-7 py-5 z-50 flex md:hidden justify-between">
          <img src={logo} className="z-50" alt="" />
          <button onClick={toggleBtn} className="md:hidden text-white z-50">
            <Icon
              icon={isOpen ? 'fa-solid:times' : 'fa-solid:bars'}
              width="20px"
              height="20px"
            />
          </button>
        </div>

        {/* Dropdown */}
        <div
          className={`fixed inset-0 z-20 flex flex-col justify-center items-center space-y-5 py-1 text-white  bg-primary opacity-90   lg:hidden  transition-all duration-300 ease-in-out transform ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <ul className="flex flex-col justify-center space-y-3 items-center text-white text-md ">
            <li>
              <a href="#" className="hover:text-primary">
                Browse
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact us
              </a>
            </li>
          </ul>

          <div className="flex justify-center text-center space-x-5">
            <Icon className="text-white" icon="fa6-brands:facebook" />
            <Icon className="text-white" icon="fa6-brands:instagram" />
            <Icon className="text-white" icon="fa6-brands:twitter" />
          </div>
        </div>
      </div>
    </nav>
  );
}
