import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/clientApp";
import { signUp } from "@/firebase/firebaseUtils";
import Link from "next/link";
import router from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isUserSignedUp, setIsUserSignedUp] = useState(false)
  const [error, setError] = useState("")
  const [usernameTaken, setUsernameTaken] = useState(false)

  const handleSignUp = () => {
    let validationErrors = [];

    // Check for spaces in the username
    if (username.includes(' ')) {
      validationErrors.push('Username cannot contain spaces.');
    }

    // Add other validation checks as needed and push error messages to the array

    
    // Email validation
    if (username === email) {
      validationErrors.push('Username cannot be the same as the email.');
    }
    if (!email.includes('@')) {
      validationErrors.push('Email must be a valid email address.');
    }

    // Username validation
    if (username.length < 3) {
      validationErrors.push('Username must be at least 3 characters long.');
    }
    if (username.length > 12) {
      validationErrors.push('Username cannot be longer than 12 characters.');
    }
    if (username.match(/[^a-zA-Z0-9]/g)) {
      validationErrors.push('Username must contain only letters and numbers.');
    }

    // Password validation
    if (password.length < 6) {
      validationErrors.push('Password must be at least 6 characters long.');
    }
    if (password === username) {
      validationErrors.push('Password cannot be the same as the username.');
    }
    if (password === email) {
      validationErrors.push('Password cannot be the same as the email.');
    }
    if (password === password.toLowerCase()) {
      validationErrors.push('Password must contain at least one uppercase letter.');
    }
    if (password === password.toUpperCase()) {
      validationErrors.push('Password must contain at least one lowercase letter.');
    }
    if (password === password.replace(/[0-9]/g, '')) {
      validationErrors.push('Password must contain at least one number.');
    
    }
    

    // If there are any validation errors, set them and do not proceed with the sign-up
    if (validationErrors.length > 0) {
      setError(validationErrors.join('\n'));
      return; // Stop the sign-up process
  }

    signUp(email, password, username)
      .then(() => {
        setIsUserSignedUp(true)
        setTimeout(() => router.push("/Dashboard/TradeLog"), 1000);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          validationErrors.push("Email is already in use")
        } 
      });
  };


  return (
    <>
      {isUserSignedUp && 
        <div className="flex justify-center">
          <div className="alert alert-success absolute top-5 max-w-[40%] h-[160px] flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>You've been Signed Up</span>
          </div>
        </div>
      }
      <main className="bg-[url('/register-grad.png')] bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center  w-[100vw min-h-screen sm:[80px]">
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <div className=" max-w-[95%] mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-[#131313] rounded-2xl bg-opacity-50 border-white border-[0.5px]">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">

          <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <p className=" text-gray-500 text-xs ">
              All usernames must be between 6 and 12 characters long and cannot contain spaces or special characters.
            </p>
            <p className=" text-gray-500 text-xs">
              All passwords must be between 6 and 12 characters long and contain at least one uppercase letter, one lowercase letter and one number.
            </p>

            {error && error.split('\n').map((err, i) => <p key={i} className="text-red-500">{err}</p>)}

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have an account?
                <br />
                <Link className="underline" href="/SignIn">
                  Sign In
                </Link>
              </p>

              <button
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
