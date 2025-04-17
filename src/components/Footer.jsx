import logo from '../assets/logo.png';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-footer mt-10  ">
      <div className="max-w-7xl mx-auto py-6 px-6 md:px-26">
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 items-start md:items-center">
          <div className="z-50">
            <img src={logo} alt="" />
          </div>

          <ul className=" flex flex-col md:flex-row lg:ml-15 justify-center space-y-4 space-x-7 text-light text-md ">
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

          <div className="flex space-x-5">
            <Icon className="text-white" icon="fa6-brands:facebook" />
            <Icon className="text-white" icon="fa6-brands:instagram" />
            <Icon className="text-white" icon="fa6-brands:twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}
