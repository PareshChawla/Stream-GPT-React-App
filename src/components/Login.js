import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Footer from "./Footer";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [userChanged, setUserChanged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPersistence(auth, browserSessionPersistence);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    setIsLoading(true);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      setIsLoading(false);
      return;
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
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
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setUserChanged(true);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setUserChanged(true);
  };

  return (
    <div>
      <Header />
      <div className="fixed w-full h-full top-0 left-0">
        <img
          className="brightness-50 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <div className="md:min-h-screen md:w-[40%] md:ml-[30%] absolute flex justify-center items-center">
        <div className="bg-black bg-opacity-75 w-full relative h-[80vh] mx-4 px-4 py-5 mt-[11vh] md:h-[90vh] md:mt-[13vh] md:mx-8 md:w-[75%] md:py-10 md:px-16">
          <form
            className="h-[70vh] w-[100%] mt-4 md:mt-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl text-white font-medium mb-10 md:mb-8">
              Sign In
            </h1>
            <input
              ref={email}
              className="w-full py-4 md:py-3.5 rounded-md placeholder:text-[#8c8c8c] text-white bg-[#333333] mb-4 text-start px-4 text-sm md:text-md invalid:border invalid:border-red-500 autofill:bg-transparent"
              type="email"
              placeholder="Email"
              value={userChanged ? emailValue : "demo-user@gmail.com"}
              onChange={handleEmailChange}
            />
            <input
              ref={password}
              className="w-full py-4 md:py-3.5 rounded-md placeholder:text-[#8c8c8c] text-white bg-[#333333] mb-10 text-start px-4 text-sm md:text-md"
              type="password"
              placeholder="Password"
              value={userChanged ? passwordValue : "Demo1234"}
              onChange={handlePasswordChange}
            />
            <p className="text-red-500 text-lg">{errorMessage}</p>
            <button
              className={`bg-[#e50914] w-full py-3.5 md:py-3 rounded-md text-white flex justify-center items-center font-medium relative ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleButtonClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="#fff"
                  ariaLabel="oval-loading"
                />
              ) : (
                "Sign In"
              )}
            </button>
            <div className="flex flex-row my-8 gap-2">
              <p className="text-[#737373] text-md">
                New to StreamGPT?
                <Link to="/signup">
                  <span className="text-white cursor-pointer ml-2 text-md">
                    Sign up now.
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
