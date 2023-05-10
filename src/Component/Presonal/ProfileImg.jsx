import axios from "axios";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import {  useEffect, useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { db } from "../../firebase/firebase-config";
import { useStateContext } from "../../Contexts/ContextProvider";
import  url from '../../Data/avata.jpg'


const ProfileImg = () => {

  const [isUpdatingImg, setIsUpdatingImg] = useState(false);
  const [quote, setQuote] = useState("");
  const { currenUser } = useStateContext();
  const {img,setimg} = useStateContext()
  useEffect(() => {
    if (!currenUser) return;
    const unsub = onSnapshot(
        doc(db, "user", currenUser?.uid),
        (doc) => {
          setimg(doc.data()?.photoURL);
        })
    axios
      .get("https://api.quotable.io/random")
      .then((res) => setQuote(res.data.content));
  }, [currenUser]);
  const changeProfileImage = async (e) => {
    try {
      setIsUpdatingImg(true);
      if (!currenUser) return;

      const form = new FormData();
      form.append("image", e.target.files[0]);
      const res = await axios({
        method: "post",
        url: `https://api.imgbb.com/1/upload?key=d0ef0935a497a41b9c2cc8ecd7e8ec0a`,
        data: form,
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      updateDoc(doc(db, "user", currenUser.uid), {
        photoURL: res.data.data.display_url,
      }).finally(() => setIsUpdatingImg(false));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="shrink-0 md:max-w-[500px] w-full px-4">
      <div className="flex flex-col items-center mt-4 ">
        <div className="w-[250px] h-[250px] relative">
          <LazyLoadImage
            src={img}
            // src="https://i.ibb.co/x76S6FY/1.jpg"
            alt="profile picture"
            className="w-[250px] h-[250px] rounded-full object-cover"
          />
          {isUpdatingImg && (
            <div className="border-[4px] border-primary border-t-transparent h-12 w-12 rounded-full animate-spin absolute top-[40%] left-[40%] z-10"></div>
          )}
        </div>

        <label
          htmlFor="upload-img"
          className="absolute right-[170px] top-[400px]  w-48 px-5 py-3 mt-6 rounded-lg bg-dark-lighten flex items-center gap-3 hover:brightness-75 transition duration-300 cursor-pointer"
        >
          <HiOutlineUpload size={25} className="text-fontactive" />
          <p className="text-fontactive text-center">Upload  photo</p>
        </label>
        <input
          id="upload-img"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={changeProfileImage}
        />

        <div className="text-center md:mt-16 pt-14">
          <p className="text-fontnormal text-xl ">{currenUser?.displayName}</p>
          {quote && <p className="text-lg text-fontnormal mt-2">{quote}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
