import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  UserCredential,
} from "firebase/auth";
import app from "./clientApp";

const auth: Auth = getAuth(app);

// Function for signing in a user with email and password
export const signIn = (
  email: string,
  password: string,
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function for signing up a new user with email and password
export const signUp = (
  email: string,
  password: string,
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};
