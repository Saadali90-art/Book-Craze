import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MoreDetail from "../../Requests/MoreDetails/More.js";

const EmailVerify = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let userInfo = await MoreDetail({ userid: id }, "forgot/forgotuserdata");
      setUserData(userInfo.message);
    };

    fetchData();
  }, []);

  const handleCheck = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formEntry = Object.fromEntries(formData.entries());

    if (userData !== null) {
      if (userData.resetPassExpiry < Date.now()) {
        setError("Code Expired");
        setTimeout(() => {
          setError(null);
        }, 2000);
      } else {
        if (
          formEntry.verifycode.trim().toLowerCase() ===
          userData.resetPass.trim().toLowerCase()
        ) {
          let resetToken = await MoreDetail(
            { data: userData.resetPass },
            "forgot/resetToken"
          );
          localStorage.setItem("reset", resetToken.message);

          navigate("/changepassword");
        } else {
          setError("Invalid Credientials");

          setTimeout(() => {
            setError(null);
          }, 2000);
        }
      }
    }
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
              <button
                type="submit"
                className="bg-[#1ab9d1] px-[10px] py-[7px] font-[500] rounded-sm text-white text-[14px] cursor-pointer  active:brightness-75"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EmailVerify;
