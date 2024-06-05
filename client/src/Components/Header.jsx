import React, { useContext, useState, useEffect } from "react";
import Logo from "../assest/Logo2.jsx";
import { FiSearch } from "react-icons/fi";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allApi from "../Api/Api.js";
import { toast } from "react-toastify";
import { setUserDetails } from "../Store/UserSlice.js";
import ROLE from "../Api/Role.js";
import Context from "../Context/index.js";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(allApi.logout_user.url, {
      method: allApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="h-18 shadow-md bg-[#e6fffa]">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={`/`}
          className="flex h-17 justify-around items-center w-[150px]"
        >
          <Logo w={100} h={50} />
          <h1 className="font-bold h-[50px] text-center text-[25px] mt-[20px]">
            Nexaro
          </h1>
        </Link>
        <div className="hidden lg:flex items-center border focus-within:shadow-md rounded-full">
          <input
            type="text"
            placeholder="search"
            className="w-[400px] px-2 py-1 rounded-l-full outline-none"
            onChange={handleSearch}
            value={search}
          />
          <div
            className="py-2 px-4 bg-[#00ffcc] rounded-full -ms-1 rounded-tl-none rounded-bl-none cursor-pointer"
            onClick={handleSearch}
          >
            <FiSearch size={20} />
          </div>
        </div>
        <div className="flex items-center gap-7 -ms-[100px] md:ms-0 lg:-me-[100px]">
          <div className="flex relative justify-center">
            {user?._id && (
              <div
                onClick={() => {
                  setShowPanel(!showPanel);
                }}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    alt={user?.username}
                    className="h-[50px] w-[50px] cursor-pointer rounded-full"
                  />
                ) : (
                  <FaUser size={23} className="cursor-pointer" />
                )}
              </div>
            )}

            {showPanel && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded hidden md:block">
                <nav className="min-w-sm">
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to={`/adminPanel`}
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2 rounded-lg cursor-pointer"
                      onClick={() => {
                        setShowPanel(!showPanel);
                      }}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          <Link className="relative" to={`/cart`}>
            <span>
              <FaCartShopping size={22} className="cursor-pointer" />
            </span>
            <div className="absolute py-[4px] px-[4px] rounded-full text-sm bg-[#00ffcc] -top-4 -right-3">
              {context?.cartProductCount ? context?.cartProductCount : 0}
            </div>
          </Link>
          <div>
            {user?._id ? (
              <button
                className="bg-[#00ffcc] rounded-full p-2 px-4 flex items-center hover:shadow-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                to={`/login`}
                className="bg-[#00ffcc] rounded-full p-2 px-4 flex items-center hover:shadow-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
