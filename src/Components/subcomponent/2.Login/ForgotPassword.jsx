import { useEffect, useState } from "react";
import MoreDetail from "../../Requests/MoreDetails/More.js";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  let loadingdots = Array.from({ length: 4 });
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

  const checkEmail = async (e) => {
    e.preventDefault();
    setLoad(true);

    let formData = new FormData(e.target);
    let formEntry = Object.fromEntries(formData.entries());

    try {
      let data = await MoreDetail(
        { data: formEntry.email },
        "forgot/checkemail"
      );
      if (data.message === "signup") {
        navigate(`/${data.message}`);
      }
      if (data.message === "emailverify") {
        navigate(`/emailverify/${formEntry.email}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="w-[100%] h-screen bg-[#f5f5f5] flex  items-center justify-center">
      <section className="container w-[600px] max-[1445px]:w-[500px] max-[1024px]:w-[400px] max-[440px]:w-[350px] max-[370px]:w-[300px] bg-white  h-[200px] max-[400px]:h-[190px] rounded-sm shadow-[0px_0px_18px_5px_rgba(0,0,0,0.1)]">
        <div className="w-[90%] mx-auto flex flex-col mt-[15px] justify-end ">
          <h1
            className="text-[23px] max-[400px]:text-[20px] font-[500] "
            style={{ fontFamily: "Archivo, san-serif" }}
          >
            Forgot Password
          </h1>

          <form className="w-[100%] mx-auto mt-[10px]" onSubmit={checkEmail}>
            <label className="text-[15px] mt-[10px]">
              Enter Your Email Address
            </label>
            <input
              type="email"
              required
              name="email"
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-[2px] px-[10px] py-[5px] transition-all duration-400 ease mt-[10px]"
            />
            <div className="w-[100%] flex mx-auto justify-end mt-[20px]">
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
                  Send Email
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
