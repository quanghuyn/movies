import React, { useRef, useState } from "react";
import { useStateContext } from "../../Contexts/ContextProvider";
import {
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import ProfileImg from "../../Component/Presonal/ProfileImg";
import { toast } from "react-toastify";
import Email from "../../Component/Presonal/Email";
import Name from "../../Component/Presonal/Name";
import EmailVerification from "../../Component/Presonal/EmailVerification";
import Password from "../../Component/Presonal/Password";
import { auth } from "../../firebase/firebase-config";
import Drop from "./Drop";
import { motion } from "framer-motion";
import DeleteAccount from "../../Component/Presonal/DeleteAcount";

function Profile() {
  const { currenUser: currentUser } = useStateContext();
  const firebaseUser = auth.currentUser;

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const emailValueRef = useRef(null);

  const [isUpdatedPassword, setIsUpdatedPassword] = useState(false);
  const oldPasswordValueRef = useRef(null);
  const newPasswordValueRef = useRef(null);

  const [isUpdating, setIsUpdating] = useState(false);
  const [isShowPromptReAuthFor, setIsShowPromptReAuthFor] = useState();

  const reAuthentication = async () => {
    const oldPassword = oldPasswordValueRef.current.value;

    if (!oldPassword.trim().length) {
      // alert("You gotta type something");
      toast.error("You gotta type something", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const credential = EmailAuthProvider.credential(
      firebaseUser.email,
      oldPassword
    );

    reauthenticateWithCredential(firebaseUser, credential)
      .then(() => {
        if (type === "password") {
          changePassword();
        } else if (type === "email") {
          changeEmail();
        } else if (type === "delete") {
          deleteAccount();
        }

        setIsShowPromptReAuthFor(undefined);
      })
      .catch((error) => {
        console.log(error);
        // alert(convertErrorCodeToMessage(error.code));
        toast.error(convertErrorCodeToMessage(error.code), {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const changeEmail = () => {
    const emailValue = emailValueRef.current.value;

    setIsUpdating(true);
    // @ts-ignore
    updateEmail(firebaseUser, emailValue)
      .then(() => {
        setIsUpdatingEmail(false);
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error(convertErrorCodeToMessage(error.code), {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setIsUpdating(false));
  };

  const changePassword = () => {
    const newPassword = newPasswordValueRef.current.value;

    setIsUpdating(true);
    // @ts-ignore
    updatePassword(firebaseUser, newPassword)
      .then(() => {
        setIsUpdatedPassword(true);
        newPasswordValueRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        toast.error(convertErrorCodeToMessage(error.code), {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setIsUpdating(false));
  };

  const deleteAccount = () => {
    setIsUpdating(true);
    // @ts-ignore
    deleteUser(firebaseUser).finally(() => {
      setIsUpdating(false);
    });
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{
      // transition: { duration: 0.1 },
      opacity: 0.1,
    }} className="absolute lg:right-0 mt-10 lg:w-5/6 view ">

      {isShowPromptReAuthFor && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              reAuthentication(isShowPromptReAuthFor);
            }}
            className="z-10 fixed md:w-[500px] md:min-h-[200px] min-h-[230px] top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 left-[5%] right-[5%] bg-dark-lighten rounded-md px-3 py-2"
          >
            <p className="dark:text-fontactive font-medium mb-6 text-lg text-center">
              Type your password again to reauthenticate
            </p>
            <input
              ref={oldPasswordValueRef}
              type="password"
              autoFocus
              className="bg-dark-lighten-2 py-3 rounded-md px-5 dark:text-fontactive mb-4 w-full"
              placeholder="Type your password..."
            />
            <button className="px-6 py-2 bg-dark-lighten-2 rounded-xl hover:brightness-125 transition duration-300 dark:text-fontactive md:top-[130px] top-[160px] tw-absolute-center-horizontal">
              Continue
            </button>
          </form>
          <Drop
            onCloseBlackBackdrop={() => setIsShowPromptReAuthFor(undefined)}
          />
        </>
      )}

      {isUpdating && (
        <>
          <div className="border-[8px] border-primary border-t-transparent h-32 w-32 rounded-full animate-spin fixed top-[40%] left-[40%] z-10"></div>
          <Drop className="!z-[5]" />
        </>
      )}
      <div className="dark:bg-main-dark-bg -ml-1 min-h-screen   ">
        <div className="flex-grow pt-7 md:pl-10 px-3">
          <div className="pb-4 border-b dark:border-fontnormal ">
            <h1 className="text-[35px] dark:text-fontactive font-semibold uppercase">
              Account settings
            </h1>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 ">
            <div className="flex-grow">
              <p className="dark:text-fontactive mt-5 text-xl font-medium mb-3">
                User Information
              </p>
              <p className="text-fontnormal " >Here you can edit public information about yourself.</p>
              <p className="text-fontnormal " >
                If you signed in with Google or Facebook, you can't change your
                email and password.
              </p>

              <div className="mt-7 max-w-[600px] w-full flex flex-col gap-3 dark:text-fontactive ">
                <Email
                  className='text-fontnormal'
                  setIsShowPromptReAuthFor={setIsShowPromptReAuthFor}
                  isUpdatingEmail={isUpdatingEmail}
                  setIsUpdatingEmail={setIsUpdatingEmail}
                  emailValueRef={emailValueRef}
                />
                <Name setIsUpdating={setIsUpdating} />
              </div>
<div className="dark:text-fontactive ">

              <EmailVerification setIsUpdating={setIsUpdating} />

              <Password
                setIsShowPromptReAuthFor={setIsShowPromptReAuthFor}
                isUpdatedPassword={isUpdatedPassword}
                setIsUpdatedPassword={setIsUpdatedPassword}
                newPasswordValueRef={newPasswordValueRef}
              />

              <DeleteAccount
                setIsShowPromptReAuthFor={setIsShowPromptReAuthFor}
              />
</div>
            </div>
            <ProfileImg />
          </div>
        </div>
      </div>
    </motion.div>
  );
}


export default Profile;
