import React, { useEffect, useRef, useState } from "react";
import TopBooks from "../../Requests/Home Requests/TopBooks.js";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [weeklyTop, setWeeklyTop] = useState([]);
  const [current, setcurrent] = useState(0);
  const reference = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  let arrButton = Array.from({ length: weeklyTop.length });
  const navigate = useNavigate();

  // ========================== GETTING THE WEEKLY TOP DATA ===================================

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await TopBooks(link);
      setWeeklyTop(data);
    };

    fetchData("topbooks/weeklytop");
  }, []);

  // ======================== GETTING THE WIDTH OF THE DIV ===============================

  useEffect(() => {
    const updateWidth = () => {
      if (reference.current) {
        setSlideWidth(reference.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ======================= CHANGING THE CURRENT AFTER TIME ============================

  useEffect(() => {
    let time = setTimeout(() => {
      if (current === weeklyTop.length - 1) {
        setcurrent(0);
      } else {
        setcurrent(current + 1);
      }
    }, 2000);
    return () => clearTimeout(time);
  });

  return (
    <div className="container w-[55%] max-[1943]:w-[50%] max-[1832px]:w-[50%] max-[1657px]:w-[40%] max-[1335px]:w-[50%] max-[1050px]:w-[45%] max-[823px]:w-[50%]  max-[776px]:w-[100%]">
      <h1
        style={{ fontFamily: "Archivo, serif" }}
        className="text-[24px] py-[10px] pb-[13px] font-[600] text-[#1c1c1c]"
      >
        Weekly Novels
      </h1>

      {/* ======================= CAROUSEL ============================= */}

      <div className=" ">
        <div
          ref={reference}
          className=" w-[800px] max-[2087px]:w-[750px] max-[1943px]:w-[700px] max-[1832px]:w-[580px] max-[1657px]:w-[420px] max-[1050px]:w-[350px] max-[776px]:w-[600px] max-[666px]:w-[500px] max-[565px]:w-[400px] max-[446px]:w-[320px] max-[357px]:w-[300px] max-[332px]:w-[280px]  max-[776px]:mx-auto h-[260px] flex overflow-hidden rounded-lg  relative"
          style={{ background: weeklyTop.length === 0 ? "white" : "black" }}
        >
          {weeklyTop.map((item, index) => (
            <div
              onClick={() =>
                navigate("/user/dashboard/more", {
                  state: item,
                })
              }
              key={index}
              style={{
                transform: `translateX(-${current * slideWidth}px)`,
                opacity: current === index ? 1 : 0,
                cursor: "pointer",
                transition: "transform 5ms linear ,opacity 400ms linear",
              }}
              className="min-w-full "
            >
              <img
                src={`http://127.0.0.1:8000${item.bookImage}`}
                className="min-w-full h-full absolute -z-10 blur-2xl backdrop-brightness-0"
                alt=""
              />

              {/* ======================== INNER INFO =============================== */}

              <div className="h-[240px] overflow-hidden flex px-[15px] py-[15px] pt-[20px]">
                <div className="w-[30%] max-[1663px]:w-[35%] max-[446px]:w-[120px] h-[210px]">
                  <img
                    src={`http://127.0.0.1:8000${item.bookImage}`}
                    alt=""
                    className="w-full max-[446px]:w-[120px] h-[210px] rounded-lg"
                  />
                </div>

                <div className="w-[70%] max-[1663px]:w-[65%] pl-[10px] h-[210px] overflow-hidden">
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      fontFamily: "Archivo, serif",
                    }}
                    className="text-white text-[18px] font-[500] pt-[10px] pb-[5px] max-[446px]:pb-[0px]"
                  >
                    {item.title}
                  </p>

                  <div className="flex items-center gap-x-[30px] py-[3px] ">
                    <p className="text-white text-[14px] py-[2px]">
                      Price : ${item.price}
                    </p>
                    <p className="text-white text-[14px] py-[2px] max-[446px]:hidden">
                      {item.category}
                    </p>
                  </div>

                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 7,
                      fontFamily: "Archivo, serif",
                    }}
                    className="text-white text-[13px] py-[2px] pb-[3px] font-[400] text-justify max-[446px]:text-left"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* ====================== DOTS ============================ */}

          <div className="flex gap-x-[8px]  absolute top-[90%] left-[40%]">
            {arrButton.map((_, index) => (
              <div className="" key={index}>
                <button
                  style={{
                    backgroundColor: current === index ? "white" : "#5b5b5b",
                  }}
                  onClick={() => setcurrent(index)}
                  className="w-[10px] h-[10px] cursor-pointer bg-gray-500 rounded-[50%]"
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
