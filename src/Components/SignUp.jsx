import "../animation.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUpContainer from "./subcomponent/3.SignUp/SignUpContainer";
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
  const [error, setError] = useState(null);

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

  const handlesubmit = (e) => {
    e.preventDefault();
    setError("Backend is curently unavailable");
    setTimeout(() => {
      setError(null);
    }, 2000);
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
        error={error}
      />
    </div>
  );
};

export default SignUp;
