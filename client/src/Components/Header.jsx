import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className=" bg-slate-200 shadow-md">
      <div className="flex justify-between p-3 items-center max-w-6xl mx-auto ">
        <NavLink to="/">
          <h1 className=" font-bold text-sm sm:text-xl flex  flex-wrap ">
            <span className="text-slate-500">Horizon</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </NavLink>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex  gap-4">
          <NavLink to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </NavLink>
          <NavLink to="/about ">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </NavLink>
          <NavLink to="/profile ">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              // currentUser.username
              <li className="text-slate-700 hover:underline">Sign in</li>
            )}
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
