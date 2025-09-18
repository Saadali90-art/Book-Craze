import logoMain from "../../../assets/Navigation/logoMain.webp";
import "../../../animation.css";
import bgimg from "../../../assets/Login/bgimg.jpg";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import google from "../../../assets/SignUp/google.jpeg";

const SignUpContainer = ({
  handlesubmit,
  showpass,
  setshowpass,
  showerror,
  shake,
  animateArr,
}) => {
  const handleGoogle = async () => {
    window.location.href = "http://127.0.0.1:8000/auth/google";
  };

  return (
    <>
      {/* ================================= SIGN UP CONTAINER ================================== */}

      <div className="w-[350px] max-[369px]:w-[250px]  h-[600px] max-[369px]:h-[530px] bg-white rounded-md flex items-center justify-center">
        <div className=" w-[85%] h-[95%]  flex flex-col ">
          {/* ==================== NAV BAR SIGN UP CONTAINER =========================== */}

          <div className="flex items-center justify-center">
            <img
              loading="eager"
              src={logoMain}
              alt="Logo Image"
              className="w-[70px] h-[70px] max-[369px]:w-[50px] max-[369px]:h-[50px] rounded-[50%]"
            />
            <h1
              className="font-[600] text-[28px] max-[369px]:text-[20px] text-transparent bg-clip-text px-[20px] max-[369px]:px-[10px] bg-cover"
              style={{
                fontFamily: "Playfair Display SC, sans-serif",
                backgroundImage: `url(${bgimg})`,
                animation: "mover 8s ease infinite",
              }}
            >
              Book Craze
            </h1>
          </div>

          <p className="text-[12px] max-[369px]:text-[10px] max-[369px]:w-[84%] text-center pb-[10px] text-gray-500 w-[90%] mx-auto font-[400] ">
            Join Book Craze and unlock a wild world of stories, shelves, and
            surprises!
          </p>

          {/* ===================== FORM SIGN UP ======================================  */}

          <SignUpForm
            handlesubmit={handlesubmit}
            showpass={showpass}
            setshowpass={setshowpass}
          />

          {/* ============================= LAST BUTTONS ==================================  */}

          <p className="text-[11px] text-[#747272] mx-auto ">
            Already Have Account
            <Link to="/login" className="text-blue-500 underline">
              Log In
            </Link>
          </p>

          <p
            className=" text-[13px]  mx-auto py-[3px] text-red-600 transition duration-1000 delay-70 "
            style={{
              opacity: showerror ? 100 : 0,
              height: showerror ? "20px" : "0px",
              transition: "opacity 500ms ease, height 500ms ease",
            }}
          >
            {animateArr[0]}
          </p>

          <button
            form="formsignup"
            type="submit"
            className="text-white bg-linear-to-bl from-blue-600 to-purple-600 w-[46%] uppercase rounded-4xl py-[6px] font-[600] mx-auto my-[18px] active:scale-95 active:brightness-70 cursor-pointer"
            style={{
              animation: shake ? "wrong 0.15s ease 3" : "none",
            }}
          >
            Sign Up
          </button>

          <div className="flex items-center gap-x-[3.5px]">
            <div className="flex-grow h-[1.5px] bg-[#cecccc]"></div>
            <span className="text-gray-400 font-[500]">OR</span>
            <div className="flex-grow h-[1.5px] bg-[#cecccc]"></div>
          </div>

          {/* ===================== MORE SIGN UP OPTIONS ======================================== */}

          <div className="w-[100%] mx-auto mt-[15px] max-[369px]:mt-[10px] mb-[20px] max-[369px]:mb-[0px] flex justify-between ">
            <button
              onClick={handleGoogle}
              className="w-[70%] max-[369px]:w-[100%] mx-auto px-[1px] py-[5px] cursor-pointer border-[2px] border-gray-300 hover:border-gray-600 rounded-[30px] flex flex-row gap-x-[20px] items-center justify-center"
            >
              <img
                loading="eager"
                className="w-[25px] h-[25px] max-[369px]:w-[20px] max-[369px]:h-[20px] rounded-[50%]"
                src={google}
                alt="Google Icon"
              />
              <p className="text-[15px] max-[369px]:text-[13px] font-[500] mb-[2px]">
                Sign in with Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpContainer;
