import React, { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../Helpers/ImageHelper";
import withoutPic from "../assest/withoutProfilePic.png";
import allApi from "../Api/Api";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    ConfirmPassword: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.ConfirmPassword) {
      const response = await fetch(allApi.signUp.url, {
        method: allApi.signUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        toast.success(res.message);
        navigate("/login");
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error("Password and Confirm Password are not same");
    }
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  return (
    <section>
      <div className="mx-auto container p-4 relative top-[50px]">
        <div className="bg-white p-4 py-5 w-full max-w-md mx-auto rounded-lg">
          <div className="w-[100px] mx-auto h-20 flex items-center gap-4 ">
            <span className="text-[20px] font-bold text-center">SignUp</span>
          </div>
          <div className="flex justify-center items-center mb-[25px]">
            <img
              src={data.profilePic || withoutPic}
              alt=""
              className="w-[70px] h-[70px] rounded-full"
            />
          </div>
          <form>
            <label className="flex justify-center">
              <div className="text-xs  bg-[#00ffcc] p-2 rounded-lg cursor-pointer text-center ">
                Upload Photo
              </div>

              <input
                type="file"
                className="hidden"
                onChange={handleUploadPic}
              />
            </label>
          </form>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid gap-3 mb-2">
              <label htmlFor="email" className="font-bold">
                Email :
              </label>
              <div className="bg-slate-100 rounded-lg">
                <input
                  type="text"
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
              <label htmlFor="username" className="font-bold">
                Username :
              </label>
              <div className="bg-slate-100 rounded-lg">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                  id="username"
                  placeholder="Enter username"
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
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <label htmlFor="c-password" className="font-bold">
                Confirm Password :
              </label>
              <div className="bg-slate-100 rounded-lg flex items-center px-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="ConfirmPassword"
                  id="c-password"
                  value={data.ConfirmPassword}
                  onChange={handleChange}
                  placeholder="Enter Confirm Password"
                  className="outline-none bg-transparent py-2 w-full"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-[#00ffcc] p-2 rounded-lg mt-[20px] px-4">
              SignUp
            </button>
            <div className="text-slate-700 flex items-center justify-center">
              Already have an Account? &nbsp;
              <Link to={`/login`} className="text-blue-500">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
