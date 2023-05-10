import { sendEmailVerification } from "firebase/auth";
import { FunctionComponent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../../firebase/firebase-config";
import { useStateContext } from "../../Contexts/ContextProvider";
import Drop from "../../Page/Personal/Drop";



const EmailVerification = ({
  setIsUpdating,
}) => {

  const { currenUser: currentUser } = useStateContext();
  const firebaseUser = auth.currentUser;
  const [isShowSentButton, setIsShowSentButton] = useState(true);
  const [isVerificationEmailSent, setIsVerificationEmailSent] = useState(false);

  const sendVerificationEmail = () => {
    setIsUpdating(true);
    sendEmailVerification(firebaseUser)
      .then(() => {
        setIsVerificationEmailSent(true);
        setIsShowSentButton(false);
      })
      .catch((error) =>
        toast.error((error.code), {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .finally(() => setIsUpdating(false));
  };
  return (
    <>
      <ToastContainer />

      {isVerificationEmailSent && (
        <>
          <div className="px-5 py-3 rounded-md z-10 bg-dark-lighten-2 md:w-[500px] fixed top-[35%] md:left-[35%] left-[5%] right-[5%] min-h-[150px]">
            <p className="text-white text-lg text-center">
              We've sent a email of verification to your email,
              <span className="text-primary"> {currentUser?.email}</span>. Check
              it out!
            </p>
            <button
              onClick={() => setIsVerificationEmailSent(false)}
              className="px-6 py-1 bg-dark-lighten rounded-full mt-7 tw-absolute-center-horizontal hover:brightness-75 transition duration-300"
            >
              OK
            </button>
          </div>
          <Drop
            onCloseBlackBackdrop={() => setIsVerificationEmailSent(false)}
          />
        </>
      )}

      <div className="mt-10 flex justify-between max-w-[600px]">
        <p className="text-white text-lg">
          {!currentUser?.emailVerified
            ? "Your email is not verified yet."
            : "Your email is verified."}
        </p>
        {isShowSentButton && !currentUser?.emailVerified && (
          <button
            onClick={sendVerificationEmail}
            className="text-primary underline text-lg"
          >
            Send me verification email
          </button>
        )}
        {!isShowSentButton && !currentUser?.emailVerified && (
          <p className="text-lg">Waiting for verify</p>
        )}
      </div>
    </>
  );
};

export default EmailVerification;
