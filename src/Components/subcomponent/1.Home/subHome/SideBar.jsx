import logoMain from "../../../../assets/Login/logoMain(2).png";
import { Link, useNavigate } from "react-router-dom";
import bgSideBar from "../../../../assets/Navigation/bgsidebar.jpeg";
import closeSide from "../../../../assets/Navigation/closeSide.svg";
import "../../../../animation.css";

const SideBar = ({ sideBar, setSideBar, userInfo }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div
          style={{
            transform: sideBar ? "translateX(0px)" : "translateX(-300px)",
            transition: "transform 0.5s ease",
            backgroundImage: `url(${bgSideBar})`,
          }}
          className="absolute top-0 w-[270px] z-30 h-screen border-r-[2px] border-gray-400 bg-cover bg-no-repeat text-white/95"
        >
          {/* ================== SIDEBAR TOP SECTION ========================== */}

          <div
            className={`w-[95%] flex justify-between items-center sidebar-top ${
              sideBar ? "open" : "closed"
            }`}
          >
            <img
              loading="lazy"
              src={logoMain}
              alt=""
              className="w-[90px] h-[60px]"
            />
            <img
              loading="lazy"
              onClick={() => setSideBar(false)}
              src={closeSide}
              className="w-[20px] h-[20px] cursor-pointer invert"
              alt=""
            />
          </div>

          {/* ===================== SIDEBAR BUTTONS ======================= */}

          <div
            className="px-[20px] "
            style={{
              opacity: sideBar ? 1 : 0,
              transform: sideBar ? "translateY(0px)" : "translateY(10px)",
              transition: "transform 0.8s ease 0.4s, opacity 0.5s ease 0.3s ",
              fontFamily: "Archivo, sans-serif",
            }}
          >
            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={"/user/publish"}
            >
              Publish
            </Link>
            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={"/user/dashboard"}
            >
              Dashboard
            </Link>

            <button
              onClick={() => navigate("/user/cart", { state: "Only Show" })}
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
            >
              <p>My Cart</p>
            </button>

            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={"/empowering/discover%20new%20worlds"}
            >
              Discover Ideas
            </Link>
            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={"/login"}
            >
              Log In
            </Link>
            <button
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              onClick={() => navigate("/search")}
            >
              Search
            </button>
            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={`/user/${userInfo?.name}`}
            >
              My Account
            </Link>
            <Link
              className="flex pl-[5px] my-[2px] cursor-pointer py-[10px] w-full hover:bg-gray-200 rounded-md text-[16px] font-[400]"
              to={"/empowering/our%20purpose%20%26%20plans"}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
