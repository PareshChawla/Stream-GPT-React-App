import { useSelector } from "react-redux";
import logo from "../assets/images/sgpt3.png";
import down from "../assets/images/downarrow.png";
import up from "../assets/images/uparrow.png";
import avatar from "../assets/images/nflixlogo2.png";
import avatar2 from "../assets/images/nflixlogo1.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

const Header = () => {
  const [toggleState, setToggleState] = useState(false);

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  const handleSignOutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("login")
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
      <div className="h-[13vh] absolute w-full z-10 flex flex-row items-center bg-gradient-to-b from-black justify-between">
        <img className="h-12 ml-9" src={logo} alt="logo" />
        {user && (
          <div className="flex mr-5">
            <img className="h-10 w-10" src={avatar} alt="avatar" />
            <div className="relative">
              {toggleState ? (
                <div
                  className="h-4 w-4 m-2 cursor-pointer"
                  onClick={handleToggleState}
                >
                  <img src={up} alt="avatar" />
                </div>
              ) : (
                <div
                  className="h-4 w-4 m-2 cursor-pointer"
                  onClick={handleToggleState}
                >
                  <img src={down} alt="avatar" />
                </div>
              )}
            </div>
            {toggleState && (
              <div className="bg-black bg-opacity-90 absolute mt-16 w-52 right-10">
                <div className="flex items-center border-gray-400 border-b">
                  <img
                    className="h-6 w-6 mr-3 ml-3"
                    src={avatar2}
                    alt="user-avatar"
                  />
                  <h1 className="font-bold text-white py-2">
                    {user.displayName}
                  </h1>
                </div>
                <div className="flex items-center justify-center py-2">
                  <button className="text-white font-bold" onClick={handleSignOutClick}>
                    Sign out of StreamGPT
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
