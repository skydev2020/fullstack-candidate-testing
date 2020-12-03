import Link from 'next/link';
import {useState} from 'react'

const Navbar = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <nav id="header" className="fixed flex items-center w-full z-50 text-md top-0 bg-white border-b shadow px-4">
            <div className="w-full justify-between mx-auto flex flex-wrap items-center mt-0 py-3">
                <div className="block lg:hidden pr-0 pl-1">
                    <button id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div className="pl-4 flex items-center" id="logo">
                    <a className="uppercase text-lg text-blue-500 text-base no-underline hover:no-underline font-extrabold"
                       href="/">
                        Health Explore
                    </a>
                </div>

                <ul className="list-reset lg:flex hidden lg:block text-gray-900 items-center lg:space-x-4 text-xs uppercase lg:py-0 order-last lg:order-none"
                    id="nav-content">
                    <li className="py-2 lg:py-0">
                        <a className="inline-block py-2 px-4 font-bold no-underline font-medium text-gray-700 hover:text-gray-900"
                           href="#">
                            Profile
                        </a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a className="inline-block py-2 px-4 font-bold no-underline font-medium text-gray-700 hover:text-gray-900"
                           href="#">
                            Jobs</a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a className="inline-block py-2 px-4 font-bold no-underline font-medium text-gray-700 hover:text-gray-900"
                           href="#">
                            Professional Network</a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a className="inline-block py-2 px-4 font-bold no-underline font-medium text-gray-700 hover:text-gray-900"
                           href="#">
                            Lounge</a>
                    </li>
                    <li className="py-2 lg:py-0">
                        <a className="inline-block py-2 px-4 font-bold no-underline font-medium text-gray-700 hover:text-gray-900"
                           href="#">
                            Salary</a>
                    </li>
                </ul>

                <div className="flex space-x-4 items-center z-20">

                    <button
                        className="hidden lg:flex hidden lg:block text-blue-500 shadow border border-blue-400 hover:border-blue-500 hover:text-blue-600 font-bold rounded-md mr-4 px-2 py-1">
                        Create Job
                    </button>

                    <span className="inline-block relative mr-4">
              <img alt="Mohamed Ziada"
                   className="rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300"
                   src="https://ui-avatars.com/api/?name=Mohmaed+Ziada&rounded=true&format=svg&size=40&background=2096F3&color=fff"/>
            <span
                className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border border-white text-xs flex items-center justify-center text-white">2</span>
            </span>
                    <h4 className="hidden text-sm lg:flex">LOGOUT</h4>


                </div>

            </div>
        </nav>
    )
};


export default Navbar;