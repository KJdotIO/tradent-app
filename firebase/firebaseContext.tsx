import { ReactNode, createContext, useContext, useEffect, useState, useMemo } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import app from "../firebase/clientApp";

const auth = getAuth(app);

interface FirebaseContextValue {
  currentUser: User | null;
  auth: typeof auth;
}

const FirebaseContext = createContext<FirebaseContextValue>({
  currentUser: null, // set default value for currentUser
  auth, // default value for auth
});

export function useFirebase(): FirebaseContextValue {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
}

interface FirebaseProviderProps {
  children: ReactNode;
}

export function FirebaseProvider({ children }: FirebaseProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      setCurrentUser(user);
    }, (error) => {
      console.error(error);
      // Handle the error appropriately
    });

    return unsubscribe;
  }, []);

  const value = useMemo(() => ({
    currentUser,
    auth,
  }), [currentUser]);

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
