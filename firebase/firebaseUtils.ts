// firebaseUtils.ts

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore';
import app from './clientApp';

const auth = getAuth(app);
const db = getFirestore(app);

// Check if the username is already taken in Firestore
const isUsernameTaken = async (username: string): Promise<boolean> => {
  const usernameRef = doc(db, 'usernames', username);
  const docSnap = await getDoc(usernameRef);
  return docSnap.exists();
};

const isEmailTaken = async (email: string): Promise<boolean> => {
  const emailRef = doc(db, 'emails', email);
  const docSnap = await getDoc(emailRef);
  return docSnap.exists();

}

// Retrieve email associated with a username
const getEmailByUsername = async (username: string): Promise<string | null> => {
  const usernameRef = doc(db, 'usernames', username);
  const docSnap = await getDoc(usernameRef);
  return docSnap.exists() ? docSnap.data().email : null;
};

// Function to sign up a new user with email, password, and username
export const signUp = async (
  email: string,
  password: string,
  username: string,
): Promise<UserCredential> => {
  if (await isUsernameTaken(username)) {
    throw new Error('This username is already taken.');
  } else if (await isEmailTaken(email)) {
    throw new Error('This email is already taken.');
  }

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const { user } = userCredential;

  await updateProfile(user, { displayName: username });

  // Also save the username and email in Firestore for lookup during sign-in
  await setDoc(doc(db, 'usernames', username), { uid: user.uid, email });

  return userCredential;
};

// Function to sign in a user with email or username and password
export const signIn = async (
  usernameOrEmail: string,
  password: string,
): Promise<UserCredential> => {
  let email = usernameOrEmail;

  // If usernameOrEmail doesn't include an '@', treat it as a username
  if (!usernameOrEmail.includes('@')) {
    const retrievedEmail = await getEmailByUsername(usernameOrEmail);
    if (!retrievedEmail) {
      throw new Error('Username does not exist.');
    }
    email = retrievedEmail;
  }

  return signInWithEmailAndPassword(auth, email, password);
};

// Function to sign out a user
export const signOut = async (): Promise<void> => {
  return auth.signOut();
};
