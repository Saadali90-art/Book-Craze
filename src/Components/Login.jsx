import { useNavigate } from "react-router-dom";
import "../animation.css";
import { useState } from "react";
import LogInContainer from "./subcomponent/2.Login/LogInContainer";
import LogDataSend from "./Requests/LogIn/Login.js";
import bgimg from "../assets/Login//bgimg.jpg";

const Login = () => {
  const [logerror, setlogerror] = useState(false);
  const navigate = useNavigate();

  // ================GETTING INFO FROM THE INPUT FIELDS ===================

  const handlesubmit = async (e) => {
    e.preventDefault();

    let data = e.target;
    let formdata = new FormData(data);
    formdata = Object.fromEntries(formdata.entries());

    let dataobj = {
      email: formdata.email,
      password: formdata.password,
    };

    try {
      await LogDataSend(dataobj, "user/login", navigate, setlogerror);
    } catch (error) {
      console.log("Can Not Give Data To Log Data ", error.messsage);
    }
  };

  return (
    <div className="relative max-w-screen h-screen flex justify-center items-center">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <LogInContainer handlesubmit={handlesubmit} logerror={logerror} />
      </div>
    </div>
  );
};

export default Login;
