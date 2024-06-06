import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ROLE from "../Api/Role.js";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();
  console.log("user", user);
  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-[#e6fffa] min-h-full  w-full  max-w-[18rem] customShadow">
        <div className="h-[13rem]  flex justify-center items-center flex-col">
          <div className="text-6xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-[100px] h-[100px] rounded-full"
                alt={user?.username}
              />
            ) : (
              <FaUser />
            )}
          </div>
          <p className="capitalize text-lg font-semibold p-2">
            {user?.username}
          </p>
          <p className="text-sm">{user?.role}</p>
        </div>
        <div>
          <nav className="grid p-4">
            <Link
              to={"/all-users"}
              className="px-4 py-2 rounded-lg hover:bg-[#b3fff0]"
            >
              All Users
            </Link>
            <Link
              to={"/all-products"}
              className="px-4 py-2 rounded-lg hover:bg-[#b3fff0]"
            >
              All product
            </Link>
            <Link
              to={"/all-orders"}
              className="px-4 py-2 rounded-lg hover:bg-[#b3fff0]"
            >
              All Orders
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default AdminPanel;
