import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="bg-white shadow">
                <button className="block lg:hidden" onClick={()=>setMenuOpen(!menuOpen)}>
                    <i className="fa fa-bars" style={{fontSize: '1.5em'}}></i>
                </button>
                <h4 className="text-blue-500 font-semibold text-lg">Health Explore</h4>
                <ul className="hidden lg:flex space-x-10">
                    <li className="font-semibold"> <a href="#"> Profile</a></li>
                    <li className="font-semibold"> <a href="#">Jobs</a>  </li>
                    <li className="font-semibold"> <a href="#"> Professional Network</a> </li>
                    <li className="font-semibold"> <a href="#"> Lounge</a></li>
                    <li className="font-semibold"><a href="#">Salary</a></li>
                </ul>
                <div className="flex  space-x-6 items-center">
                    <a href="#" className="hidden lg:flex create-job">CREATE JOB</a>
                    <span className="inline-block relative">
                        <div className="jo">JO</div>
                        <span className="text">2</span>
                    </span>
                    <h4 className="hidden lg:flex"><a href="#">Logout</a> </h4>
                </div>
            </nav>
            { menuOpen && <ul className="flex show-menu lg:hidden">
                <li className="py-2 mx-4"><a href="#"> Profile</a></li>
                <li className="py-2 mx-4"><a href="#">Jobs</a></li>
                <li className="py-2 mx-4"><a href="#"> Professional Network</a></li>
                <li className="py-2 mx-4"><a href="#"> Lounge</a></li>
                <li className="py-2 mx-4"><a href="#">Salary</a></li>
                <li className="py-2 mx-4"><a href="#" className="create-job">CREATE JOB</a></li>
                <h4 className="py-2 mx-4"><a href="#">Logout</a></h4>
            </ul> }
        </header>
    );
}

export default Navbar;