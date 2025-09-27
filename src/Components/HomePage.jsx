import React, { useState, Suspense } from "react";
import "../animation.css";
import { useNavigate } from "react-router-dom";
import { fanficTags, novelinfo } from "./db/data.js";
import Spinner from "./Spinner.jsx";

// EAGER imports (visible immediately)
import Navigation from "./subcomponent/1.Home/Navigation";
import Carousel from "./subcomponent/1.Home/Carousel";
import WebNovels from "./subcomponent/1.Home/WebNovels";
import TopPicks from "./subcomponent/1.Home/TopPicks";
import newArrivals from "./db/NewArrrivals.js";

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
  let popularTags = [
    "Fantasy",
    "Educational",
    "Cooking",
    "Web Development",
    "Coding",
    "Science Fiction",
    "Romance",
    "Mystery",
    "Biography",
    "History",
    "Health & Fitness",
    "Business",
    "Self-Help",
    "Travel",
    "Poetry",
    "Philosophy",
    "Children's Books",
    "Art & Design",
    "Technology",
    "Horror",
  ];

  let newArrival = newArrivals;
  const navigate = useNavigate();

  // ========================== HANDLERS ========================================
  const handlemore = (item) => {
    if (item !== null) navigate("/user/dashboard/more", { state: item });
  };

  const handleCategories = (item) => {
    setFanfic(item);
    console.log(item);
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
