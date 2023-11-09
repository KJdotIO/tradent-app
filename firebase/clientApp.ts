import "firebase/auth";
import "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(clientCredentials) : getApp();
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export default app;
export { db };
