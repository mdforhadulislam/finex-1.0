import { AuthContext } from "@/context/AuthContext";
import { getRequestSend, USER_ACCOUNT_PHONE } from "@/data/ApiMethod";
import navBarRouteOption from "@/data/navbar";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import LangugeToggolButton from "@/utils/LangugeToggolButton";
import Logo from "@/utils/Logo";
import LogoBn from "@/utils/LogoBn";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import Profile from '@/public/profile.svg'

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isProfileClick, setIsProfileClick] = useState(false);
  const [profilePic, setProfilePic] = useState(Profile); // Default placeholder

  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.user?.phone) {
      getRequestSend(USER_ACCOUNT_PHONE(authContext.user.phone)).then((res) => {
        if (res.status === 200) {
          setProfilePic(res.data?.profile || "/placeholder.png");
        }
      });
    }
  }, [authContext?.user?.phone]); // Include phone number in dependency array

  return (
    <header className="w-full block">
      <nav className="backdrop-blur-md bg-white/60 shadow-3xl px-4 py-1 fixed w-full z-[90]">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <IsEnglish>
            <Logo link="/" />
          </IsEnglish>
          <IsBangla>
            <LogoBn link="/" />
          </IsBangla>

          <div className="flex">
            <div className="block pr-[3px] lg:hidden">
              <LangugeToggolButton />
            </div>
            <MenuButton action={() => setNavbar(!navbar)} />
          </div>

          <div
            className={`${
              navbar ? "block" : "hidden"
            } lg:block w-full lg:w-auto`}
          >
            <ul className="flex flex-col p-[2px] mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:align-middle lg:items-center lg:space-x-5 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-[#fff0] relative">
              <div className="hidden lg:block">
                <LangugeToggolButton />
              </div>
              {navBarRouteOption.map((item) => (
                <div key={item.id}>
                  <IsEnglish>
                    <NavButton
                      link={item.link}
                      title={item.name}
                      action={() => setNavbar(!navbar)}
                    />
                  </IsEnglish>
                  <IsBangla>
                    <NavButton
                      link={item.link}
                      title={item.nameBn}
                      action={() => setNavbar(!navbar)}
                    />
                  </IsBangla>
                </div>
              ))}

              {authContext.isUserLogedIn ? (
                <div
                  className="flex justify-center align-middle lg:bg-white bg-gray-200 p-1 lg:rounded-full rounded-md lg:block items-center gap-4 cursor-pointer"
                  onClick={() => setIsProfileClick(!isProfileClick)}
                >
                  <Image
                    width={40}
                    height={40}
                    src={profilePic}
                    className="w-[40px] h-[40px] rounded-full shadow-3xl overflow-hidden border-gray-800 border"
                    alt="User Profile"
                  />
                  <span className="text-lg font-semibold lg:hidden">
                    {authContext?.user?.name}
                  </span>
                </div>
              ) : (
                <IsEnglish>
                  <Link
                    href="/auth/login"
                    className="px-4 py-2 text-center text-[16.6px] shadow hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full"
                  >
                    Login
                  </Link>
                </IsEnglish>
              )}

              <IsBangla>
                {!authContext.isUserLogedIn && (
                  <Link
                    href="/auth/login"
                    className="px-4 py-[2px] text-center shadow hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full text-2xl bfont"
                  >
                    লগইন
                  </Link>
                )}
              </IsBangla>

              {isProfileClick && (
                <DropDownMenu setIsProfileClick={setIsProfileClick} />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
