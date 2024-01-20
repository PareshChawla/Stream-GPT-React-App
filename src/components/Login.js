import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSignIn = () => {
    if (isSignedIn === true) {
      if (email.current) email.current.value = "";
      if (password.current) password.current.value = "";
      setErrorMessage(null);
      setIsSignedIn(false);
    } else {
      if (name.current) name.current.value = "";
      if (email.current) email.current.value = "";
      if (password.current) password.current.value = "";
      setErrorMessage(null);
      setIsSignedIn(true);
    }
  };

  const handleButtonClick = () => {
    if (!isSignedIn && (!name.current || !name.current.value.trim())) {
      setErrorMessage("Please enter your Full Name.");
      return;
    }
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          });
          if (name.current) name.current.value = "";
          if (email.current) email.current.value = "";
          if (password.current) password.current.value = "";
          setIsSignedIn(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            errorMessage =
              "The email address is already in use. Please use a different email.";
          }
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (email.current) email.current.value = "";
          if (password.current) password.current.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            errorMessage =
              "Invalid credentials. Please check your email and password.";
          }
          setErrorMessage(errorMessage);
        });
    }
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
          <form
            className="h-[70vh] w-[100%] mt-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl text-white font-medium mb-8">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignedIn && (
              <input
                ref={name}
                className="w-full py-3.5 rounded-md placeholder:text-[#8c8c8c] text-white bg-[#333333] mb-4 text-start px-4 text-md required:border-red-500"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="w-full py-3.5 rounded-md placeholder:text-[#8c8c8c] text-white bg-[#333333] mb-4 text-start px-4 text-md invalid:border invalid:border-red-500 autofill:bg-transparent"
              type="email"
              placeholder="Email"
            />
            <input
              ref={password}
              className="w-full py-3.5 rounded-md placeholder:text-[#8c8c8c] text-white bg-[#333333] mb-10 text-start px-4 text-md"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 text-lg">{errorMessage}</p>
            <button
              className="bg-[#e50914] w-full py-3 rounded-md text-white font-medium"
              onClick={handleButtonClick}
            >
              {isSignedIn ? "Sign In" : "Sign Up"}
            </button>

            {isSignedIn ? (
              <div className="flex flex-row my-8 gap-2">
                <p className="text-[#737373] text-md">
                  New to StreamGPT?
                  <span
                    onClick={handleToggleSignIn}
                    className="text-white cursor-pointer ml-2 text-md"
                  >
                    Sign up now.
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex flex-row my-8 gap-2">
                <p className="text-[#737373] text-md">
                  Already an User?
                  <span
                    onClick={handleToggleSignIn}
                    className="text-white cursor-pointer ml-2 text-md"
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
