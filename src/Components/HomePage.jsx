import React, { useEffect, useState, Suspense } from "react";
import "../animation.css";
import { useNavigate } from "react-router-dom";
import newBooks from "./Requests/Home Requests/NewBooks.js";
import { fanficTags, novelinfo } from "./db/data.js";
import Spinner from "./Spinner.jsx";

// EAGER imports (visible immediately)
import Navigation from "./subcomponent/1.Home/Navigation";
import Carousel from "./subcomponent/1.Home/Carousel";
import WebNovels from "./subcomponent/1.Home/WebNovels";
import TopPicks from "./subcomponent/1.Home/TopPicks";

// LAZY imports (below-the-fold)
const NewArrivals = React.lazy(() =>
  import("./subcomponent/1.Home/NewArrivals.jsx")
);
const Footer = React.lazy(() => import("./subcomponent/1.Home/Footer.jsx"));
const FanFic = React.lazy(() => import("./subcomponent/1.Home/FanFic.jsx"));
const PopularTags = React.lazy(() =>
  import("./subcomponent/1.Home/PopularTags.jsx")
);

const HomePage = () => {
  const [fanfic, setFanfic] = useState("");
  const [popularTags, setPopularTags] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const navigate = useNavigate();

  // ========================== FETCH DATA PARALLEL =============================
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [newArrivalData, allBooksData] = await Promise.all([
          newBooks("book/newarrivals"),
          newBooks("book/allBooks"),
        ]);

        setNewArrival(
          newArrivalData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 6)
        );

        const tagCount = {};
        allBooksData
          .map((item) => item.category)
          .forEach((c) => {
            tagCount[c] = (tagCount[c] || 0) + 1;
          });

        const popularArr = Object.entries(tagCount)
          .map(([tag, popular]) => ({ tag, popular }))
          .sort((a, b) => b.popular - a.popular)
          .slice(0, 20);

        setPopularTags(popularArr);
      } catch (err) {
        console.error("Error fetching HomePage data:", err);
      }
    };

    // Defer fetch until browser is idle or after slight delay
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => fetchAll());
    } else {
      setTimeout(() => fetchAll(), 200);
    }
  }, []);

  // ========================== HANDLERS ========================================
  const handlemore = (item) => {
    if (item !== null) navigate("/user/dashboard/more", { state: item._id });
  };

  const handleCategories = (item) => {
    setFanfic(item);
    navigate(`/category/${item}`);
  };

  // ========================== RENDER ==========================================
  return (
    <main
      className="min-h-[500px]"
      style={{
        width: "100%",
        fontFamily: "Open Sans, sans-serif",
        userSelect: "none",
      }}
    >
      <Navigation />

      <div className="w-full mx-auto">
        <div className="container w-[70%] min-h-[360px] max-[1170px]:w-[80%] max-[924px]:w-[90%] mx-auto pt-[80px] max-[776px]:pt-[60px] flex max-[776px]:flex-col justify-between ">
          <Carousel />

          <WebNovels data={novelinfo} />
        </div>
      </div>
      <TopPicks handlemore={handlemore} />
      <Suspense fallback={<Spinner />}>
        <FanFic handleCategories={handleCategories} fanficTags={fanficTags} />

        <NewArrivals handlemore={handlemore} newArrival={newArrival} />

        <PopularTags
          handleCategories={handleCategories}
          popularTags={popularTags}
        />

        <Footer />
      </Suspense>
    </main>
  );
};

export default HomePage;
