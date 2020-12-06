import React from 'react';

const SearchInput = () => {
    return (
        // <label className="block">
        //     <input type="text" className="bg-search-icon bg-no-repeat mt-1 block w-full border-transparent bg-white focus:border-blue-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Search fot any job, title, keywords or company" />
        // </label>


        <div className="p-2 relative text-gray-600 flex bg-white ">
            <input className="w-full border-transparent bg-white px-5 pr-16 focus:outline-none focus:ring-transparent"
            type="search" name="search" placeholder="Search fot any job, title, keywords or company" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <img src="/img/search.svg" alt="Search" className="w-5" />
            </button>
        </div>
    );
};

export default SearchInput;



  