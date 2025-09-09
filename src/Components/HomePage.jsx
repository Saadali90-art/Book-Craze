import { createContext, useContext, useEffect, useState } from "react";
import "../animation.css";
import Carousel from "./subcomponent/1.Home/Carousel";
import Navigation from "./subcomponent/1.Home/Navigation";
import WebNovels from "./subcomponent/1.Home/WebNovels";
import TopPicks from "./subcomponent/1.Home/TopPicks";
import { useNavigate } from "react-router-dom";
import newBooks from "./Requests/Home Requests/NewBooks.js";
import NewArrivals from "./subcomponent/1.Home/NewArrivals.jsx";
import { fanficTags, novelinfo } from "./db/data.js";
import Footer from "./subcomponent/1.Home/Footer.jsx";
import FanFic from "./subcomponent/1.Home/FanFic.jsx";
import PopularTags from "./subcomponent/1.Home/PopularTags.jsx";
import { ShowPopContext } from "../App.jsx";

const HomePage = () => {
  const [fanfic, setFanfic] = useState("");
  const [popularTags, setPopularTags] = useState([]);
  const navigate = useNavigate();
  const [newArrival, setNewArrival] = useState([]);
  const { showpop } = useContext(ShowPopContext);

  // =================================== NEW ARRIVALS ===================================

  useEffect(() => {
    const fetchData = async (link) => {
      let data = await newBooks(link);
      setNewArrival(
        data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6)
      );
    };

    fetchData("newarrivals");
  }, []);

  // ========================== POPULAR TAGS =============================

  useEffect(() => {
    const fetchData = async (link) => {
      let info = await newBooks(link);
      let cateArr = info.map((item) => item.category);
      let popularArr = [];
      let tagCount = {};

      cateArr.forEach((element) => {
        tagCount[element] = (tagCount[element] || 0) + 1;
      });

      let key = Object.keys(tagCount);
      let values = Object.values(tagCount);

      for (let i = 0; i < key.length; i++) {
        popularArr = [...popularArr, { tag: key[i], popular: values[i] }];
      }

      setPopularTags(
        popularArr.sort((a, b) => b.popular - a.popular).slice(0, 20)
      );
    };

    fetchData("allBooks");
  }, []);

  // ========================== MORE DATA FOR HOME PAGE ==================================

  const handlemore = (item) => {
    if (item !== null) {
      navigate("/user/dashboard/more", { state: item._id });
    }
  };

  // ================= MOVING TO CATEGORIES PAGE ===========================

  const handleCategories = (item) => {
    setFanfic(item);
    navigate(`/category/${item}`);
  };

  return (
    <main
      className="min-h-[500px]"
      style={{
        width: "100%",
        backgroundColor: showpop ? "#e6e5e5" : "white",
        fontFamily: "Open Sans, sans-serif",
        userSelect: "none",
      }}
    >
      <Navigation />

      {/* ================= BANNER SECTION =======================  */}

      <div className="w-full mx-auto">
        <div className="container w-[70%] min-h-[360px] max-[1170px]:w-[80%] max-[924px]:w-[90%] mx-auto pt-[80px] max-[776px]:pt-[60px] flex max-[776px]:flex-col justify-between ">
          <Carousel />

          <WebNovels data={novelinfo} />
        </div>
      </div>

      <TopPicks handlemore={handlemore} />

      <FanFic handleCategories={handleCategories} fanficTags={fanficTags} />

      <NewArrivals handlemore={handlemore} newArrival={newArrival} />

      <PopularTags
        handleCategories={handleCategories}
        popularTags={popularTags}
      />

      <Footer />
    </main>
  );
};

export default HomePage;
