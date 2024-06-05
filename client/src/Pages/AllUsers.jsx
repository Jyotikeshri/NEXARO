import React, { useEffect, useState } from "react";
import AdminPanel from "../Components/AminPanel";
import allApi from "../Api/Api";
import { toast } from "react-toastify";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import ChangeUserRole from "../Components/ChangeUserRole";

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(allApi.allUser.url, {
      method: allApi.allUser.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div>
      <div className="flex flex-row">
        <aside className="min-h-full  w-full  max-w-[18rem]">
          <AdminPanel />
        </aside>
        <div className="w-full h-full p-2">
          <div className="bg-white pb-4">
            <table className="w-full userTable">
              <thead>
                <tr className="bg-[#b3fff0] text-black">
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
                {allUser.map((el, index) => {
                  return (
                    <tr className="pt-2 pb-2">
                      <td>{index + 1}</td>
                      <td>{el?.username}</td>
                      <td>{el?.email}</td>
                      <td>{el?.role}</td>
                      <td>{moment(el?.createdAt).format("LL")}</td>
                      <td>
                        <button
                          className="bg-green-100 p-2 rounded-full cursor-pointer "
                          onClick={() => {
                            setUpdateUserDetails(el);
                            setOpenUpdateRole(true);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {openUpdateRole && (
              <ChangeUserRole
                onClose={() => setOpenUpdateRole(false)}
                name={updateUserDetails.username}
                email={updateUserDetails.email}
                role={updateUserDetails.role}
                userId={updateUserDetails._id}
                callFunc={fetchAllUsers}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
