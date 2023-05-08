import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useStateContext } from "../../Contexts/ContextProvider";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import { getRandomAvatar } from "../../Data/AvataRandom";
function Register(props) {
  const [loading,setLoading] = useState(false)
  const { setIsShowSignInBox, setCurrenUser } = useStateContext();
  const handlRegister = async (value) => {
    try {
      setLoading(true)
      const user = (
        await createUserWithEmailAndPassword(auth, value.email, value.password)
      ).user;
      await setDoc(doc(db, "user", user.uid), {
        fullname: value.fullName,
        email: user.email,
        photoURL: getRandomAvatar(),
        recent: [],
        watchlist: [],
      });
      setIsShowSignInBox(true);
      toast.success("Creat account succsess");

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.warn("Email have been already! Please try an other email");
      }
    } finally{setLoading(false)}
  };

  return (
    <div className="w-[500px]">
      <h3 className="text-fontactive text-4xl font-bold  mb-16  text-center ">
        Register
      </h3>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(6, "Password is too short - should be 6 chars minimum."),
        })}
        onSubmit={handlRegister}
      >
        <Form>
          <div className="w-full">
            <div className="relative mb-16 ">
              <Field
                name="fullName"
                type="text"
                id="fullName"
                placeholder="Enter your name"
                className=" bg-secondary-dark-bg px-5 py-4 w-full rounded-full outline-none peer text-fontactive"
              />
              <label
                htmlFor="fullName"
                className="absolute text-fontnormal w-full bg-main-dark-bg px-2 -top-5 left-0 h-8  "
              >
                {" "}
                Full Name
              </label>
              <p className="absolute top-[95%] pt-2 left-[3%] text-link">
                <ErrorMessage name="fullName" />
              </p>
            </div>
            <div className="relative mb-16">
              <Field
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                className=" bg-secondary-dark-bg px-5 py-4 w-full rounded-full outline-none peer text-fontactive  "
              />
              <label
                htmlFor="email"
                className="absolute text-fontnormal w-full bg-main-dark-bg px-2 -top-5 left-0 h-8  "
              >
                {" "}
                Email Address
              </label>
              <p className="absolute top-[95%] pt-2 left-[3%] text-link">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="relative mb-16">
              <Field
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                className=" bg-secondary-dark-bg px-5 py-4 w-full rounded-full outline-none peer text-fontactive"
              />
              <label
                htmlFor="password"
                className="absolute text-fontnormal w-full bg-main-dark-bg px-2 -top-5 left-0 h-8  "
              >
                {" "}
                Password
              </label>
              <p className="absolute top-[95%] pt-2 left-[3%] text-link">
                <ErrorMessage name="password" />
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="px-12 py-3 bg-link rounded-full text-lg text-white uppercase absolute left-1/2 -translate-x-1/2 hover:opacity-80 transition duration-300"
          >
            Register
          </button>
        </Form>
      </Formik>
      <p className="text-xl text-fontnormal flex gap-2 mt-36 justify-center">
        <span>Already have an account?</span>
        <button
          onClick={() => setIsShowSignInBox(true)}
          className="text-link underline"
        >
          Sign In
        </button>
      </p>
      {loading &&  <svg  className=" absolute bottom-24 left-56  w-20  h-14 text-fontactive    animate-spin-custom   " width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V5.25C11.25 5.66421 11.5858 6 12 6C12.4142 6 12.75 5.66421 12.75 5.25V2.75ZM12.75 19C12.75 18.5858 12.4142 18.25 12 18.25C11.5858 18.25 11.25 18.5858 11.25 19V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V19ZM19.0711 4.92901C19.364 5.2219 19.364 5.69678 19.0711 5.98967L17.3033 7.75744C17.0104 8.05033 16.5356 8.05033 16.2427 7.75744C15.9498 7.46455 15.9498 6.98967 16.2427 6.69678L18.0104 4.92901C18.3033 4.63612 18.7782 4.63612 19.0711 4.92901ZM7.58062 17.4802C7.87352 17.1873 7.87352 16.7124 7.58062 16.4195C7.28773 16.1266 6.81286 16.1266 6.51996 16.4195L4.92897 18.0105C4.63608 18.3034 4.63608 18.7782 4.92897 19.0711C5.22187 19.364 5.69674 19.364 5.98963 19.0711L7.58062 17.4802ZM22 12C22 12.4142 21.6642 12.75 21.25 12.75H18.75C18.3358 12.75 18 12.4142 18 12C18 11.5858 18.3358 11.25 18.75 11.25H21.25C21.6642 11.25 22 11.5858 22 12ZM5 12.75C5.41421 12.75 5.75 12.4142 5.75 12C5.75 11.5858 5.41421 11.25 5 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H5ZM19.0712 19.0711C18.7783 19.364 18.3035 19.364 18.0106 19.0711L16.2428 17.3033C15.9499 17.0104 15.9499 16.5356 16.2428 16.2427C16.5357 15.9498 17.0106 15.9498 17.3035 16.2427L19.0712 18.0104C19.3641 18.3033 19.3641 18.7782 19.0712 19.0711ZM6.51985 7.58062C6.81274 7.87352 7.28762 7.87352 7.58051 7.58062C7.8734 7.28773 7.8734 6.81286 7.58051 6.51996L5.98952 4.92897C5.69663 4.63608 5.22175 4.63608 4.92886 4.92897C4.63597 5.22187 4.63597 5.69674 4.92886 5.98963L6.51985 7.58062Z" 
            fill="#F9F9F9"/>
        </svg>
}
    </div>
  );
}

export default Register;
