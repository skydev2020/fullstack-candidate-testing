import {useState} from 'react'

const SearchBar = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className="flex flex-col h-full pt-16 lg:pt-16 m-5">

            <div className="relative pull-right px-4 bg-white rounded-sm">
                <input type="search" name="q" placeholder="Search for any job, title, keywords or company"
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

    )
};


export default SearchBar;