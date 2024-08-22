import { navitems } from "constants/Navconfig";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Navbar = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (name: string) => {
    return location.pathname == name;
  };
  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="w-full md:block md:w-auto hidden" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            {navitems.map((d) => (
              <li key={d.id}>
                <a
                onClick={() => navigate(d.path)}
                  className={`block py-2 pr-4 pl-3 ${
                    isActive(d.path) ? "text-black font-bold" : "text-gray-400"
                  } text-gray md:p-0 hover:text-blue-500 cursor-pointer `}
                >
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
