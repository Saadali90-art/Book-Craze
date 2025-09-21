import { useEffect, useState } from "react";
import TopBooks from "../../Requests/Home Requests/TopBooks.js";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [weeklyTop, setWeeklyTop] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  let arrButton = Array.from({ length: weeklyTop.length });

  // ========================== GETTING THE WEEKLY TOP DATA ===================================
  useEffect(() => {
    const fetchData = async (link) => {
      let data = await TopBooks(link);
      setWeeklyTop(data);
    };

    fetchData("topbooks/weeklytop");
  }, []);

  // ======================= CHANGING THE CURRENT AFTER TIME ============================
  useEffect(() => {
    if (weeklyTop.length === 0) return;

    let time = setTimeout(() => {
      if (current === weeklyTop.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);

    return () => clearTimeout(time);
  }, [current, weeklyTop]);

  return (
    <div className="container w-[55%] max-[1943px]:w-[50%] max-[1832px]:w-[50%] max-[1657px]:w-[40%] max-[1335px]:w-[50%] max-[1050px]:w-[45%] max-[823px]:w-[50%] max-[776px]:w-[100%]">
      <h1
        style={{ fontFamily: "Archivo, 'Open Sans', serif" }}
        className="text-[24px] py-[10px] pb-[13px] font-[600] text-[#1c1c1c]"
      >
        Weekly Novels
      </h1>

      {/* ======================= CAROUSEL ============================= */}
      <div>
        <div
          className="w-[800px] max-[2087px]:w-[750px] max-[1943px]:w-[700px] max-[1832px]:w-[580px] max-[1657px]:w-[420px] max-[1050px]:w-[350px] max-[776px]:w-[600px] max-[666px]:w-[500px] max-[565px]:w-[400px] max-[446px]:w-[320px] max-[357px]:w-[300px] max-[332px]:w-[280px] max-[776px]:mx-auto h-[260px] flex overflow-hidden rounded-lg relative"
          style={{ background: weeklyTop.length === 0 ? "white" : "black" }}
        >
          {weeklyTop.length === 0 ? (
            <div className="w-full text-[19px] font-[500] flex items-center justify-center">
              <p>No items present</p>
            </div>
          ) : (
            weeklyTop.map((item, index) => (
              <div
                onClick={() =>
                  navigate("/user/dashboard/more", {
                    state: item,
                  })
                }
                key={index}
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  opacity: current === index ? 1 : 0,
                  cursor: "pointer",
                  transition: "transform 5ms linear ,opacity 400ms linear",
                }}
                className="min-w-full"
              >
                <div className="absolute inset-0 -z-10">
                  <img
                    loading="eager"
                    fetchPriority="high"
                    width={800}
                    height={260}
                    src={item.bookImage}
                    className="min-w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black/30" />{" "}
                  {/* overlay for brightness */}
                  <div className="absolute inset-0 backdrop-blur-xl" />{" "}
                  {/* optional blur layer */}
                </div>

                {/* ======================== INNER INFO =============================== */}
                <div className="h-[240px] overflow-hidden flex px-[15px] py-[15px] pt-[20px]">
                  <div className="w-[30%] max-[1663px]:w-[35%] max-[446px]:w-[120px] h-[210px]">
                    <img
                      loading="eager"
                      fetchPriority="high"
                      width={120}
                      height={210}
                      src={item.bookImage}
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
                        fontFamily: "Archivo, 'Open Sans', serif",
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
                        fontFamily: "Archivo, 'Open Sans', serif",
                      }}
                      className="text-white text-[13px] py-[2px] pb-[3px] font-[400] text-justify max-[446px]:text-left"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
          {}

          {/* ====================== DOTS ============================ */}
          <div className="flex gap-x-[8px] absolute top-[90%] left-[40%]">
            {arrButton.map((_, index) => (
              <div key={index}>
                <button
                  style={{
                    backgroundColor: current === index ? "white" : "#5b5b5b",
                  }}
                  onClick={() => setCurrent(index)}
                  className="w-[10px] h-[10px] cursor-pointer rounded-[50%]"
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
