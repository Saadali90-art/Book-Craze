import Camera from "lucide-react/dist/esm/icons/camera";
import user from "../../../assets/MyAccount/user.svg";
import CoverImage from "../../../assets/MyAccount/CoverImage.avif";

const Images = ({
  accountInfo,
  coverImage,

  edit,
  handleCover,
  handleProfile,
  profileImage,
}) => {
  let profileImageUrl = `http://127.0.0.1:8000${accountInfo.profileImage}`;
  let coverImageUrl = `http://127.0.0.1:8000${accountInfo.coverImage}`;

  return (
    <>
      {/* ====================== COVER PHOTO =========================== */}

      <div className=" w-[100%]  h-[300px] relative ">
        {accountInfo.coverImage === null && coverImage === null ? (
          <img
            loading="eager"
            className="w-full h-full brightness-90"
            src={CoverImage}
          />
        ) : coverImage !== null ? (
          <img
            loading="eager"
            className="w-full h-full brightness-90"
            src={coverImage}
          />
        ) : (
          <img
            loading="eager"
            className="w-full h-full brightness-90"
            src={coverImageUrl}
          />
        )}

        {/* ==================== IMAGE CHANGE BUTTON ======================== */}

        <label
          style={{
            opacity: edit ? 1 : 0,
            transition: "opacity 300ms linear",
            pointerEvents: edit ? "auto" : "none",
          }}
          className=" absolute cursor-pointer z-[10] bottom-[10px] right-[10px]  "
        >
          <div className="group w-[40px] h-[38px] overflow-hidden hover:w-[200px] transition-width ease duration-700 flex gap-x-[10px] bg-blue-500 px-[10px] py-[6px] rounded-sm">
            <Camera size={25} color="white" />
            <p className="text-white hidden group-hover:block whitespace-nowrap font-[500]">
              Upload Cover Photo
            </p>
          </div>

          <input type="file" name="coverImage" hidden onChange={handleCover} />
        </label>
      </div>
      {/* ============== PROFILE IMAGE =========== */}

      <div
        style={{
          top: edit ? "50%" : "41%",
          transition: "top 400ms linear 300ms",
        }}
        className="w-[200px] max-[491px]:w-[180px] max-[393px]:w-[150px] h-[200px]  max-[491px]:h-[180px]  max-[393px]:h-[150px] max-[453px]:mt-[15px] max-[453px]:left-[5px] brightness-100 absolute z-10 left-[20px] border-[6px] border-white bg-gray-400 rounded-[50%]"
      >
        {accountInfo.profileImage === null && profileImage === null ? (
          <img
            loading="eager"
            src={user}
            className="w-full h-full rounded-[50%]"
          />
        ) : profileImage !== null ? (
          <img
            loading="eager"
            src={profileImage}
            className="w-full h-full rounded-[50%]"
          />
        ) : (
          <img
            loading="eager"
            src={profileImageUrl}
            className="w-full h-full rounded-[50%]"
          />
        )}

        {/* ==================== IMAGE CHANGE BUTTON ======================== */}

        <label
          style={{
            opacity: edit ? 1 : 0,
            transition: "opacity 300ms linear",
            pointerEvents: edit ? "auto" : "none",
          }}
          className="absolute cursor-pointer rounded-[50%] bg-blue-500 p-[10px] bottom-[5px] right-[5px]"
        >
          <input
            type="file"
            name="profileImage"
            hidden
            onChange={handleProfile}
          />
          <Camera size={25} color="white" />
        </label>
      </div>
    </>
  );
};

export default Images;
