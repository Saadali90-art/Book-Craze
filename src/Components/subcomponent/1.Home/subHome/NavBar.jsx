import { useNavigate } from "react-router-dom";
import bgimg from "../../../../assets/Login/bgimg.jpg";
import userdelete from "../../../../assets/Navigation/userdelete.svg";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import Search from "lucide-react/dist/esm/icons/search";
import LogOut from "lucide-react/dist/esm/icons/log-out";
import UserCircle from "lucide-react/dist/esm/icons/user-circle";

import Menu from "lucide-react/dist/esm/icons/menu";

const NavBar = ({
  setSideBar,
  userInfo,
  setsignout,
  setSearch,
  signout,
  handlesignout,
  deletepopup,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container w-[70%] max-[1170px]:w-[80%]  max-[924px]:w-[90%] max-[780px]:gap-x-[20px] mx-auto flex gap-x-[10px] items-center justify-between relative ">
        {/* ============= TEXT  */}

        <div className="flex items-center gap-x-[10px]">
          <button
            onClick={() => setSideBar(true)}
            className="hidden max-[813px]:block"
          >
            <Menu className="w-[15px] h-[15px] max-[336px]:w-[12px] max-[336px]:h-[12px]" />
          </button>
          <h1
            className="font-[700] text-[30px] max-[813px]:text-[20px] max-[336px]:text-[17px] text-transparent bg-clip-text  bg-cover py-[12px]"
            style={{
              fontFamily: "Playfair Display SC, sans-serif",
              backgroundImage: `url(${bgimg})`,
              animation: "mover 8s ease infinite",
            }}
          >
            Book Craze
          </h1>
        </div>

        {/* =============================== MIDDLE PAGE BUTTONS ======================  */}

        <div
          className="flex items-center max-[813px]:hidden"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div>
            <button
              onClick={() => navigate("/")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              Home
            </button>
            <button
              onClick={() => navigate("/user/dashboard")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/user")}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/user/cart", { state: "Only Show" })}
              className=" mr-[18px]  max-[789px]:mr-[9px] max-[789px]:text-[13px] text-[15px] font-[550] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  "
            >
              My Cart
            </button>
          </div>
        </div>

        {/* ======================= RIGHT SIDE BUTTONS ========================= */}

        <div>
          {userInfo !== null ? (
            <div className="min-w-[150px] max-[357px]:min-w-[90px] flex gap-x-[10px] flex-row-reverse justify-between items-center">
              <button
                className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-lg px-[8px] py-[5px]  max-[768px]:py-[4px] font-[500] cursor-pointer text-[14.5px] max-[768px]:text-[13px] max-[336px]:text-[12px] active:scale-95 active:brightness-70 flex items-center gap-x-[5px] "
                onMouseEnter={() => setsignout(true)}
                onMouseLeave={() => setsignout(false)}
                onClick={() => setsignout(!signout)}
              >
                Hello {userInfo.name.slice(0, 4)}
                {userInfo.name.length > 4 && "..."}
                <ChevronDown className="w-[20px] h-[20px]" />
              </button>
              <button
                className="w-[30px] h-[30px] border-[1px] max-[813px]:hidden border-gray-400 flex items-center justify-center rounded-[50%] cursor-pointer max-[768px]:hidden"
                onClick={() => setSearch(true)}
              >
                <Search size={19} color="#9ca3af" />
              </button>
            </div>
          ) : (
            <div className="w-[180px] max-[589px]:w-[100px] max-[399px]:w-[95px] max-[336px]:w-[85px] flex flex-row-reverse justify-between items-center">
              <button
                onClick={() => navigate("/signup")}
                className="text-white bg-linear-to-br from-blue-600 to-purple-600 capitalize rounded-lg px-[8px] py-[8px] font-[500] cursor-pointer text-[14.5px] active:scale-95 active:brightness-70 max-[768px]:text-[15px] max-[336px]:text-[12px]  max-[768px]:py-[4px]"
              >
                Sign in
              </button>

              <button
                style={{
                  display: localStorage.getItem("tokenuserin")
                    ? "none"
                    : "visible",
                }}
                onClick={() => navigate("/login")}
                className=" text-[15px] font-[600] cursor-pointer underline decoration-transparent decoration-[3px] underline-offset-[15px] hover:decoration-blue-600 hover:underline-offset-[5px] transition-all duration-200 ease  flex items-center justify-center max-[589px]:hidden max-[768px]:text-[15px] max-[336px]:text-[12px]"
              >
                Log In
              </button>
              <button
                className="w-[30px] h-[30px] max-[768px]:w-[25px] max-[768px]:h-[25px] max-[336px]:w-[22px] max-[336px]:h-[22px] border-[1px] border-gray-400 flex items-center justify-center rounded-[50%] cursor-pointer"
                onClick={() => setSearch(true)}
              >
                <Search
                  size={20}
                  className="max-[768px]:w-[15px] max-[768px]:h-[15px] max-[336px]:w-[12px] max-[336px]:h-[12px]"
                  color="#9ca3af"
                />
              </button>
            </div>
          )}
        </div>

        {/* ==================== EXTRA DIV FOR USER OUT OF WEBSITE  */}

        <div
          onMouseEnter={() => setsignout(true)}
          onMouseLeave={() => setsignout(false)}
          className="absolute z-22  top-[70%] right-[0px] h-[80px] "
        >
          {signout && (
            <div
              className="w-[150px]  flex items-center flex-col  bg-white rounded-lg border-[2px] border-[#e4e4e4]  mt-[10px] py-[5px] "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <button
                className="text-[14px] max-[464px]:text-[13px] font-[500] cursor-pointer flex items-center w-[100%] gap-x-[7px] py-[5px] pl-[10px]  hover:backdrop-brightness-93"
                onClick={() => navigate(`/user/${userInfo.name}`)}
              >
                <UserCircle className="w-[20px] h-[20px] " />
                My Account
              </button>
              <button
                className="text-[14px] max-[464px]:text-[13px] font-[500] cursor-pointer flex items-center w-[100%] gap-x-[7px] py-[5px] pl-[10px]  hover:backdrop-brightness-93"
                onClick={handlesignout}
              >
                <LogOut className="w-[20px] h-[20px]" />
                Sign Out
              </button>
              <button
                onClick={deletepopup}
                className="text-[14px] max-[464px]:text-[13px] font-[500] cursor-pointer flex items-center w-[100%] gap-x-[7px] py-[5px] pl-[10px]  hover:backdrop-brightness-93 "
              >
                <img
                  loading="lazy"
                  src={userdelete}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                Erase Account
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
