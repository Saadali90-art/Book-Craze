import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import empty from "../assets/DashBoard/EmptyFolder.png";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import DashboardCards from "./subcomponent/4.Dashboard/DashboardCards";
import NoData from "./subcomponent/4.Dashboard/NoData";
import specificBooks from "./Requests/DashBoard/SpecificDashBoard.js";
import Marquee from "./Marquee.jsx";

const Dashboard = () => {
  // ======================== HOOKS OR DATA VARIABLE ================================

  const [userData, setuserData] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  let loadingdots = Array.from({ length: 4 });
  let [currentdot, setcurrentdot] = useState(0);

  // ====================== GETTING DATA FROM DB =============================

  useEffect(() => {
    const fetchData = async (link) => {
      try {
        let data = await specificBooks(link);
        setuserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData("book/dashboard");
  }, []);

  // ===================== FOR LOADING OR CREATE ONE ================================

  useEffect(() => {
    if (userData.length === 0) {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    } else {
      setloading(true);
    }
  }, []);

  // ============================= FOR LOADING DOTS ===============================

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", userSelect: "none" }}>
      {/* ======================== DASHBOARD NAVIGATION BAR  ============================= */}

      <div className="container max-w-[100%]  h-[70px]  bg-gray-100 fixed z-20 mt-[30px]">
        <div className="w-[70%] mx-auto h-[70px] flex items-center justify-center  ">
          <button
            className="absolute my-auto left-[15px] p-2 rounded-[50%] bg-transparent cursor-pointer max-[395px]:left-[1px]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={"24px"} />
          </button>
          <p className="text-[24px] font-[600] text-[#1c1c1c] max-[500px]:text-[22px] ">
            DashBoard
          </p>
        </div>
        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ======================= DASHBOARD DATA ============================== */}

      <div>
        {/* ===================== IF DATA IS PRESENT IN DB  ================================ */}

        {userData === "Data Not Present" ? (
          <div className="pt-[80px] ">
            {/* =============================== IF DATA NOT PRESENT  ================================= */}

            <NoData
              loading={loading}
              loadingdots={loadingdots}
              currentdot={currentdot}
              empty={empty}
            />
          </div>
        ) : (
          <div className="w-[80%] max-[406px]:w-[90%] mx-auto pt-[120px] pb-[20px]">
            {/* ========================== YOUR DATA HUB =========================== */}

            <div className="flex justify-between items-center ">
              <p className="text-[20px] font-[600] text-[#1c1c1c] py-[10px] max-[368px]:text-[17px] ">
                Your Data Hub
              </p>
              <button
                className="px-[15px] max-[368px]:px-[12px] py-[8px] max-[368px]:py-[6px]  rounded-lg font-[500] text-[16px] max-[368px]:text-[15px] transition-all duration-300 ease bg-black text-white hover:bg-transparent hover:text-black hover:border-[1px] box-content cursor-pointer"
                onClick={() => navigate("/user/publish")}
              >
                Publish
              </button>
            </div>

            {/* =========================== PUBLISHED BOOK CARDS ============================= */}

            <DashboardCards userData={userData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
