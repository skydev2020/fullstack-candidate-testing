import Head from 'next/head'

const Design = () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>{process.env.appName}</title>
            <meta name="author" content="mohamed ziada 2020-11-29"/>
        </Head>

        <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lato');

        html {
            font-family: 'Lato', sans-serif;
        }
      `}</style>

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
                   src="https://ui-avatars.com/api/?name=Mohamed+Ziada&rounded=true&format=svg&size=40&background=2096F3&color=fff"/>
            <span
                className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border border-white text-xs flex items-center justify-center text-white">2</span>
            </span>
                    <h4 className="hidden text-sm lg:flex">LOGOUT</h4>


                </div>

            </div>
        </nav>

        {/* search */}
        <div className="flex flex-col h-full pt-16 lg:pt-16 m-5">

            <div className="relative pull-right px-4 bg-white rounded-sm">
                <input type="search" placeholder="Search for any job, title, keywords or company"
                       className="w-full text-sm text-gray-900 transition focus:outline-none rounded pl-4 m-4 appearance-none leading-normal"/>
                <div className="absolute search-icon top-5">
                    <svg className="fill-current pointer-events-none text-gray-800 w-4 h-4"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path
                            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </div>

        </div>
        {/* end Search*/}

        {/* Body */}
        <div className="w-full flex flex-wrap mx-auto pt-2 lg:pt-2 mt-2 mb-6 px-4">


            <div className="w-full lg:w-1/5 pr-2 hidden lg:block text-md text-gray-900 leading-normal">
                <div
                    className="sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mr-0 space-y-4 top-20">

                    <div className=" bg-white px-4 rounded-sm shadow ">
                        <p className="text-base font-bold py-2 lg:pb-2 text-gray-900 uppercase">job type</p>
                        <ul className="list-reset text-xs">
                            <li className="py-2 md:my-0 no-underline lg:hover:bg-transparent">
                                <span>Per-Diem</span>
                                <span className="text-gray-400">1,991</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Traveler</span>
                                <span className="text-gray-400">1,976</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Part-time</span>
                                <span className="text-gray-400">1,938</span>
                            </li>

                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Full-time</span>
                                <span className="text-gray-400">1,848</span>
                            </li>

                        </ul>
                    </div>

                    <div className=" bg-white px-4 rounded-sm shadow ">
                        <p className="font-bold py-2 lg:pb-2 text-gray-900 uppercase">Department</p>
                        <ul className="list-reset text-xs capitalize">
                            <li className="py-2 md:my-0 no-underline lg:hover:bg-transparent">
                                <span>anesthesiology & perioperative Medicine</span>
                                <span className="text-gray-400">2,149</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Orthopaedic Surgery</span>
                                <span className="text-gray-400">2,083</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Pediatrics</span>
                                <span className="text-gray-400">2,072</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Pathology & Laboratory Medicine</span>
                                <span className="text-gray-400">2,065</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Emergency Medicine</span>
                                <span className="text-gray-400">2,057</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Obstetrics and Gynecology</span>
                                <span className="text-gray-400">2,055</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Urology</span>
                                <span className="text-gray-400">2,054</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Neurology</span>
                                <span className="text-gray-400">2,041</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Dental Services</span>
                                <span className="text-gray-400">2,040</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>Radiology</span>
                                <span className="text-gray-400">2,029</span>
                            </li>
                        </ul>
                    </div>

                    <div className=" bg-white px-4 rounded-sm shadow ">
                        <p className="font-bold py-2 lg:pb-2 text-gray-900 uppercase">Work Schedule</p>
                        <ul className="list-reset text-xs capitalize">
                            <li className="py-2 md:my-0 no-underline lg:hover:bg-transparent">
                                <span>night shift</span>
                                <span className="text-gray-400">3,889</span>
                            </li>
                            <li className="py-2 md:my-0  lg:hover:bg-transparent">
                                <span>day shift</span>
                                <span className="text-gray-400">3,864</span>
                            </li>
                        </ul>
                    </div>

                    <div className=" bg-white px-4 rounded-sm shadow ">
                        <p className="font-bold py-2 lg:pb-2 text-gray-900 uppercase">Experience</p>
                        <ul className="list-reset text-xs capitalize">
                            <li className="py-2 md:my-0 no-underline lg:hover:bg-transparent">
                                <span>intermediate</span>
                                <span className="text-gray-500">1,997</span>
                            </li>
                            <li className="py-2 md:my-0 lg:hover:bg-transparent">
                                <span>senior</span>
                                <span className="text-gray-600">1,985</span>
                            </li>
                            <li className="py-2 md:my-0 lg:hover:bg-transparent">
                                <span>internship</span>
                                <span className="text-gray-500">1,968</span>
                            </li>
                            <li className="py-2 md:my-0 lg:hover:bg-transparent">
                                <span>iunior</span>
                                <span className="text-gray-500">1,803</span>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <div className="w-full lg:w-4/5 lg:pl-2 lg:mt-0 text-gray-900 leading-normal">

                <div className="py-2 px-4 bg-white rounded-sm shadow">

                    <div
                        className="flex lg:flex-row flex-col mb-2 lg:items-center py-2 items-start space-y-2 justify-between text-sm text-gray-600">
                        <div>
                            <span className="font-bold text-gray-900">7,753</span> job postings
                        </div>
                        <div className="flex lg:space-x-4 pt-2 lg:flex-row flex-col">
                            <p className="font-xs text-gray-400 flex-col">Sort by</p>

                            <div className="flex lg:pt-0 pt-2 space-x-4 item-start">
                                <p className="cursor-pointer ">Location</p>
                                <p className="cursor-pointer ">Role </p>
                                <p className="cursor-pointer ">Eduction </p>
                                <p className="cursor-pointer ">Experience </p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <ul className="flex flex-col space-y-4 p-2 ">

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        MA
                                    </div>
                                    <p className="text-gray-600">8 jobs for Mammoth Hospital</p>
                                </div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        FO
                                    </div>
                                    <p className="text-gray-600">7 jobs for Fountain Valley Rgnl Hosp And Med Ctr -
                                        Euclid</p>
                                </div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        ST
                                    </div>
                                    <p className="text-gray-600">6 jobs for Stanislaus Surgical Hospital</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        EA
                                    </div>
                                    <p className="text-gray-600">8 jobs for Eastside Medical Center</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        CA
                                    </div>
                                    <p className="text-gray-600">7 jobs for Candler County Hospital</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        JE
                                    </div>
                                    <p className="text-gray-600">7 jobs for Jerold Phelps Community Hospital</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        PO
                                    </div>
                                    <p className="text-gray-600">8 jobs for Porterville Developmental Center</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        MI
                                    </div>
                                    <p className="text-gray-600">9 jobs for Miller County Hospital</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        PI
                                    </div>
                                    <p className="text-gray-600">5 jobs for Piedmont Rockdale Hospital</p></div>
                            </li>

                            <li className="flex w-full items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        JE
                                    </div>
                                    <p className="text-gray-600">2 jobs for Jefferson Hospital</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        UN
                                    </div>
                                    <p className="text-gray-600">4 jobs for Union General Hospital</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        TU
                                    </div>
                                    <p className="text-gray-600">5 jobs for Tulane - Lakeside Hospital</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        WA
                                    </div>
                                    <p className="text-gray-600">4 jobs for Warm Springs Medical Center</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        ST
                                    </div>
                                    <p className="text-gray-600">6 jobs for St. James Behavioral Health Hospital</p>
                                </div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        TU
                                    </div>
                                    <p className="text-gray-600">6 jobs for Tulane Medical Center</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        FR
                                    </div>
                                    <p className="text-gray-600">5 jobs for Franklin Foundation Hospital</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        PH
                                    </div>
                                    <p className="text-gray-600">4 jobs for Physicians Medical Center</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        IN
                                    </div>
                                    <p className="text-gray-600">5 jobs for Indiana University Health Transplant</p>
                                </div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        AB
                                    </div>
                                    <p className="text-gray-600">6 jobs for Abrom Kaplan Memorial Hospital</p></div>
                            </li>
                            <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                                <div className="w-full space-x-4 flex item-center">
                                    <div
                                        className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                        ST
                                    </div>
                                    <p className="text-gray-600">8 jobs for St. James Parish Hospital</p></div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        {/* End  Body */}

        {/* footer */}
        <footer className="bg-white shadow rounded-sm">
            <div className=" mx-auto flex py-8">
                <div className="w-full mx-auto flex flex-wrap">
                    <div className="flex w-full lg:w-1/2 ">
                        <div className="px-8 text-gray-600">
                            <h3 className="font-extrabold text-gray-900 text-md capitalize">About Us</h3>
                            <p className="py-4 text-sm">
                                We are a team of nurses, doctors, technologists and executives dedicated to help nurses
                                find
                                jobs that they love.
                            </p>
                            <p className="text-sm">All copyrights reserved &copy; {new Date().getFullYear()} -
                                {process.env.appName}</p>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 lg:pt-0 pt-8 justify-between">

                        <div className="w-full lg:w-1/2 px-8">
                            <h3 className="font-extrabold text-gray-900 text-md capitalize">sitemap</h3>
                            <ul className="list-reset items-center text-sm text-gray-600 pt-4 space-y-1">
                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">Nurces</a>
                                </li>
                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">Employes</a>
                                </li>

                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">Social network</a>
                                </li>
                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">Jobs</a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2 px-8">
                            <h3 className="font-extrabold text-gray-900 text-md capitalize">privacy</h3>
                            <ul className="list-reset items-center text-sm text-gray-600 pt-4 space-y-1">
                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">
                                        Terms of use</a>
                                </li>
                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">
                                        Privacy policy</a>
                                </li>
                                <li>
                                    <a className="inline-block no-underline hover:text-gray-900 hover:underline"
                                       href="#">
                                        Cookie policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* end footer*/}

    </div>


);


export default Design;