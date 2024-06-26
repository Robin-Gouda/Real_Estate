import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);

  return (
    <header className=" bg-blue-200 shadow-md">
      <div className="flex justify-between p-3 items-center max-w-6xl mx-auto ">
        <NavLink to="/">
          <h1 className=" font-bold text-sm sm:text-xl flex  flex-wrap ">
            <span className="text-slate-500">Horizon</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </NavLink>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex  gap-4">
          <NavLink to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </NavLink>
          {/* <NavLink to="/about ">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </NavLink> */}
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
