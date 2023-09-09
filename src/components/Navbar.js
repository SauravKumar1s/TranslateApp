import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#3e2890] border-b-2 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/20/22/15/translate-6641970_1280.png"
            className="h-16 rounded-xl mr-3"
            alt="Flowbite Logo"
          />
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  bg-[#3e2890] rounded md:bg-transparent text-white md:p-0"
                aria-current="page"
              >
                Nepali Alphabet
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  bg-[#3e2890] rounded md:bg-transparent text-white md:p-0"
                aria-current="page"
              >
                Nepali Keyboard
              </a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
