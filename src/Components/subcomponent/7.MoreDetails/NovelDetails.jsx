import { useEffect, useState } from "react";
// import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
// import { FaEye } from "react-icons/fa";
// import { TbCategoryPlus } from "react-icons/tb";
import Mars from "lucide-react/dist/esm/icons/mars";
import Venus from "lucide-react/dist/esm/icons/venus";
import Grip from "lucide-react/dist/esm/icons/grip";
import Eye from "lucide-react/dist/esm/icons/eye";

import { useNavigate } from "react-router-dom";

const NovelDetails = ({ moreInfo }) => {
  const navigate = useNavigate();
  const [views, setViews] = useState("");

  const handleViews = () => {
    if (moreInfo?.views < 1000) {
      setViews(moreInfo?.views);
    } else if (moreInfo?.views < 10000) {
      setViews(moreInfo?.views.toString().slice(0, 1) + "k");
    } else if (moreInfo?.views < 100000) {
      setViews(moreInfo?.views.toString().slice(0, 2) + "k");
    } else if (moreInfo?.views < 1000000) {
      setViews(moreInfo?.views.toString().slice(0, 3) + "k");
    } else if (moreInfo?.views < 10000000) {
      setViews(moreInfo?.views.toString().slice(0, 1) + "M");
    } else if (moreInfo?.views < 100000000) {
      setViews(moreInfo?.views.toString().slice(0, 2) + "M");
    } else {
      setViews(moreInfo?.views.toString().slice(0, 3) + "M");
    }
  };

  useEffect(() => {
    handleViews();
  }, [moreInfo]);

  return (
    <>
      {/* ======================= NOVEL INFORAMTION ============================ */}

      {moreInfo !== null ? (
        <div
          className="container w-[70%] max-[1170px]:w-[80%] max-[924px]:w-[90%] min-h-[380px] relative mx-auto mt-[100px] max-[813px]:mt-[70px] flex max-[496px]:flex-col max-[2108px]:gap-x-[20px]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {/* ==================== IMAGE ================== */}

          <div className=" container w-[25%] max-[1317px]:w-[30%] max-[780px]:w-[35%] max-[743px]:w-[40%] h-[350px] max-[570px]:h-[310px] max-[496px]:w-full max-[496px]:flex max-[496px]:justify-center  ">
            <div className="max-w-[320px] h-full relative">
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className=" max-[927px]:text-sm max-[535px]:text-[12px] uppercase absolute text-white font-[500] rounded-tr-lg  top-0 right-0 px-[10px] max-[535px]:px-[7px] max-[535px]:py-[4px] py-[6px] rounded-bl-2xl bg-blue-500"
              >
                Original
              </p>
              <img
                loading="eager"
                src={`http://127.0.0.1:8000${moreInfo.bookImage}`}
                alt="Book Cover Image"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* =================== MORE DETAILS ============================ */}
          <div className="container w-[75%] max-[1317px]:w-[70%] max-[780px]:w-[65%] max-[743px]:w-[60%] max-[496px]:w-full max-[496px]:flex max-[496px]:flex-col max-[496px]:justify-center h-[350px] max-[570px]:h-[310px] max-[496px]:h-[380px] relative max-[496px]:mt-[20px]">
            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                fontFamily: "Archivo, serif",
              }}
              className="w-full text-[25px] max-[743px]:text-[20px] font-[600] text-black capitalize"
            >
              {moreInfo.title}
            </p>

            <div className="w-[30%] max-[1558px]:w-[50%] max-[971px]:w-[70%] max-[495px]:w-[80%] max-[355px]:w-[95%] max-[742px]:text-[15px] flex justify-between my-[10px] ">
              <span className="capitalize flex items-center gap-x-[5px] font-[500] truncate overflow-hidden">
                <Grip className="w-[18px] h-[18px]" />
                <p>{moreInfo.category}</p>
              </span>

              <span className="capitalize flex gap-x-[5px] items-center font-[500] truncate">
                {moreInfo.gender ? (
                  <Mars className="w-[18px] h-[18px]" />
                ) : (
                  <Venus className="w-[18px] h-[18px]" />
                )}
                <p>{moreInfo.gender}</p>
              </span>

              <span className=" flex items-center gap-x-[5px] font-[500]">
                <Eye className="w-[18px] h-[18px]" />
                <p>{views}</p>
              </span>
            </div>

            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 7,
              }}
              className="text-black/80 text-[15px] my-[5px]  w-full text-justify"
            >
              {moreInfo.description?.slice(0, 1).toUpperCase() +
                moreInfo.description?.slice(1)}
            </p>

            {/* ==================== DOWNLOAD BUTTONS ========================= */}

            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-[15px] flex flex-row gap-x-[10px] max-[496px]:mt-[20px]"
            >
              <button
                onClick={() => navigate("/user/cart", { state: moreInfo })}
                className="absolute bottom-0 bg-blue-500 px-[9px] py-[7px] font-[500] rounded-lg text-white hover:bg-white hover:text-black border-transparent border-[1px] hover:border-black tranistion-all duration-500 ease hover:font-[500] cursor-pointer "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          Loading...
        </div>
      )}
    </>
  );
};

export default NovelDetails;
