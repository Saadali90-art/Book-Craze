import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Calendar from "lucide-react/dist/esm/icons/calendar";
import write from "../../../assets/MyAccount/write.svg";

const UserInfo = ({ edit, setEdit, accountInfo }) => {
  return (
    <>
      {/* ================= USER ID  */}

      <div
        style={{
          opacity: edit ? 0 : 1,
          transform: edit ? "translateX(-1200px)" : "translateX(0px)",
          height: edit ? "0px" : "50px",
          transition:
            edit === true
              ? "transform 500ms linear 200ms, opacity 300ms ease 0ms"
              : "none",
        }}
        className="w-full h-[50px] mt-[120px] max-[393px]:mt-[100px] flex justify-between gap-x-[10px] items-center"
      >
        <h1
          className="w-[300px] truncate text-[25px] max-[393px]:text-[22px] max-[393px]:w-[250px] font-[600] capitalize"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {accountInfo.name}
        </h1>

        <button
          onClick={() => setEdit(true)}
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="cursor-pointer border-[2px] border-blue-500 text-blue-500 px-[14px] font-[600] py-[5px] rounded-[30px] max-[531px]:hidden"
        >
          Edit Profile
        </button>

        <button
          onClick={() => setEdit(true)}
          className="cursor-pointer hidden max-[531px]:block"
        >
          <img src={write} className="w-[25px] h-[25px]" />
        </button>
      </div>

      {/* ================= USER INFORMATION ============================== */}

      <div
        style={{
          opacity: edit ? 0 : 1,
          height: edit ? "0px" : "30px",
          transform: edit ? "translateX(-1200px)" : "translateX(0px)",
          transition:
            edit === true
              ? "transform 500ms linear 200ms, opacity 300ms ease 0ms"
              : "none",
          fontFamily: "Archivo, sans-serif",
        }}
        className="w-full h-[30px] flex items-center gap-x-[20px] text-gray-500 "
      >
        <p className="flex items-center gap-x-[8px] text-[17px] max-[393px]:text-[15px] whitespace-nowrap">
          <Calendar className="w-[19px] h-[18px]" />{" "}
          {accountInfo?.date?.slice(0, 10)} Joined
        </p>

        <p className="flex items-center gap-x-[8px] text-[17px] max-[393px]:text-[15px] capitalize">
          <MapPin className="w-[19px] h-[18px]" /> {accountInfo.location}
        </p>
      </div>
    </>
  );
};

export default UserInfo;
