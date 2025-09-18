import { useNavigate } from "react-router-dom";
import SmallCards from "../1.Home/subHome/SmallCards";

const Library = ({ edit, handlemore, publisherBooks }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* ==================== LIBRARY SECTION ======================= */}

      <div
        style={{
          opacity: edit ? 0 : 1,
          height: edit ? "0px" : "auto",
          transform: edit ? "translateX(-1200px)" : "translateX(0px)",
          transition:
            edit === true
              ? "transform 500ms linear 200ms, opacity 300ms ease 0ms"
              : "none",
        }}
        className="container w-full h-full mx-auto mt-[60px] mb-[20px]"
      >
        <h1
          className="text-[25px] max-[393px]:text-[22px] font-[600] capitalize"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Your Libaray
        </h1>

        <div
          style={{ fontFamily: "Archivo, sans-serif" }}
          className=" mt-[20px]"
        >
          {publisherBooks === null ? (
            <div className="w-full h-[300px] flex flex-col items-center justify-center ">
              <p className="font-[500] ">
                No books yet, but endless possibilities ahead!
              </p>
              <button
                onClick={() => navigate("/user/publish")}
                className="px-[15px] mt-[10px] py-[6px] cursor-pointer active:scale-95 active:brightness-70 rounded-sm bg-blue-500 text-white font-[500]"
              >
                Publish
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-wrap gap-x-[10px] gap-y-[20px] justify-evenly ">
              {publisherBooks.map((item, index) => (
                <SmallCards
                  item={item}
                  index={index}
                  key={index}
                  handlemore={handlemore}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Library;
