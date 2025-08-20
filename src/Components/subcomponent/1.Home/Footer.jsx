import React from "react";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import instagram from "../../../assets/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full backdrop-brightness-20 ">
      <div className="container w-[70%] max-[1170px]:w-[80%] max-[924px]:w-[90%] min-h-[200px] mx-auto ">
        <div className="flex max-[627px]:flex-col items-center justify-between  py-[30px] max-[627px]:gap-y-[30px]">
          <div className="max-[627px]:text-center">
            <p
              style={{ fontFamily: "Montserrat" }}
              className="text-[30px] max-[786px]:text-[26px] text-white font-[600] "
            >
              Book Craze
            </p>
            <p className="text-white max-[786px]:text-sm">
              © 2025 Book Craze. All rights reserved.
            </p>
          </div>

          <div className="flex gap-x-[20px] max-[627px]:flex-col max-[627px]:gap-y-[10px] max-[786px]:gap-x-[10px] items-center max-[786px]:text-sm max-[627px]:text-[16px]">
            <p className="cursor-pointer hover:underline underline-offset-[3px] text-white font-[400] ">
              <Link to={"/empowering/our%20purpose%20%26%20plans"}>
                Mission
              </Link>
            </p>
            <p className="cursor-pointer hover:underline underline-offset-[3px] text-white font-[400] ">
              <Link to={"/empowering/become%20a%20writer"}>Writing</Link>
            </p>
            <p className="cursor-pointer hover:underline underline-offset-[3px] text-white font-[400]">
              <Link to={"/empowering/our%20purpose%20%26%20plans#premium"}>
                Get Premium
              </Link>
            </p>
          </div>

          <div className="flex gap-x-[15px] items-center max-[786px]:gap-x-[5px] max-[627px]:gap-x-[20px]">
            <a href="https://www.facebook.com/profile.php?id=100088682175561">
              <img
                src={facebook}
                alt=""
                className="w-[30px] h-[30px] max-[786px]:w-[20px] max-[786px]:h-[20px] max-[627px]:w-[30px] max-[627px]:h-[30px]"
              />
            </a>
            <a href="https://youtube.com/@islamictalimat09876?si=L3l5ljyMETU-4xjh">
              <img
                src={youtube}
                alt=""
                className="w-[30px] h-[30px] max-[786px]:w-[20px] max-[786px]:h-[20px] max-[627px]:w-[30px] max-[627px]:h-[30px]"
              />
            </a>

            <img
              src={instagram}
              alt=""
              className="w-[30px] h-[30px] max-[786px]:w-[20px] max-[786px]:h-[20px] max-[627px]:w-[30px] max-[627px]:h-[30px]"
            />
          </div>
        </div>
        <div className="grow bg-white h-[1px] "></div>
        <div className="flex justify-center">
          {" "}
          <p className="  text-white font-[400] py-[20px] max-[627px]:text-center max-[631px]:text-sm">
            All stories and content are protected. Unauthorized reproduction is
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
