import { useNavigate } from "react-router-dom";
import deleteUser from "./Requests/Home Requests/DeleteUser.js";
import { useState } from "react";

const DeleteUser = () => {
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate();

  const userDelete = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formEntry = Object.fromEntries(formData.entries());

    try {
      let data = await deleteUser("user/deleteuser", {
        pass: formEntry.password,
      });

      if (data === "User Deleted") {
        localStorage.removeItem("tokenuserin");
        navigate("/");
      } else if (data === "User Unauthorized") {
        navigate("/");
      } else {
        setShowError(data);

        setTimeout(() => {
          setShowError(null);
        }, 2000);
      }
    } catch (error) {
      console.log("Error While Deleting User Account");
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
            Delete Account
          </h1>

          <form className="w-[100%] mx-auto mt-[10px]" onSubmit={userDelete}>
            <label className="text-[15px] mt-[10px]">Enter Your Password</label>
            <input
              type="text"
              required
              name="password"
              className="w-full outline-black outline-[1px] hover:outline-blue-400 focus:outline-blue-400  rounded-[2px] px-[10px] py-[5px] transition-all duration-400 ease mt-[10px]"
            />

            <p
              style={{
                opacity: showError === null ? 0 : 1,
                height: showError === null ? "0px" : "10px",
                transition: "opacity 500ms ease, height 500ms ease",
              }}
              className="text-[13px] text-red-500"
            >
              {showError}
            </p>

            <div className="w-[100%] flex justify-end mt-[15px]">
              <button
                type="submit"
                className=" bg-[#1ab9d1] px-[10px] py-[7px] font-[500] rounded-sm text-white text-[14px] cursor-pointer  active:brightness-75"
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default DeleteUser;
