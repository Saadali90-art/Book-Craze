import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmailVerify = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  let [currentdot, setcurrentdot] = useState(0);
  let loadingdots = Array.from({ length: 4 });
  const [load, setLoad] = useState(false);

  // ================= LOADING DOTS ===============

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  // ======================= GETTING DATA FROM THE USER ID AND GETTING THE RESET AND RESET TIME OF USER

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoad(true);

    navigate("/changepassword");
  };

  return (
    <main className="w-[100%] h-screen bg-[#f5f5f5] flex  items-center justify-center">
      <section className="container w-[600px] max-[1445px]:w-[500px] max-[1024px]:w-[400px] max-[440px]:w-[350px] max-[370px]:w-[300px] bg-white  min-h-[195px]  rounded-sm shadow-[0px_0px_18px_5px_rgba(0,0,0,0.1)]">
        <div className="w-[90%] mx-auto flex flex-col mt-[15px] justify-end ">
          <h1
            className="text-[23px] max-[420px]:text-[20px] font-[500] "
            style={{ fontFamily: "Archivo, san-serif" }}
          >
            Email Verification
          </h1>

          <form
            className="w-[100%] mx-auto mt-[10px] max-[420px]:mt-[5px]"
            onSubmit={handleCheck}
          >
            <label className="text-[15px] max-[420px]:text-[14px]/[0]">
              Enter Your Verification Code Sended By Email
            </label>
            <input
              type="text"
              required
              name="verifycode"
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-[2px] px-[10px] py-[5px] transition-all duration-400 ease mt-[5px]"
            />

            <div
              style={{
                opacity: error === null ? 0 : 1,
                height: error === null ? "0px" : "10px",
                transition: "opacity 500ms ease, height 500ms ease",
              }}
            >
              <p className="text-[13px] mt-[2px] text-red-500">{error}</p>
            </div>

            <div className="w-[100%] flex mx-auto justify-end ">
              <p className=" text-[13px] text-red-500 mt-[5px]">
                The code will expire in 2 minutes.
              </p>
            </div>

            <div className="w-[100%] flex mx-auto justify-end mt-[5px] mb-[8px]">
              {load ? (
                <div
                  className="w-[90%] flex justify-end items-center mt-[10px]  "
                  style={{
                    height: load ? "10px" : "0px",
                    opacity: load ? 1 : 0,
                    transition: "height 500ms ease, opacity 500ms ease",
                  }}
                >
                  <p className="text-[15px] font-[500]">Loading</p>
                  <div className="flex gap-x-[1px] mt-[4px]">
                    {loadingdots.map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] h-[3px] bg-black rounded-[50%]"
                        style={{
                          background: currentdot >= i ? "black" : "white",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-[#1ab9d1] px-[10px] py-[7px] font-[500] rounded-sm text-white text-[14px] cursor-pointer  active:brightness-75"
                >
                  Verify
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EmailVerify;
