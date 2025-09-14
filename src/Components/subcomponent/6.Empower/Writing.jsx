import React, { useState } from "react";
import Navigation from "../1.Home/Navigation";
import { FaArrowRight } from "react-icons/fa6";
import getStarted from "../../../assets/Writing/getstarted.png";
import writter from "../../../assets/Writing/writter.png";
import Footer from "../1.Home/Footer";
import { practices } from "./subcomponent/db.js";
import Practices from "./subcomponent/Practices.jsx";
import { useNavigate } from "react-router-dom";

const Writing = () => {
  const [current, setcurrent] = useState(null);
  const navigate = useNavigate();

  const handlejoin = () => {
    let token = localStorage.getItem("tokenuserin");

    if (token) {
      navigate("/user/publish");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div>
      {/* ========================== NAVIGATION BAR ================================= */}

      <Navigation />

      <main className="mt-[90px] max-[813px]:mt-[80px] max-[338px]:mt-[70px]">
        {/* ============================== HERO SECTION ================================ */}

        <section
          id="writing"
          className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto relative"
        >
          <div
            style={{
              backgroundImage: `url(${writter})`,
              backgroundPosition: "50% 80%",
            }}
            className="w-[100%] h-[400px] bg-cover bg-center bg-no-repeat rounded-2xl brightness-60 absolute -z-10"
          ></div>

          <div className="text-[#f3f3f3] w-[80%] h-[400px] mx-auto text-center flex flex-col items-center justify-center">
            <p
              style={{ fontFamily: "Libertinus Serif, serif" }}
              className="text-[35px]/[45px] font-[600] max-[590px]:text-[30px]/[35px] max-[590px]:font-[600] uppercase"
            >
              Discover The Writer WithIn You
            </p>
            <p className=" text-sm pr-[50px] pt-[20px] max-[590px]:text-justify max-[580px]:text-[13px] max-[590px]:pr-[0px] ">
              Even the simplest moments of life can be transformed into
              meaningful words that touch hearts and minds across generations
            </p>
          </div>
        </section>

        {/* ========================= ACCORDIN SECTION ============================== */}

        <section className="w-full bg-gray-200 ">
          <div className="container w-[70%] max-[1170px]:w-[80%] max-[924px]:w-[90%] mx-auto mt-[50px]  min-h-[500px]">
            {" "}
            <p
              style={{ fontFamily: "Archivo, serif" }}
              className="text-[26px] font-[600] pt-[20px]"
            >
              Writing Practices
            </p>
            <div className="mt-[20px]  flex flex-col gap-y-[15px] pb-[20px]">
              {practices.map((item, index) => (
                <Practices
                  current={current}
                  setcurrent={setcurrent}
                  item={item}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========================== JOIN NOW ==================================== */}

        <section className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] mx-auto pb-[30px] min-h-[200px] mt-[20px] max-[1392px]:mb-[20px] max-[964px]:mb-[0px] max-[375px]:mb-[20px] max-[699px]:mt-[0px]">
          <div className="w-full flex  justify-between ">
            <div className=" w-[40%] h-[200px] py-[30px] pb-[30px] max-[577px]:mx-auto max-[577px]:w-[90%] max-[577px]:h-[120px]">
              <p
                style={{ fontFamily: "Archivo, san-serif" }}
                className="text-[22px] max-[964px]:text-[18px] font-[700] "
              >
                Thousands of stories are waiting for you don’t miss out
              </p>
              <p
                style={{ fontFamily: "Patrick Hand, sans-serif" }}
                className="font-[500] text-[19px] max-[964px]:text-[15px] py-[5px] "
              >
                Your voice could spark the next story that lives forever.
              </p>

              <button
                onClick={() => handlejoin()}
                className="text-[16px] font-[600] border-black mt-[10px] cursor-pointer active:brightness-75 active:scale-95 border-[2px] flex absolute items-center bg-white px-[10px] py-[5px] rounded-md gap-x-[5px] hover:text-white hover:bg-black/90"
              >
                Get Started
                <FaArrowRight size={14} />
              </button>
            </div>

            <div className=" w-[18%] max-[2063px]:w-[25%] max-[1735px]:w-[35%] max-[1053px]:w-[45%] max-[735px]:w-[55%] max-[577px]:hidden">
              <img
                src={getStarted}
                className="w-[350px] max-[1062px]:w-[290px]  h-[220px] "
              />
            </div>
          </div>
        </section>

        {/* ========================== FOOTER =============================== */}

        <Footer />
      </main>
    </div>
  );
};

export default Writing;
