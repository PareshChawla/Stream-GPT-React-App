import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleToggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <div className="min-h-screen w-[40%] ml-[30%] absolute flex justify-center items-center">
        <div className="bg-black bg-opacity-75 relative h-[100vh] mt-[13vh] mx-8 w-[75%] py-10 px-16">
          <form className="h-[70vh] w-[100%] mt-6 ">
            <h1 className="text-3xl text-white font-medium mb-8">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignedIn && (
              <input
                className="w-full py-3.5 rounded-md placeholder:text-[#737373] text-white bg-[#333333] mb-4 text-start px-4 text-sm"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              className="w-full py-3.5 rounded-md placeholder:text-[#737373] text-white bg-[#333333] mb-4 text-start px-4 text-sm invalid:border-pink-500"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full py-3.5 rounded-md placeholder:text-[#737373] text-white bg-[#333333] mb-10 text-start px-4 text-sm"
              type="password"
              placeholder="Password"
            />
            <button className="bg-[#e50914] w-full py-3 rounded-md text-white font-medium">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </button>
            {isSignedIn ? (
              <div className="flex flex-row my-8 gap-2">
                <p className="text-[#737373]">
                  New to StreamGPT?
                  <span
                    onClick={handleToggleSignIn}
                    className="text-white cursor-pointer ml-2"
                  >
                    Sign up now.
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex flex-row my-8 gap-2">
                <p className="text-[#737373]">
                  Already an User?
                  <span
                    onClick={handleToggleSignIn}
                    className="text-white cursor-pointer ml-2"
                  >
                    Click here to Sign In
                  </span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
