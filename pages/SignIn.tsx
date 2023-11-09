import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from "../firebase/clientApp";
import { signIn } from "../firebase/firebaseUtils"; // Import the signIn function
import Link from "next/link";
import { setEmitFlags } from "typescript";

const SignIn = () => {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  const handleSignIn = () => {
    signIn(emailOrUser, password)
      .then(() => {
        setIsUserSignedIn(true)
        setTimeout(() => router.push("/Dashboard/TradeLog"), 1000);
      })
      .catch((error) => {
        console.error(`Error code: ${error.code}, Error Message: ${error.message}`);
      });
  };

  return (
    <>

      {isUserSignedIn && 
        <div className="flex justify-center">
          <div className="alert alert-success absolute top-5 max-w-[40%] h-[160px] flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>You've been Signed In</span>
          </div>
        </div>
      }
      
      <main className="bg-[url('/register-grad.png')] bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center  w-[100vw min-h-screen sm:[80px]]">
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <div className=" max-w-[95%] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-[#131313] rounded-2xl bg-opacity-50 border-white border-[0.5px]">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back.</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  onChange={(e) => setEmailOrUser(e.target.value)}
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
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                New User?
                <br />
                <Link className="underline" href="/SignUp">
                  Sign Up
                </Link>
              </p>

              <button
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                onClick={handleSignIn}
                
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
