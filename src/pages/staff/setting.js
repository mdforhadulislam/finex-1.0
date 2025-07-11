"use client";
import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import {
  getRequestSend,
  putRequestSend,
  USER_ACCOUNT_API,
  USER_ACCOUNT_PHONE,
} from "@/data/ApiMethod";
import Profile from "@/public/profile.svg";
import InputBox from "@/utils/InputBox";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { toast } from "react-toastify";

const StaffSetting = () => {
  const authContext = useContext(AuthContext);
  const loading = useContext(LoadingContext);

  const formData = new FormData();

  const [profileImage, setProfileImage] = useState("");
  const [nidFront, setNidFront] = useState("");
  const [nidBack, setNidBack] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const uploadUpdatedHandler = async () => {
    loading.loadingStart();
    try {
      const response = await putRequestSend(
        `${USER_ACCOUNT_API}/?phone=${authContext.user.phone}`,
        {},
        userData
      );
      console.log(response);

      if (response.status === 200) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    } finally {
      loading.loadingEnd();
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      loading.loadingStart();
      try {
        const response = await getRequestSend(
          USER_ACCOUNT_PHONE(authContext?.user?.phone)
        );
        if (response.status === 200) {
          setUserData({
            name: response.data.name,
            phone: response.data.phone,
            email: response.data.email,
          });
          setProfileImage(response.data?.profile);
          setNidFront(response.data?.nationalID?.front);
          setNidBack(response.data?.nationalID?.back);
        }
      } catch (error) {
        toast.error("An error occurred while fetching user data.");
      } finally {
        loading.loadingEnd();
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full h-auto p-3 ">
      
    <Head><title>Staff Setting</title></Head>
      <div className="w-full h-auto bg-defult transition-all duration-300 rounded-md p-5 md:flex-row flex-col flex items-center justify-between gap-2">
        <div className="w-full sm:w-auto h-auto flex flex-col sm:flex-row gap-5 sm:gap-3">
          <div className="w-full flex justify-center items-center sm:block sm:w-auto h-auto p-2 bg-white rounded-md">
            <Image
              width={180}
              height={180}
              className="w-[180px] h-[180px] rounded-md shadow-3xl"
              src={profileImage || Profile}
              alt="Profile Image"
            />
          </div>
          <div className="w-auto h-auto flex flex-col items-start font-sans text-white mb-5">
            <h1 className="text-2xl font-bold text-white uppercase">
              {userData.name || "User Name"}
            </h1>
            <div className="w-full md:w-auto flex-col mt-3">
              <div className="w-auto flex items-center gap-3">
                <span className="w-[56px]">Role</span>:
                <span>{authContext?.user?.role || "N/A"}</span>
              </div>
              <div className="w-auto flex items-center gap-3">
                <span className="w-[56px]">Email</span>:
                <span>{authContext?.user?.email || "N/A"}</span>
              </div>
              <div className="w-auto flex items-center gap-3">
                <span className="w-[56px]">Phone</span>:
                <span>{authContext?.user?.phone || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto p-3">
        <div className="w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto flex gap-3 md:flex-row flex-col">
            <label htmlFor="profilePic">
              <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
                Profile
              </span>
              <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                <input
                  type="file"
                  id="profilePic"
                  className="hidden"
                  onChange={(e) => {
                    loading.loadingStart();
                    const file = e.target.files[0];

                    if (file) {
                      formData.append("profile", e.target.files[0]);
                      fetch(USER_ACCOUNT_PHONE(authContext?.user?.phone), {
                        method: "PUT",
                        body: formData,
                      })
                        .then((res) => res.json())
                        .then((res2) => {
                          loading.loadingEnd();
                          if (res2.status == 200) {
                            toast.success(res2.message);
                            getRequestSend(
                              USER_ACCOUNT_PHONE(authContext?.user?.phone)
                            ).then((getData) => {
                              if (getData.status == 200) {
                                setUserData({
                                  name: getData.data.name,
                                  phone: getData.data.phone,
                                  email: getData.data.email,
                                });
                                setProfileImage(getData.data?.profile);
                                setNidFront(getData.data?.nationalID?.front);
                                setNidBack(getData.data?.nationalID?.back);
                              }
                            });
                          } else {
                            toast.error(res2.message);
                          }
                        });
                    }
                  }}
                />
                <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                <Image
                  width={150}
                  height={150}
                  src={profileImage || Profile}
                  alt="Profile Pic"
                  className="w-36 h-36 border shadow-3xl rounded-md"
                />
              </div>
            </label>

            <label htmlFor="nidFront">
              <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
                NID Front
              </span>
              <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                <input
                  type="file"
                  id="nidFront"
                  className="hidden"
                  onChange={(e) => {
                    loading.loadingStart();
                    const file = e.target.files[0];

                    if (file) {
                      formData.append("nationalID.front", e.target.files[0]);
                      fetch(USER_ACCOUNT_PHONE(authContext?.user?.phone), {
                        method: "PUT",
                        body: formData,
                      })
                        .then((res) => res.json())
                        .then((res2) => {
                          loading.loadingEnd();
                          if (res2.status == 200) {
                            toast.success(res2.message);
                            getRequestSend(
                              USER_ACCOUNT_PHONE(authContext?.user?.phone)
                            ).then((getData) => {
                              if (getData.status == 200) {
                                setUserData({
                                  name: getData.data.name,
                                  phone: getData.data.phone,
                                  email: getData.data.email,
                                });
                                setProfileImage(getData.data?.profile);
                                setNidFront(getData.data?.nationalID?.front);
                                setNidBack(getData.data?.nationalID?.back);
                              }
                            });
                          } else {
                            toast.error(res2.message);
                          }
                        });
                    }
                  }}
                />
                <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                <Image
                  width={150}
                  height={150}
                  src={nidFront || Profile}
                  alt="NID Front"
                  className="w-36 h-36 border shadow-3xl rounded-md"
                />
              </div>
            </label>

            <label htmlFor="nidBack">
              <span className="block text-base font-medium text-gray-800 pl-2 p-[2px]">
                NID Back
              </span>
              <div className="w-full h-auto flex flex-row cursor-pointer gap-3">
                <input
                  type="file"
                  id="nidBack"
                  className="hidden"
                  onChange={(e) => {
                    loading.loadingStart();
                    const file = e.target.files[0];

                    if (file) {
                      formData.append("nationalID.back", e.target.files[0]);
                      fetch(USER_ACCOUNT_PHONE(authContext?.user?.phone), {
                        method: "PUT",
                        body: formData,
                      })
                        .then((res) => res.json())
                        .then((res2) => {
                          loading.loadingEnd();
                          if (res2.status == 200) {
                            toast.success(res2.message);
                            getRequestSend(
                              USER_ACCOUNT_PHONE(authContext?.user?.phone)
                            ).then((getData) => {
                              if (getData.status == 200) {
                                setUserData({
                                  name: getData.data.name,
                                  phone: getData.data.phone,
                                  email: getData.data.email,
                                });
                                setProfileImage(getData.data?.profile);
                                setNidFront(getData.data?.nationalID?.front);
                                setNidBack(getData.data?.nationalID?.back);
                              }
                            });
                          } else {
                            toast.error(res2.message);
                          }
                        });
                    }
                  }}
                />
                <MdOutlineFileDownload className="w-36 h-36 p-5 border shadow-3xl text-gray-400 rounded-md" />
                <Image
                  width={150}
                  height={150}
                  src={nidBack || Profile}
                  alt="NID Back"
                  className="w-36 h-36 border shadow-3xl rounded-md"
                />
              </div>
            </label>
          </div>

          <InputBox
            title="Name"
            value={userData.name}
            action={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <InputBox
            title="Phone"
            value={userData.phone}
            action={(e) => setUserData({ ...userData, phone: e.target.value })}
          />
          <InputBox
            title="Email"
            value={userData.email}
            action={(e) => setUserData({ ...userData, email: e.target.value })}
          />

          <button
            className="inline-flex items-center p-1 py-2 px-[6px] bg-defult-button rounded-lg text-white shadow-3xl justify-center text-center mt-4 "
            onClick={uploadUpdatedHandler}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffSetting;
