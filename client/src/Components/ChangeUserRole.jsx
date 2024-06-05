import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";

import { toast } from "react-toastify";
import allApi from "../Api/Api";
import ROLE from "../Api/Role";

const ChangeUserRole = ({ name, email, role, userId, onClose, callFunc }) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);

    console.log(e.target.value);
  };

  const updateUserRole = async () => {
    const fetchResponse = await fetch(allApi.updateUser.url, {
      method: allApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });

    const responseData = await fetchResponse.json();

    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      callFunc();
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50 ">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm rounded-lg">
        <button
          className="block ml-auto p-2 hover:bg-slate-100 rounded-full"
          onClick={onClose}
        >
          <IoMdClose />
        </button>

        <h1 className="pb-4 text-lg font-medium">Change User Role</h1>

        <p>Name : {name}</p>
        <p>Email : {email}</p>

        <div className="flex items-center justify-between my-4">
          <p>Role :</p>
          <select
            className="border px-4 py-1"
            value={userRole}
            onChange={handleOnChangeSelect}
          >
            {Object.values(ROLE).map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button
          className="w-fit mx-auto block  py-1 px-3 rounded-full bg-[#00e6d4] text-black "
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
