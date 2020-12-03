const Footer = () => {
    return (
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
    )
};

export default Footer;
