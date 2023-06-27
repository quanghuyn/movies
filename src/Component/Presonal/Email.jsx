
import { AiOutlineEdit } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { useStateContext } from "../../Contexts/ContextProvider";


const Email = ({
  setIsShowPromptReAuthFor,
  isUpdatingEmail,
  setIsUpdatingEmail,
  emailValueRef,
}) => {
  const { currenUser: currentUser } = useStateContext();

  return (
    <>
      <ToastContainer />
      <div>
        <p className="text-fontactive text-lg">Email</p>

        {!isUpdatingEmail && (
          <div className="flex justify-between mt-1">
            <p>{currentUser?.email}</p>
            <button
              className="hover:text-fontactive transition duration-300"
              onClick={() => setIsUpdatingEmail(true)}
            >
              <AiOutlineEdit size={25} />
            </button>
          </div>
        )}

        {isUpdatingEmail && (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!emailValueRef.current.value.trim().length) {
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
                setIsShowPromptReAuthFor("email");
              }}
              className="flex justify-between gap-48 mt-1 "
            >
              <input
                type="email"
                ref={emailValueRef}
                defaultValue={currentUser?.email || ""}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsUpdatingEmail(false);
                }}
                className="outline-none bg-dark-lighten rounded-md py-1 px-2 w-full required:text-fontnormal  "
              />
              <button className="hover:text-fontactive transition duration-300 ">
                <BiSend size={25} />
              </button>
            </form>
            <p className="text-sm mt-1 text-fontactive">Press Esc to cancel</p>
          </>
        )}
      </div>
    </>
  );
};

export default Email;
