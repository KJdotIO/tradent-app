import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from "../firebase/clientApp";
import { signIn } from "../firebase/firebaseUtils"; // Import the signIn function
import Link from "next/link";




const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  // useEffect(() => {
  //   // Check if user is already signed in
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in, redirect to home page
  //       router.push('/');
  //     }
  //   });

  //   // Clean up the listener when the component unmounts
  //   return () => unsubscribe();
  // }, []);
  
  
const auth = getAuth(app);

const handleSignIn = () => {
  signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/");
        // ...
        alert('Sign in')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode}, Error Message: ${errorMessage}`);
    }
    );

}


  return (
    <>
      <Header />
      <main className="bg-[url('/register-grad.png')] bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center  w-[100vw min-h-screen sm:[80px]">
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <div className=" max-w-[95%] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-[#131313] rounded-2xl bg-opacity-50 border-white border-[0.5px]">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome Back.
            </h1>

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
                  onChange={(e) => setEmail(e.target.value)}
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
                <Link className="underline" href="">
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
