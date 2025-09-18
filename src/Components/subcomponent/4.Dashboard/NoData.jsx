import { useNavigate } from "react-router-dom";

const NoData = ({ loading, loadingdots, currentdot, empty }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* ========================== LOADING SECTION ============================== */}

      <div
        className="w-[90%] mx-auto h-[500px] flex justify-center items-center  "
        style={{
          height: loading ? "500px" : "0px",
          opacity: loading ? 1 : 0,
          transition: "height 500ms ease, opacity 500ms ease",
        }}
      >
        <p className="text-[17px] font-[600]">Loading</p>
        <div className="flex gap-x-[1px] mt-[4px]">
          {loadingdots.map((_, i) => (
            <div
              key={i}
              className="w-[3px] h-[3px] bg-black rounded-[50%]"
              style={{
                background: currentdot >= i ? "black" : "white",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* =================================== CREATE ONE SECTION =============================== */}

      <div
        style={{
          height: loading ? "0px" : "500px",
          opacity: loading ? 0 : 1,
          transition: "height 500ms ease, opacity 500ms ease",
        }}
        className="w-[50%] mx-auto h-[500px] flex items-center justify-center flex-col"
      >
        <img
          src={empty}
          alt="Empty Folder"
          className="w-[150px] h-[150px] scale-150"
        />
        <p className="text-[17px] font-[600]">No Books Created</p>
        <button
          className="px-[10px] py-[5px] rounded-lg bg-blue-500 cursor-pointer text-white mt-[10px]"
          onClick={() => navigate("/user/publish")}
        >
          Create One
        </button>
      </div>
    </>
  );
};

export default NoData;
