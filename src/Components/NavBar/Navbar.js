import React from 'react';

import { HashLink, NavHashLink, HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    // let toggleBtn = document.querySelector("#navbar-toggle");
    // let collapse = document.querySelector("#navbar-collapse");

    // toggleBtn.onclick = () => {
    //     collapse.classList.toggle("hidden");
    //     collapse.classList.toggle("flex");
    // };
    return (


        <nav class="text-gray-400 bg-gray-900  py-2 md:py-4">
            <div class="container px-4 mx-auto md:flex md:items-center">

                <div class="flex justify-between items-center">
                    <Link to="/home" class="font-bold text-4xl text-white">Raihan.</Link>
                    <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                        ok
                    </button>
                </div>

                <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    <Link to="/" class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Home</Link>
                    <Link  to="/home#about" class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</Link>
                    <Link  to="/home#contact" class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</Link>

                </div>
            </div>
        </nav>




    );
};

export default Navbar;