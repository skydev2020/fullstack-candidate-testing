const Footer = () => {
    return (
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
    )
}

export default Footer;
