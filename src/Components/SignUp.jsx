import "../animation.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUpContainer from "./subcomponent/3.SignUp/SignUpContainer";
import sendData from "./Requests/SignUp/Signup.js";
import bgSignUp from "../assets/SignUp/bgsignup.webp";

const SignUp = () => {
  // ==============  HOOKS ---------------------------

  const [errorobj, seterrorobj] = useState([]);
  const [animateArr, setanimateArr] = useState([]);
  const [shake, setshake] = useState(false);
  const [showerror, setshowerror] = useState(false);
  const [showpass, setshowpass] = useState(false);
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

  // ================================ SUBMITTING THE FORM =================================

  const handlesubmit = async (e) => {
    e.preventDefault();

    let data = e.target;
    let formdata = new FormData(data);
    let formentry = Object.fromEntries(formdata.entries());

    if (
      formentry.name === "" ||
      formentry.email === "" ||
      formentry.password === "" ||
      formentry.phone === ""
    ) {
      seterrorobj((pre) => {
        return [{ message: "Data Is Empty" }, ...pre];
      });

      return;
    }

    let datainfo = {
      name: formentry.name,
      email: formentry.email,
      password: formentry.password,
      phone: parseInt(formentry.phone),
    };

    if (formentry.password !== formentry.confirm) {
      seterrorobj((pre) => [{ message: "Password Do Not Match" }, ...pre]);
      setshowerror(true);

      setTimeout(() => {
        setshowerror(false);
      }, 2000);
    } else if (isNaN(datainfo.phone)) {
      seterrorobj((pre) => [{ message: "Phone Must Be In Number" }, ...pre]);
      setshowerror(true);

      setTimeout(() => {
        setshowerror(false);
      }, 2000);
    } else {
      if (!isNaN(datainfo.phone) && formentry.password === formentry.confirm) {
        try {
          let response = await sendData(
            datainfo,
            "user/signup",
            seterrorobj,
            navigate,
            setLoad
          );

          if (response === "Error While Sending Data To DB") {
            location.reload();
          }
        } catch (error) {
          console.log("Error While Sending Data To DB", error.message);
        }
      }
    }
  };

  // =================== SHAKE ANIMAATION ==========================================

  const shakeanimation = () => {
    if (animateArr[0] === "Data Is Empty") {
      setshake(true);
    }

    setTimeout(() => {
      setshake(false);
    }, 1000);
  };

  // ============================ useEffectes=======================================

  useEffect(() => {
    setanimateArr(errorobj.map((item) => item.message));
  }, [errorobj]);

  useEffect(() => {
    shakeanimation();
  }, [animateArr]);

  useEffect(() => {
    setshowerror(true);

    setTimeout(() => {
      setshowerror(false);
    }, 2000);
  }, [errorobj]);

  return (
    <div
      style={{ backgroundImage: `url(${bgSignUp})` }}
      className="w-screen h-screen max-[969px]:py-[20px] py-[10px] bg-no-repeat bg-cover flex items-center justify-center select-none"
    >
      <SignUpContainer
        handlesubmit={handlesubmit}
        showpass={showpass}
        setshowpass={setshowpass}
        showerror={showerror}
        shake={shake}
        animateArr={animateArr}
        load={load}
        currentdot={currentdot}
      />
    </div>
  );
};

export default SignUp;
