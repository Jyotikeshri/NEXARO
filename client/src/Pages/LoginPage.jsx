import React, { useContext, useState } from "react";
import { FaUserCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications
import allApi from "../Api/Api";
import Context from "../Context/index.js";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(allApi.signIn.url, {
        method: allApi.signIn.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        navigate("/");

        fetchUserDetails();
        fetchUserAddToCart();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <div className="mx-auto container p-4 relative top-[50px]">
        <div className="bg-white p-4 py-5 w-full max-w-md mx-auto rounded-lg">
          <div className="w-[100px] mx-auto h-20 flex items-center gap-4 ">
            <FaUserCheck size={35} />
            <span className="text-[20px] font-bold">Login</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
              <label htmlFor="email" className="font-bold">
                Email :
              </label>
              <div className="bg-slate-100 rounded-lg">
                <input
                  type="email" // Changed to email for better input validation
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  id="email"
                  placeholder="Enter Email"
                  className="outline-none bg-transparent p-2 w-full"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <label htmlFor="password" className="font-bold">
                Password :
              </label>
              <div className="bg-slate-100 rounded-lg flex items-center px-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="outline-none bg-transparent py-2 w-full"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <Link
                to="/forgotPassword"
                className="cursor-pointer hover:text-blue-500 hover:underline text-sm ms-auto"
              >
                Forgot Password?
              </Link>
            </div>
            <button className="bg-[#00ffcc] p-2 rounded-lg mt-[20px] px-4">
              Login
            </button>
            <div className="text-slate-700 flex items-center justify-center mt-2">
              Don't have an Account? &nbsp;
              <Link to="/signup" className="text-blue-500">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
