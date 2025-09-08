import React from "react";
import checkmark from "../../assets/Mission/checkmark.svg";
import { useNavigate } from "react-router-dom";
import "../../animation.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-screen bg-[#f5f5f5] flex  items-center justify-center">
      <div className="container w-[400px] bg-white  h-[230px] rounded-sm shadow-[0px_0px_18px_5px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center">
          <img
            style={{
              animation: "scale 1s ease 1",
              animationDelay: "700ms",
            }}
            src={checkmark}
            alt=""
            className="w-[40px] h-[40px] mt-[20px] "
          />
        </div>

        <div className="flex flex-col items-center mt-[20px] mb-[40px] justify-center ">
          <h1
            className="text-[19px] font-[500] "
            style={{ fontFamily: "Archivo, san-serif" }}
          >
            Payment Successful
          </h1>
          <p className="text-[13px] text-gray-700">
            Thank you for your purchase
          </p>
        </div>

        <div className="flex flex-col items-center mt-[10px] justify-center ">
          <button
            onClick={() => navigate("/")}
            className="bg-[#1ab9d1] px-[10px] py-[7px] font-[500] rounded-sm text-white text-[14px] cursor-pointer  "
          >
            Go To HomePage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
