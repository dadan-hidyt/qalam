import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
export default function Root() {
  const [MenuShow, setMenuShow] = useState(false);

  const showMenu = () => {
    if (MenuShow === false) {
      setMenuShow(true);
    } else {
      setMenuShow(false);
    }
  };

  return (
    <>
      <nav className="p-3 top-0 sticky  border-b shadow border-green-500 rounded-none  bg-green-300  dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            📖 &nbsp;
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-700">
              Qallam
            </span>
          </a>
          <button
            onClick={showMenu}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              MenuShow
                ? "show w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  📓 Home
                </Link>
              </li>
              <li>
                <Link
                  to="/imsak"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ☪️ Imsyakiah
                </Link>
              </li>
              <li>
                <Link
                  to="/donasi"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  💰 Donasi
                </Link>
              </li>
              <li>
                <Link
                  to="/doa-harian"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  📖Do'a Do'a
                </Link>
              </li>

            
            </ul>
          </div>
        </div>
      </nav>
      <div className="container  w-11/12 mt-4 lg:w-10/12 mx-auto">
        <Outlet />
      </div>
      <div className="border-t border-b p-3 text-center w-full bottom-0 mt-3 bg-white border-green-500">
        © 2023 dadanhidyt · Made with ❤️ in sumedang
        <div className="mt-3">
          <a
            target={"_blank"}
            className="bg-green-400 rounded text-white border border-green-500 p-1"
            href="https://trakteer.id/dadanskhidayat/tip"
          >
            Suport Saya
          </a>
        </div>
      </div>
    </>
  );
}
