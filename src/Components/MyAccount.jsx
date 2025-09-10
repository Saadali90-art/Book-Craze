import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "./subcomponent/1.Home/Navigation.jsx";
import SignInData from "./Requests/Home Requests/SignInData.js";
import specificBooks from "./Requests/DashBoard/SpecificDashBoard.js";
import accountData from "./Requests/Account Info/AccountInfo.js";
import Images from "./subcomponent/User Account/Images.jsx";
import UserInfo from "./subcomponent/User Account/UserInfo.jsx";
import Library from "./subcomponent/User Account/Library.jsx";
import UpdateInfo from "./subcomponent/User Account/UpdateInfo.jsx";
import { ShowPopContext } from "../App.jsx";

const MyAccount = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [publisherBooks, setPublisherBooks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [currentdot, setcurrentdot] = useState(0);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [cover, setCover] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const { showpop } = useContext(ShowPopContext);

  const token = localStorage.getItem("tokenuserin");
  const navigate = useNavigate();
  let loadingdots = Array.from({ length: 4 });

  if (token === undefined || token === null) {
    navigate("/login");
  }

  // ================== FETCHING USER INF0  ================================

  useEffect(() => {
    const fetchData = async (link) => {
      let datainfo = await SignInData(link);
      setAccountInfo(datainfo);
    };

    fetchData("account/myaccount");
  }, []);

  // ====================== GETTING THE USER PUBLISHED BOOKS =====================

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await specificBooks(link);

      if (data === "Data Not Present") {
        setPublisherBooks(null);
      } else {
        setPublisherBooks(data);
      }
    };

    fetchData("book/dashboard");
  }, []);

  // ============================= FOR LOADING DOTS ===============================

  useEffect(() => {
    setTimeout(() => {
      if (currentdot === 3) {
        setcurrentdot(0);
      } else {
        setcurrentdot(currentdot + 1);
      }
    }, 100);
  }, [currentdot]);

  // ========================== MORE FOR MORE DETAILS ==================================

  const handlemore = (item) => {
    if (item !== null) {
      navigate("/user/dashboard/more", { state: item._id });
    }
  };

  const handleCover = (e) => {
    let file = e.target.files[0];

    if (file) {
      setCoverImage(URL.createObjectURL(file));
      setCover(file);
    }
  };

  const handleProfile = (e) => {
    let file = e.target.files[0];

    setProfileImage(URL.createObjectURL(file));
    setProfile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let formEntry = new FormData(e.target);
    formEntry.append("profileImage", profile ?? accountInfo.profile);
    formEntry.append("coverImage", cover ?? accountInfo.cover);

    try {
      if (formEntry !== null) {
        const info = await accountData("account/changeinfo", formEntry);

        if ((updateInfo?.name ?? accountInfo.name) !== accountInfo.name) {
          if (info.token) {
            localStorage.setItem("tokenuserin", info.token);
          }
        }

        if (info.message === "Data Updated") {
          location.reload();
        } else {
          setError(info.message);
          setTimeout(() => {
            setError(null);
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="w-full min-h-[900px] select-none">
      <Navigation />

      {accountInfo !== null ? (
        // =================== IF USER DATA IS PRESENT ======================
        <section
          style={{
            height: edit ? "420px" : "510px",
            transition: "height 400ms linear 300ms",
          }}
          className="w-full mx-auto bg-[#f3f1f1] mt-[70px] max-[813px]:mt-[56px] "
        >
          <div className="container w-[70%] h-full mx-auto relative max-[1170px]:w-[80%]  max-[924px]:w-[90%]">
            {/* ========== IMAGES OF USERS  */}

            <Images
              accountInfo={accountInfo}
              coverImage={coverImage}
              edit={edit}
              handleCover={handleCover}
              handleProfile={handleProfile}
              profileImage={profileImage}
            />

            <div className=" min-h-[600px] max-[491px]:min-h-[760px] flex flex-col relative overflow-hidden ">
              <div>
                <UserInfo
                  edit={edit}
                  setEdit={setEdit}
                  accountInfo={accountInfo}
                />

                <Library
                  edit={edit}
                  handlemore={handlemore}
                  publisherBooks={publisherBooks}
                />
              </div>

              <div>
                <UpdateInfo
                  edit={edit}
                  accountInfo={accountInfo}
                  updateInfo={updateInfo}
                  setUpdateInfo={setUpdateInfo}
                  handleFormSubmit={handleFormSubmit}
                  error={error}
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        // ================== IF USER DATA NOT PRESENT ============================

        <div
          className="w-[90%] mx-auto h-[500px] flex justify-center items-center  "
          style={{
            height: loading ? "500px" : "0px",
            opacity: loading ? 1 : 0,
            transition: "height 500ms ease, opacity 500ms ease",
          }}
        >
          <p className="text-[17px] font-[600]">Loading</p>
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
      )}
    </main>
  );
};

export default MyAccount;
