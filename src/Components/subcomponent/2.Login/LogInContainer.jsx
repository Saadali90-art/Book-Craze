import { Link } from "react-router-dom";
import logoMain from "../../../assets/Navigation/logoMain.webp";
import bgimg from "../../../assets/Login/bgimg.jpg";
import "../../../animation.css";
import google from "../../../assets/SignUp/google.jpeg";

const LogInContainer = ({ handlesubmit, logerror }) => {
  const handleGoogle = async () => {
    window.location.href = "http://127.0.0.1:8000/auth/google";
  };

  return (
    <>
      <div className="bg-white w-[350px] max-[369px]:w-[250px]  h-[500px]  max-[369px]:h-[400px] rounded-md flex justify-center items-center select-none ">
        <div className="w-[80%] h-[97%]  max-[369px]:h-[85%]  flex  flex-col ">
          <img
            src={logoMain}
            alt="Logo Loading..."
            className="w-[90px] h-[90px] max-[369px]:w-[80px] max-[369px]:h-[80px] mx-auto rounded-[50%]"
          />
          <h3
            className="font-[600] text-[32px] max-[369px]:text-[35px] text-transparent bg-clip-text px-[35px] max-[369px]:px-[25px] bg-cover pb-[10px]"
            style={{
              fontFamily: "Playfair Display SC, sans-serif",
              backgroundImage: `url(${bgimg})`,
              animation: "mover 8s ease infinite",
            }}
          >
            Book Craze
          </h3>

          <p className="text-[12px] max-[369px]:text-[10px] max-[369px]:w-[89%] text-center pb-[10px] text-gray-500 w-[80%] mx-auto font-[400] ">
            Log in to access your books, bookmarks and explore your personal
            library.
          </p>

          <form onSubmit={handlesubmit} id="Login" className="flex flex-col">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none my-[10px] text-[15px] select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d]"
            />
            <input
              type="password"
              placeholder="Password "
              name="password"
              className="bg-black/10 px-[15px] py-[5px] rounded-2xl outline-none text-[15px] select-none max-[369px]:text-[12px] max-[369px]:text-[#4d4d4d]"
            />
          </form>

          <p className="py-[10px] text-[10px] text-[#747272] mx-auto pb-[5px]">
            Create New Account
            <Link to="/signup" className="text-blue-500 underline">
              Sign Up
            </Link>
          </p>

          <p
            className="text-red-500 text-[12px] font-[600] mx-auto transition-all duration-500 ease "
            style={{ opacity: logerror ? 100 : 0 }}
          >
            Invalid Credientials
          </p>

          <button
            form="Login"
            type="submit"
            className="text-white bg-linear-to-bl from-blue-600 to-purple-600 w-[46%] uppercase rounded-4xl py-[6px] font-[600] mx-auto my-[18px] active:brightness-50 active:scale-95 mt-[10px] cursor-pointer"
          >
            Log In
          </button>

          <div className="flex items-center gap-x-[3.5px]">
            <div className="flex-grow h-[1.5px] bg-[#cecccc]"></div>
            <span className="text-gray-400 font-[500]">OR</span>
            <div className="flex-grow h-[1.5px] bg-[#cecccc]"></div>
          </div>

          <div className="w-[100%] mx-auto my-auto flex justify-between ">
            <button
              onClick={handleGoogle}
              className="w-[70%] mx-auto px-[1px] py-[5px] cursor-pointer border-[2px] border-gray-300 hover:border-gray-600 rounded-[30px] flex flex-row gap-x-[20px] items-center justify-center"
            >
              <img
                className="w-[25px] h-[25px] rounded-[50%]"
                src={google}
                alt="Google Icon"
              />
              <p className="text-[15px] font-[500] mb-[2px]">
                Sign in with Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInContainer;
