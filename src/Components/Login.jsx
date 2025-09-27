import { useNavigate } from "react-router-dom";
import "../animation.css";
import { useEffect, useState } from "react";
import LogInContainer from "./subcomponent/2.Login/LogInContainer";
import bgimg from "../assets/Login/bgimg.jpg";

const Login = () => {
  const [logerror, setlogerror] = useState(false);
  const navigate = useNavigate();
  let [currentdot, setcurrentdot] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  // ================GETTING INFO FROM THE INPUT FIELDS ===================

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   setLoad(true);

  //   let data = e.target;
  //   let formdata = new FormData(data);
  //   formdata = Object.fromEntries(formdata.entries());

  //   let dataobj = {
  //     email: formdata.email,
  //     password: formdata.password,
  //   };

  //   try {
  //     await LogDataSend(dataobj, "user/login", navigate, setlogerror, setLoad);
  //   } catch (error) {
  //     console.log("Can Not Give Data To Log Data ", error.messsage);
  //   }
  // };

  const handlesubmit = (e) => {
    e.preventDefault();

    setlogerror(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
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
        <LogInContainer
          handlesubmit={handlesubmit}
          logerror={logerror}
          load={load}
          currentdot={currentdot}
        />
      </div>
    </div>
  );
};

export default Login;
