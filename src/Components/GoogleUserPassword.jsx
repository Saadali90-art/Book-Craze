import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MoreDetail from "./Requests/MoreDetails/More.js";

const GoogleUserPassword = () => {
  let { id } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGooglePassword = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formEntry = Object.fromEntries(formData.entries());

    if (
      formEntry.password.trim().toLowerCase() !==
      formEntry.confirm.trim().toLowerCase()
    ) {
      setError("Passwords do not match");

      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      try {
        let info = await MoreDetail(
          { pass: formEntry.password, id },
          "googleuserpass"
        );

        if (info.message === "Password Created") {
          localStorage.setItem("tokenuserin", info.token);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="w-[100%] h-screen bg-[#f5f5f5] flex items-center justify-center">
      <section className="container w-[600px] max-[1445px]:w-[500px] max-[1024px]:w-[400px] max-[440px]:w-[350px] max-[370px]:w-[300px] bg-white min-h-[240px]  rounded-sm shadow-[0px_0px_18px_5px_rgba(0,0,0,0.1)]">
        <div className="w-[90%] mx-auto flex flex-col mt-[15px] justify-end ">
          <h1
            className="text-[23px] max-[400px]:text-[20px] font-[500]"
            style={{ fontFamily: "Archivo, san-serif" }}
          >
            Password required
          </h1>
          <form
            className="w-[100%] mx-auto mt-[10px] max-[420px]:mt-[5px]"
            onSubmit={handleGooglePassword}
          >
            <p className="text-[15px] max-[420px]:text-[14px] mb-[5px]">
              Create a password for your account
            </p>
            <input
              minLength={6}
              type="text"
              required
              name="password"
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-[2px] px-[10px] py-[5px] transition-all duration-400 ease "
            />

            <p className="text-[15px] max-[420px]:text-[14px] my-[5px]">
              Confirm Password
            </p>
            <input
              minLength={6}
              type="text"
              required
              name="confirm"
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-[2px] px-[10px] py-[5px] transition-all duration-400 ease "
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

            <div className="w-[100%] flex mx-auto justify-end mt-[15px] mb-[8px]">
              <button
                type="submit"
                className="bg-[#1ab9d1] px-[10px] py-[7px] font-[500] rounded-sm text-white text-[14px] cursor-pointer  active:brightness-75"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default GoogleUserPassword;
