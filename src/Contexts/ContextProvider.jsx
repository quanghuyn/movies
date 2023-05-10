import { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { useEffect } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";


const SetContext = createContext();

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [img,setimg] = useState()
  const [currenUser, setCurrenUser] = useState("");
  const [key, setkey] = useState("");
  const [openTrailer, setOpenTrailer] = useState(false);
  const [mode, setMode] = useState("dark");
  const [isShowSign, setIsShowSignInBox] = useState(true);
  const toggleDarklMode = () => {
    setMode(() => {
      return mode === "light" ? "dark" : "light";
    });
  };
  const hanldClose = () => {
    setOpenTrailer(!openTrailer);
  };

  // firebase
  const signOutfn = () => {
    signOut(auth);
    // window.location.reload(false)
  };

  const ggSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      let isStored = false;
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        if (doc.id === user.uid) {
          isStored = true;
        }
      });
      if (isStored) return;
      setDoc(doc(db, "user", user.uid), {
        fullname: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        recent: [],
        watchlist: [],
      });
    });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrenUser(user);
    });
    unsubscribe();
  };

  const fbSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      let isStored = false;
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        if (doc.id === user.uid) {
          isStored = true;
        }
      });
      if (isStored) return;
      setDoc(doc(db, "user", user.uid), {
        fullname: user.displayName,
        email: user.email,
        photoURL: "https://i.ibb.co/zrXfKsJ/catface-7.jpg",
        recent: [],
        watchlist: [],
      });
    });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrenUser(user);
    });
    unsubscribe();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setCurrenUser(currenUser);
    });
    // return () => {
    //   unsubscribe();
    // };
    // const unsubscribe = onAuthStateChanged(auth,  (user) => {
    //   setCurrenUser(user);
    // })
    // unsubscribe()
  }, []);

  const value = {
    hanldClose,
    openTrailer,
    toggleDarklMode,
    mode,
    key,
    setkey,
    ggSignIn,
    currenUser,
    signOutfn,
    fbSignIn,
    isShowSign,
    setIsShowSignInBox,
    img,setimg,open, setOpen
  };
  return <SetContext.Provider value={value}>{children}</SetContext.Provider>;
};

export const useStateContext = () => useContext(SetContext);
