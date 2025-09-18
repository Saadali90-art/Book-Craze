import React, { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInData from "../../Requests/Home Requests/SignInData.js";
import newBooks from "../../Requests/Home Requests/NewBooks.js";
import MoreDetail from "../../Requests/MoreDetails/More.js";
import NavBar from "./subHome/NavBar.jsx";
import Spinner from "../../Spinner.jsx";

const SideBar = React.lazy(() => import("./subHome/SideBar.jsx"));
const SearchData = React.lazy(() => import("./subHome/SearchData.jsx"));

const Navigation = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [signout, setsignout] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [search, setSearch] = useState(false);
  const [titles, setTitles] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const [suggestArr, setSuggestArr] = useState([]);
  const deBounceTimer = useRef(null);

  const navigate = useNavigate();

  // ======================= GETTING THE USER INFORMATION FOR SIGN UP ==========================

  useEffect(() => {
    const fetch = () => {
      const googleLogIn = async (query) => {
        let result = await MoreDetail({ id: query }, "googlelogin");
        localStorage.setItem("tokenuserin", result.token);
        setUserInfo(result.message);
      };

      const fetchData = async (link1, link2) => {
        const [data, titles] = await Promise.all([
          SignInData(link1),
          newBooks(link2),
        ]);
        setUserInfo(data);
        setTitles(titles);
      };

      const query = window.location.href.split("?")[1];

      if (query && query.length > 0) {
        googleLogIn(query);
      } else {
        fetchData("user/signindata", "book/titles");
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(fetch);
    } else {
      setTimeout(fetch, 200);
    }
  }, []);

  const handleSearch = (e) => {
    setSearchInfo(e.target.value);
    setSuggestion(true);

    if (deBounceTimer.current) clearTimeout(deBounceTimer.current);

    deBounceTimer.current = setTimeout(() => {
      setSuggestArr(
        titles.filter((item) =>
          item.toLowerCase().includes(searchInfo.toLowerCase())
        )
      );
    }, 500);
  };

  const handleSearchOff = () => {
    setSearch(false);
    setSuggestion(false);
  };

  const handleValue = (item) => {
    navigate(`/search/${item}`);
  };

  // =============================== HANDLING THE SIGN OUT ================================

  const handlesignout = () => {
    localStorage.removeItem("tokenuserin");

    let data = window.location.href.split("?")[1];
    if (data !== null || data !== undefined || data.length > 0) {
      navigate("/");
    }
    location.reload();
  };

  // =========================== DELETING POPUP=============================

  const deletepopup = () => {
    if (localStorage.getItem("tokenuserin")) {
      navigate(`/deleteuser/:${userInfo.name}`);
    }
  };

  return (
    <nav className="w-[100%] bg-white  fixed top-0 z-20">
      <div
        style={{
          opacity: search ? 0 : 1,
          transform: search ? "translateX(-1350px)" : "translateX(0px)",
          transition: "transform 500ms ease, opacity 300ms ease",
        }}
      >
        {/* =========================== SIDE BAR ============================= */}
        <Suspense fallback={<Spinner />}>
          <SideBar
            sideBar={sideBar}
            setSideBar={setSideBar}
            userInfo={userInfo}
          />
        </Suspense>

        {/* ======================== NAV BAR ============================ */}

        <NavBar
          setSideBar={setSideBar}
          userInfo={userInfo}
          setsignout={setsignout}
          setSearch={setSearch}
          signout={signout}
          handlesignout={handlesignout}
          deletepopup={deletepopup}
        />

        <div className="flex-grow h-[2px] bg-[#eaeaea]"></div>
      </div>

      {/* ============================= SEARCH FIELD ================================= */}
      <Suspense fallback={<Spinner />}>
        <SearchData
          search={search}
          handleSearch={handleSearch}
          handleSearchOff={handleSearchOff}
          suggestArr={suggestArr}
          suggestion={suggestion}
          handleValue={handleValue}
          searchInfo={searchInfo}
        />
      </Suspense>
    </nav>
  );
};

export default Navigation;
