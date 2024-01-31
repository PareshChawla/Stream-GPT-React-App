import { useSelector } from "react-redux";
import logo from "../assets/images/sgpt3.png";
import down from "../assets/images/downarrow.png";
import up from "../assets/images/uparrow.png";
import avatar from "../assets/images/nflixlogo2.png";
import avatar2 from "../assets/images/nflixlogo1.png";
import Search from "../assets/images/search.png";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";

const BrowseHeader = () => {
  const [toggleState, setToggleState] = useState(false);
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <div className="h-[10vh] absolute w-full z-20 flex flex-row items-center bg-gradient-to-b from-black justify-between">
        <Link to="/browse"><img className="h-7 md:h-8 ml-4 lg:ml-12" src={logo} alt="logo" /></Link>
          <ul className="hidden md:flex content-start w-1/2 text-white items-center text-sm lg:mr-[16%] gap-8">
            <Link to="/browse" className="hover:text-gray-400">Home</Link>
            <Link className="hover:text-gray-400">TV Show</Link>
            <Link className="hover:text-gray-400">Movies</Link>
            <Link className="hover:text-gray-400">New & Popular</Link>
          </ul>
        <div className="flex mr-2 md:mr-5 items-center">
          <Link to="/search">
            <div className="flex items-center mr-3 md:mr-7 cursor-pointer">
              <img className="h-5 w-5 md:h-4 md:w-4 mr-2 md:mr-2" src={Search} alt="avatar" />
              <h1 className="hidden md:block text-white text-lg">Search</h1>
            </div>
          </Link>
          <img className="h-7 w-7 md:h-8 md:w-8" src={avatar} alt="avatar" />
          <div className="relative">
            {toggleState ? (
              <div
                className="h-3 w-3 md:h-4 md:w-4 m-2 cursor-pointer"
                onClick={handleToggleState}
              >
                <img src={up} alt="avatar" />
              </div>
            ) : (
              <div
                className="h-3 w-3 md:h-4 md:w-4 m-2 cursor-pointer"
                onClick={handleToggleState}
              >
                <img src={down} alt="avatar" />
              </div>
            )}
          </div>
          {toggleState && (
            <div className="bg-black bg-opacity-90 absolute mt-44 w-44 md:right-10 right-4 rounded-md">
              <div className="flex items-center border-gray-400 border-b">
                <img
                  className="h-5 w-5 mr-3 ml-3"
                  src={avatar2}
                  alt="user-avatar"
                />
                <h1 className="font-semibold text-sm text-white py-2">
                  {user.displayName}
                </h1>
              </div>
              <div className="flex flex-col py-2 mx-3 items-start text-white text-sm font-bold leading-6">
              <h1>Account</h1>
              <h1>Help Centre</h1>
                <button
                  className=""
                  onClick={handleSignOutClick}
                >
                  Sign out of StreamGPT
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BrowseHeader;
