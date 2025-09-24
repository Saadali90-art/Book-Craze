import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateAccess = ({ children }) => {
  const [isAuth, setisAuth] = useState(null);
  let token = localStorage.getItem("tokenuserin");
  let loadingdots = Array.from({ length: 4 });
  let [currentdot, setcurrentdot] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  useEffect(() => {
    const ProtectedPage = async () => {
      if (!token) {
        setisAuth(false);
        return;
      }

      let reqOpt = {
        method: "GET",
        headers: { "Content-Type": "application/json", token: token },
      };

      try {
        let result = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}protect`,
          reqOpt
        );
        let response = await result.json();
        setisAuth(response.userVerf);
      } catch (error) {
        console.log(error);
      }
    };

    ProtectedPage();
  }, []);

  if (isAuth === null)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
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
    );
  if (!isAuth) return <Navigate to={"/login"} />;
  return children;
};

export default PrivateAccess;
